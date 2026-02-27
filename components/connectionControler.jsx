import { CubicBezierLine } from "@react-three/drei";
import React, { useMemo, useEffect, useState, useRef } from "react";
import { useStore, getStore } from "usestore-react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { getConnectedNodes as getConnectedNodesStatic, ARTICLE_CONNECTIONS as ARTICLE_CONNECTIONS_STATIC, KEYWORD_CONNECTIONS as KEYWORD_CONNECTIONS_STATIC } from "./utils/nodeConnections";
import { getRadialPosition } from "./utils/radialPosition";
import { getCachedCrossPosition, clearCache } from "./utils/crossPositionTracker";
import "./utils/selectionStore";

/**
 * Build connection maps from processedData.links (from nodes.json).
 * This makes nodes.json the single source of truth — no script needed.
 */
function buildConnectionsFromProcessedData(processedData) {
  if (!processedData?.links?.length) return null;
  const articleConnections = {};
  const keywordConnections = {};
  processedData.links.forEach((link) => {
    const src = typeof link.source === 'string' ? link.source : link.source?.id;
    const tgt = typeof link.target === 'string' ? link.target : link.target?.id;
    if (!src || !tgt) return;
    if (src.startsWith('A')) {
      if (!articleConnections[src]) articleConnections[src] = [];
      if (!articleConnections[src].includes(tgt)) articleConnections[src].push(tgt);
    }
    if (tgt.startsWith('G')) {
      if (!keywordConnections[tgt]) keywordConnections[tgt] = [];
      if (!keywordConnections[tgt].includes(src)) keywordConnections[tgt].push(src);
    }
  });
  const getConnectedNodes = (nodeId) => {
    if (!nodeId) return [];
    if (articleConnections[nodeId]) return articleConnections[nodeId];
    if (keywordConnections[nodeId]) return keywordConnections[nodeId];
    return [];
  };
  return { articleConnections, keywordConnections, getConnectedNodes };
}

function getRelatedArticles(articleId, articleConnections, keywordConnections) {
  if (!articleId || !articleId.startsWith('A')) return [];
  const ARTICLE_CONNECTIONS = articleConnections || ARTICLE_CONNECTIONS_STATIC;
  const KEYWORD_CONNECTIONS = keywordConnections || KEYWORD_CONNECTIONS_STATIC;
  const articleKeywords = ARTICLE_CONNECTIONS[articleId] || [];
  if (articleKeywords.length === 0) return [];
  const relatedArticles = new Set();
  articleKeywords.forEach(keywordId => {
    const articlesWithSameKeyword = KEYWORD_CONNECTIONS[keywordId] || [];
    articlesWithSameKeyword.forEach(relatedArticleId => {
      if (relatedArticleId !== articleId) relatedArticles.add(relatedArticleId);
    });
  });
  return Array.from(relatedArticles);
}

function getSecondaryConnectionsForKeyword(keywordId, articleConnections, keywordConnections) {
  if (!keywordId || !keywordId.startsWith('G')) return [];
  const ARTICLE_CONNECTIONS = articleConnections || ARTICLE_CONNECTIONS_STATIC;
  const KEYWORD_CONNECTIONS = keywordConnections || KEYWORD_CONNECTIONS_STATIC;
  const connectedArticles = KEYWORD_CONNECTIONS[keywordId] || [];
  if (connectedArticles.length === 0) return [];
  const secondaryConnections = [];
  connectedArticles.forEach(articleId => {
    const articleKeywords = ARTICLE_CONNECTIONS[articleId] || [];
    articleKeywords.forEach(articleKeywordId => {
      if (articleKeywordId !== keywordId) {
        secondaryConnections.push({ from: articleId, to: articleKeywordId });
      }
    });
  });
  return secondaryConnections;
}

const ARTICLE_IDS = Array.from({ length: 29 }, (_, index) => `A${index + 1}`);
const KEYWORD_IDS = Array.from({ length: 54 }, (_, index) => `G${index + 1}`);
const TOTAL_NODES = ARTICLE_IDS.length + KEYWORD_IDS.length;
const BASE_RADIUS = 15;

const buildPositions = () => {
  const positions = {};

  ARTICLE_IDS.forEach((id, index) => {
    positions[id] = getRadialPosition(index, TOTAL_NODES, BASE_RADIUS);
  });

  KEYWORD_IDS.forEach((id, index) => {
    positions[id] = getRadialPosition(
      ARTICLE_IDS.length + index,
      TOTAL_NODES,
      BASE_RADIUS
    );
  });

  return positions;
};

function AnimatedConnectionLine({
  start,
  end,
  v0,
  v1,
  index,
  totalConnections,
  color = "#e9ff00",
  shouldHide = false
}) {
  const [opacity, setOpacity] = useState(0);
  const [lineWidth, setLineWidth] = useState(0.5);
  const revealStartTime = useRef(null);
  const animationComplete = useRef(false);
  const hasAnimatedRef = useRef(false);
  const isInitialMountRef = useRef(true);
  const lineKeyRef = useRef(`${start[0]}-${start[1]}-${end[0]}-${end[1]}-${v0?.[0]}-${v1?.[0]}`);

  useEffect(() => {
    const newKey = `${start[0].toFixed(1)}-${start[1].toFixed(1)}-${end[0].toFixed(1)}-${end[1].toFixed(1)}-${v0?.[0]?.toFixed(1)}-${v1?.[0]?.toFixed(1)}`;
    if (newKey !== lineKeyRef.current) {
      lineKeyRef.current = newKey;
      if (isInitialMountRef.current) {
        setOpacity(0);
        revealStartTime.current = Date.now();
        hasAnimatedRef.current = false;
        isInitialMountRef.current = false;
      }
    }
  }, [start, end, v0, v1]);

  useEffect(() => {
    if (shouldHide) {
      setOpacity(0);
      hasAnimatedRef.current = false;
      return;
    }

    if (!hasAnimatedRef.current) {
      revealStartTime.current = Date.now();
      const delay = index * 20;

      const timer = setTimeout(() => {
        const startTime = Date.now();
        const duration = 300;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 3);
          setOpacity(eased);
          setLineWidth(0.5 + eased * 0.5);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            animationComplete.current = true;
            hasAnimatedRef.current = true;
          }
        };

        animate();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [index, shouldHide]);

  useEffect(() => {
    if (hasAnimatedRef.current && !shouldHide && opacity < 0.9) {
      setOpacity(1);
      setLineWidth(1);
    }
  }, [start, end, v0, v1, shouldHide, opacity]);

  const isValidControlPoint = (cp) => {
    return cp && Array.isArray(cp) && cp.length === 3 &&
      cp.every(val => typeof val === 'number' && !isNaN(val) && isFinite(val));
  };

  const isValidPoint = (p) => {
    return p && Array.isArray(p) && p.length === 3 &&
      p.every(val => typeof val === 'number' && !isNaN(val) && isFinite(val));
  };

  if (!isValidPoint(start) || !isValidPoint(end) || !isValidControlPoint(v0) || !isValidControlPoint(v1)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[AnimatedConnectionLine] Invalid points:', { start, end, v0, v1 });
    }
    return null;
  }

  if (opacity === 0 && shouldHide) return null;

  return (
    <group renderOrder={4} frustumCulled={false}>
      <CubicBezierLine
        start={start}
        end={end}
        midA={v0} // First control point (goes down from article)
        midB={v1} // Second control point (curves to keyword from down part)
        color={color}
        lineWidth={lineWidth}
        opacity={opacity}
        transparent
        depthWrite={false}
        depthTest={true}
      />
    </group>
  );
}

export function ConnectionController({ processedData }) {
  const { camera } = useThree();
  const [selectedNode] = useStore("selectedNodeStore", null);
  const [highlightedNodes] = useStore("highlightedNodesStore", []);
  const [linesVisible] = useStore("connectionLinesVisibilityStore", true);

  const connectionMaps = useMemo(() => buildConnectionsFromProcessedData(processedData), [processedData]);
  const getConnectedNodes = connectionMaps ? connectionMaps.getConnectedNodes : getConnectedNodesStatic;
  const articleConnections = connectionMaps ? connectionMaps.articleConnections : ARTICLE_CONNECTIONS_STATIC;
  const keywordConnections = connectionMaps ? connectionMaps.keywordConnections : KEYWORD_CONNECTIONS_STATIC;

  const getPositions = () => {
    if (processedData && processedData.nodeMap) {
      const posMap = {};
      processedData.nodeMap.forEach((node, id) => {
        posMap[id] = node.position || [0, 0, 0];
      });
      return posMap;
    }
    return buildPositions();
  };

  useEffect(() => {
    const highlightedStore = getStore('highlightedNodesStore');
    const secondaryHighlightedStore = getStore('secondaryHighlightedArticlesStore');
    const highlighted = new Set();
    const secondaryHighlighted = new Set();

    if (selectedNode?.id) {
      highlighted.add(selectedNode.id);
      const connected = getConnectedNodes(selectedNode.id);
      connected.forEach(nodeId => {
        if (nodeId) {
          highlighted.add(nodeId);
        }
      });

      if (selectedNode.id.startsWith('A')) {
        const relatedArticles = getRelatedArticles(selectedNode.id, articleConnections, keywordConnections);
        relatedArticles.forEach(articleId => {
          secondaryHighlighted.add(articleId);
        });
      }
    }

    requestAnimationFrame(() => {
      highlightedStore.setState(Array.from(highlighted));
      secondaryHighlightedStore.setState(Array.from(secondaryHighlighted));
    });

    crossPositionCache.current.clear();
    clearCache();
  }, [selectedNode]);

  const lastCheckRef = useRef(0);
  const lastPositionsRef = useRef({});
  const lastCameraPosRef = useRef(null);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useFrame((state) => {
    const now = Date.now();
    if (now - lastCheckRef.current < 16) return;
    lastCheckRef.current = now;

    if (!processedData || !processedData.nodeMap || !selectedNode?.id) return;

    const currentCameraPos = state.camera.position;
    const cameraChanged = !lastCameraPosRef.current || 
      Math.abs(currentCameraPos.x - lastCameraPosRef.current.x) > 0.01 ||
      Math.abs(currentCameraPos.y - lastCameraPosRef.current.y) > 0.01 ||
      Math.abs(currentCameraPos.z - lastCameraPosRef.current.z) > 0.01;

    if (cameraChanged) {
      lastCameraPosRef.current = currentCameraPos.clone();
    }


    const currentPositions = getPositions();
    const connectedIds = getConnectedNodes(selectedNode.id);
    const allRelevantIds = [selectedNode.id, ...connectedIds];

    let hasChanges = false;
    allRelevantIds.forEach(nodeId => {
      const currentPos = currentPositions[nodeId];
      if (!currentPos) return;

      const lastPos = lastPositionsRef.current[nodeId];
      if (!lastPos) {
        hasChanges = true;
        lastPositionsRef.current[nodeId] = [...currentPos];
      } else {
        const threshold = 0.05;
        const changed =
          Math.abs(currentPos[0] - lastPos[0]) > threshold ||
          Math.abs(currentPos[1] - lastPos[1]) > threshold ||
          Math.abs(currentPos[2] - lastPos[2]) > threshold;

        if (changed) {
          hasChanges = true;
          lastPositionsRef.current[nodeId] = [...currentPos];
        }
      }
    });

    if (hasChanges || cameraChanged) {
      requestAnimationFrame(() => {
        setUpdateTrigger(prev => prev + 1);
      });
    }
  });

  const tempVec1 = useRef(new THREE.Vector3());
  const tempVec2 = useRef(new THREE.Vector3());
  const tempVec3 = useRef(new THREE.Vector3());
  const tempVec4 = useRef(new THREE.Vector3());
  const worldUpVec = useRef(new THREE.Vector3(0, 1, 0));
  const rightVec = useRef(new THREE.Vector3(1, 0, 0));

  const generateControlPoints = (start, end, index, isArticleToKeyword, isKeywordSource = false) => {
    if (!start || !end || !Array.isArray(start) || !Array.isArray(end) ||
      start.length !== 3 || end.length !== 3 ||
      start.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v)) ||
      end.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
      const mid = [
        ((start?.[0] || 0) + (end?.[0] || 0)) / 2,
        ((start?.[1] || 0) + (end?.[1] || 0)) / 2,
        ((start?.[2] || 0) + (end?.[2] || 0)) / 2,
      ];
      return { v0: mid, v1: mid };
    }

    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    const dz = end[2] - start[2];
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    if (distance < 0.001 || !isFinite(distance)) {
      const mid = [
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (start[2] + end[2]) / 2,
      ];
      return { v0: mid, v1: mid };
    }

    const direction = tempVec1.current.set(dx, dy, dz);

    if (direction.length() < 0.001 || !isFinite(direction.length())) {
      direction.set(1, 0, 0);
    } else {
      direction.normalize();
    }

    const worldUp = worldUpVec.current;
    let perp = tempVec2.current.crossVectors(worldUp, direction);

    if (perp.length() < 0.001) {
      perp.crossVectors(rightVec.current, direction);
    }
    perp.normalize();

    const perp2 = tempVec3.current.crossVectors(direction, perp).normalize();

    const angleVariation = (index * 30) % 360;
    const angle = (angleVariation * Math.PI) / 180;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const horizontalOffset = distance * 0.08 * cosAngle;
    const horizontalOffset2 = distance * 0.08 * sinAngle;

    const straightDownDistance = isKeywordSource ? 12.0 : 8.0;

    const v0 = tempVec4.current.set(
      start[0] - worldUp.x * straightDownDistance + perp.x * horizontalOffset * 0.1 + perp2.x * horizontalOffset2 * 0.1,
      start[1] - worldUp.y * straightDownDistance,
      start[2] - worldUp.z * straightDownDistance + perp.z * horizontalOffset * 0.1 + perp2.z * horizontalOffset2 * 0.1
    );

    const upOffset2 = distance * 0.70;
    const verticalOffset2 = isKeywordSource ? -distance * 0.15 : -distance * 0.10;

    const v1 = tempVec1.current.set(
      start[0] + direction.x * upOffset2 + perp.x * horizontalOffset * 0.2 + perp2.x * horizontalOffset2 * 0.2,
      start[1] + direction.y * upOffset2 + verticalOffset2 + perp.y * horizontalOffset * 0.2 + perp2.y * horizontalOffset2 * 0.2,
      start[2] + direction.z * upOffset2 + perp.z * horizontalOffset * 0.2 + perp2.z * horizontalOffset2 * 0.2
    );

    const sanitize = (val) => (typeof val === 'number' && isFinite(val) && !isNaN(val)) ? val : 0;
    const cp0 = [sanitize(v0.x), sanitize(v0.y), sanitize(v0.z)];
    const cp1 = [sanitize(v1.x), sanitize(v1.y), sanitize(v1.z)];

    return {
      v0: cp0,
      v1: cp1
    };
  };
  const centerVec = useRef(new THREE.Vector3(0, 0, 0));
  const worldUpCross = useRef(new THREE.Vector3(0, 1, 0));
  const tempNodeVec = useRef(new THREE.Vector3());
  const tempDirToCenter = useRef(new THREE.Vector3());
  const tempRight = useRef(new THREE.Vector3());
  const tempUp = useRef(new THREE.Vector3());
  const tempResult = useRef(new THREE.Vector3());
  const crossPositionCache = useRef(new Map());

  const getCrossPosition = (nodeId, nodePosition, camera = null) => {
    const trackedPosition = getCachedCrossPosition(nodeId);
    if (trackedPosition) {
      return trackedPosition;
    }

    let selectedNodeForCache = null;
    let highlightedNodesForCache = [];
    try {
      selectedNodeForCache = getStore('selectedNodeStore', null);
      const highlightedStoreValue = getStore('highlightedNodesStore', []);
      highlightedNodesForCache = Array.isArray(highlightedStoreValue) ? highlightedStoreValue : [];
    } catch (e) {
      // Store not available
    }

    const isHighlightedForCache = selectedNodeForCache?.id === nodeId || highlightedNodesForCache.includes(nodeId);
    let secondaryHighlightedForCache = [];
    try {
      const secondaryHighlightedStoreValue = getStore('secondaryHighlightedArticlesStore', []);
      secondaryHighlightedForCache = Array.isArray(secondaryHighlightedStoreValue) ? secondaryHighlightedStoreValue : [];
    } catch (e) {
      // Store not available
    }
    const isSecondaryHighlightedForCache = secondaryHighlightedForCache.includes(nodeId);
    const isDimmedForCache = selectedNodeForCache && selectedNodeForCache.id !== nodeId && !highlightedNodesForCache.includes(nodeId) && !isSecondaryHighlightedForCache;
    const scaleState = isHighlightedForCache ? '1.3' : (isDimmedForCache ? '0.6' : '1.0');
    const secondaryState = isSecondaryHighlightedForCache ? 'secondary' : 'normal';
    const cameraState = camera ? `${camera.position.x.toFixed(3)}-${camera.position.y.toFixed(3)}-${camera.position.z.toFixed(3)}` : 'no-camera';

    const cacheKey = `${nodeId}-${nodePosition[0].toFixed(3)}-${nodePosition[1].toFixed(3)}-${nodePosition[2].toFixed(3)}-${scaleState}-${secondaryState}-${cameraState}`;
    const cached = crossPositionCache.current.get(cacheKey);
    if (cached && !isHighlightedForCache && !isSecondaryHighlightedForCache) return cached;

    const center = centerVec.current;
    const nodeVec = tempNodeVec.current.set(nodePosition[0], nodePosition[1], nodePosition[2]);
    
    let directionToTarget = tempDirToCenter.current;
    if ((isHighlightedForCache || isSecondaryHighlightedForCache) && camera) {
      directionToTarget.subVectors(camera.position, nodeVec).normalize();
    } else {
      directionToTarget.subVectors(center, nodeVec).normalize();
    }

    const worldUp = worldUpCross.current;
    let right = tempRight.current.crossVectors(worldUp, directionToTarget);
    if (right.length() < 0.001) {
      right.set(1, 0, 0);
    }
    right.normalize();

    let up = tempUp.current.crossVectors(directionToTarget, right).normalize();

    if (Math.abs(directionToTarget.dot(worldUp)) > 0.99) {
      up.set(1, 0, 0);
      right.set(0, 0, 1);
    }

    const isArticle = nodeId && nodeId.startsWith('A');
    const result = tempResult.current;

    if (isArticle) {
      const trackedPosition = getCachedCrossPosition(nodeId);
      if (trackedPosition) {
        return trackedPosition;
      }

      const baseImageHeight = 14.4;
      const borderWidth = 0.12;
      const baseTotalHeight = baseImageHeight + (borderWidth * 2);
      const nodeGroupScale = 0.5;

      let selectedNode = null;
      let highlightedNodes = [];
      let secondaryHighlightedArticles = [];
      try {
        selectedNode = getStore('selectedNodeStore', null);
        const highlightedStoreValue = getStore('highlightedNodesStore', []);
        highlightedNodes = Array.isArray(highlightedStoreValue) ? highlightedStoreValue : [];
        const secondaryHighlightedStoreValue = getStore('secondaryHighlightedArticlesStore', []);
        secondaryHighlightedArticles = Array.isArray(secondaryHighlightedStoreValue) ? secondaryHighlightedStoreValue : [];
      } catch (e) {
        // Store not available, use defaults
      }

      if (!Array.isArray(highlightedNodes)) {
        highlightedNodes = [];
      }
      if (!Array.isArray(secondaryHighlightedArticles)) {
        secondaryHighlightedArticles = [];
      }

      const isHighlighted = selectedNode?.id === nodeId || highlightedNodes.includes(nodeId);
      const isSecondaryHighlighted = secondaryHighlightedArticles.includes(nodeId);
      const isDimmed = selectedNode && selectedNode.id !== nodeId && !highlightedNodes.includes(nodeId) && !isSecondaryHighlighted;

      let articleScale = 1.0;
      if (isHighlighted) {
        articleScale = 1.3;
      } else if (isDimmed) {
        articleScale = 0.6;
      }

      const scaledTotalHeight = baseTotalHeight * articleScale;
      
      if ((isHighlighted || isSecondaryHighlighted) && camera) {
        const directionToCamera = tempDirToCenter.current.subVectors(camera.position, nodeVec).normalize();
        const worldUp = worldUpCross.current;
        
        let right = tempRight.current.crossVectors(worldUp, directionToCamera);
        if (right.length() < 0.001) {
          right.set(1, 0, 0);
        }
        right.normalize();
        
        let correctedUp = tempUp.current.crossVectors(directionToCamera, right).normalize();
        
        const basis = tempMatrix.current.makeBasis(right, correctedUp, directionToCamera);
        const rotationQuat = tempQuat.current.setFromRotationMatrix(basis);
        
        const forwardVec = tempVec4.current.set(0, 0, 1);
        forwardVec.applyQuaternion(rotationQuat);
        const tiltAngle = Math.acos(Math.max(-1, Math.min(1, forwardVec.dot(worldUp)))) * (180 / Math.PI);
        const tiltFromCamera = Math.acos(Math.max(-1, Math.min(1, directionToCamera.dot(worldUp)))) * (180 / Math.PI);
        
        let bottomCenterOffset;
        if (isSecondaryHighlighted) {
          const baseOffset = -(scaledTotalHeight / 2 + 0.1) * nodeGroupScale;
          const tiltFactor = Math.cos(tiltAngle * Math.PI / 180);
          bottomCenterOffset = baseOffset / Math.max(0.1, tiltFactor);
        } else {
          bottomCenterOffset = -(scaledTotalHeight / 1.2 + 0.1) * nodeGroupScale;
        }
        
        const localBottom = tempLocalBottom.current.set(0, bottomCenterOffset, 0);
        const rotatedBottom = tempRotatedBottom.current.copy(localBottom).applyQuaternion(rotationQuat);
        
        const offsetDiff = rotatedBottom.y - localBottom.y;
        const horizontalOffset = Math.sqrt(rotatedBottom.x * rotatedBottom.x + rotatedBottom.z * rotatedBottom.z);
        
        if (isSecondaryHighlighted) {
          console.log('%c[SECONDARY] Node: ' + nodeId, 'color: orange; font-weight: bold; font-size: 14px;', {
            scaledTotalHeight: scaledTotalHeight.toFixed(3),
            bottomCenterOffset: bottomCenterOffset.toFixed(3),
            localBottom: `(${localBottom.x.toFixed(3)}, ${localBottom.y.toFixed(3)}, ${localBottom.z.toFixed(3)})`,
            rotatedBottom: `(${rotatedBottom.x.toFixed(3)}, ${rotatedBottom.y.toFixed(3)}, ${rotatedBottom.z.toFixed(3)})`,
            offsetDiff: offsetDiff.toFixed(3),
            horizontalOffset: horizontalOffset.toFixed(3),
            tiltAngle: tiltAngle.toFixed(2) + '°',
            tiltFromCamera: tiltFromCamera.toFixed(2) + '°',
            cameraPos: `(${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`,
            nodePos: `(${nodeVec.x.toFixed(2)}, ${nodeVec.y.toFixed(2)}, ${nodeVec.z.toFixed(2)})`,
            directionToCamera: `(${directionToCamera.x.toFixed(3)}, ${directionToCamera.y.toFixed(3)}, ${directionToCamera.z.toFixed(3)})`
          });
        }
        if (isHighlighted) {
          console.log('%c[HIGHLIGHTED] Node: ' + nodeId, 'color: green; font-weight: bold; font-size: 14px;', {
            scaledTotalHeight: scaledTotalHeight.toFixed(3),
            bottomCenterOffset: bottomCenterOffset.toFixed(3),
            localBottom: `(${localBottom.x.toFixed(3)}, ${localBottom.y.toFixed(3)}, ${localBottom.z.toFixed(3)})`,
            rotatedBottom: `(${rotatedBottom.x.toFixed(3)}, ${rotatedBottom.y.toFixed(3)}, ${rotatedBottom.z.toFixed(3)})`,
            offsetDiff: offsetDiff.toFixed(3),
            horizontalOffset: horizontalOffset.toFixed(3),
            tiltAngle: tiltAngle.toFixed(2) + '°',
            tiltFromCamera: tiltFromCamera.toFixed(2) + '°',
            cameraPos: `(${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`,
            nodePos: `(${nodeVec.x.toFixed(2)}, ${nodeVec.y.toFixed(2)}, ${nodeVec.z.toFixed(2)})`,
            directionToCamera: `(${directionToCamera.x.toFixed(3)}, ${directionToCamera.y.toFixed(3)}, ${directionToCamera.z.toFixed(3)})`
          });
        }
        
        result.copy(nodeVec);
        result.add(rotatedBottom);
      } else {
        let bottomCenterOffset;
        if (isSecondaryHighlighted) {
          bottomCenterOffset = -(scaledTotalHeight / 1.8 + 0.15) * nodeGroupScale;
        } else {
          bottomCenterOffset = -(scaledTotalHeight / 1.2 + 0.1) * nodeGroupScale;
        }
        result.copy(nodeVec);
        result.addScaledVector(up, bottomCenterOffset);
      }
    } else {
      const keywordHeight = 0.4;
      const keywordOffset = -(keywordHeight / 2);
      result.copy(nodeVec).addScaledVector(up, keywordOffset);
    }

    const resultArray = [result.x, result.y, result.z];
    crossPositionCache.current.set(cacheKey, resultArray);
    if (crossPositionCache.current.size > 200) {
      crossPositionCache.current.clear();
    }
    return resultArray;
  };

  const tempStartVec = useRef(new THREE.Vector3());
  const tempEndVec = useRef(new THREE.Vector3());
  const tempLocalBottom = useRef(new THREE.Vector3());
  const tempRotatedBottom = useRef(new THREE.Vector3());
  const tempQuat = useRef(new THREE.Quaternion());
  const tempMatrix = useRef(new THREE.Matrix4());

  const createLine = (startPos, endPos, index, totalConnections, color, isArticleToKeyword, startId, endId) => {
    const isKeywordSource = startId && startId.startsWith('G');
    if (!startPos || !endPos || !Array.isArray(startPos) || !Array.isArray(endPos) ||
      startPos.length !== 3 || endPos.length !== 3 ||
      startPos.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v)) ||
      endPos.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
      return null;
    }

    const startPosVec = tempStartVec.current.set(startPos[0], startPos[1], startPos[2]);
    const endPosVec = tempEndVec.current.set(endPos[0], endPos[1], endPos[2]);
    const dx = endPosVec.x - startPosVec.x;
    const dy = endPosVec.y - startPosVec.y;
    const dz = endPosVec.z - startPosVec.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    if (distance < 0.01 || !isFinite(distance)) {
      return null;
    }

    let controlPoints = generateControlPoints(startPos, endPos, index, isArticleToKeyword, isKeywordSource);

    if (!controlPoints || !controlPoints.v0 || !controlPoints.v1 ||
      !Array.isArray(controlPoints.v0) || !Array.isArray(controlPoints.v1) ||
      controlPoints.v0.length !== 3 || controlPoints.v1.length !== 3 ||
      controlPoints.v0.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v)) ||
      controlPoints.v1.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
      return null;
    }

    const key = `${startId}-${endId}-${index}`;

    return (
      <AnimatedConnectionLine
        key={key}
        start={startPos}
        end={endPos}
        v0={controlPoints.v0}
        v1={controlPoints.v1}
        index={index}
        totalConnections={totalConnections}
        color={color}
        shouldHide={!linesVisible}
      />
    );
  };

  const lines = useMemo(() => {
    if (!selectedNode?.id || !linesVisible) {
      return [];
    }

    const positions = getPositions();
    const nodePosition = positions[selectedNode.id];
    if (!nodePosition || !Array.isArray(nodePosition) || nodePosition.length !== 3) {
      return [];
    }

    const startPosition = getCrossPosition(selectedNode.id, nodePosition, camera);

    if (!startPosition || !Array.isArray(startPosition) || startPosition.length !== 3 ||
      startPosition.some(v => typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[ConnectionController] Invalid start position for ${selectedNode.id}:`, startPosition);
      }
      return [];
    }

    const allLines = [];
    const isArticle = selectedNode.id.startsWith('A');

    const targets = getConnectedNodes(selectedNode.id) || [];
    const targetsLength = targets ? targets.length : 0;
    if (targetsLength > 0) {
      for (let i = 0; i < targetsLength; i++) {
        const targetId = targets[i];
        const targetNodePosition = positions[targetId];
        if (!targetNodePosition) continue;

        const endPosition = getCrossPosition(targetId, targetNodePosition, camera);
        const isArticleToKeyword = isArticle && targetId.startsWith('G');

        const line = createLine(
          startPosition,
          endPosition,
          i,
          targetsLength,
          "#e9ff00",
          isArticleToKeyword,
          selectedNode.id,
          targetId
        );

        if (line) allLines.push(line);
      }
    }

    if (isArticle) {
      const relatedArticles = getRelatedArticles(selectedNode.id, articleConnections, keywordConnections);
      const selectedArticleKeywords = articleConnections[selectedNode.id] || [];
      const selectedKeywordsSet = new Set(selectedArticleKeywords);

      let whiteLineIndex = 0;
      let totalWhiteLines = 0;
      for (let i = 0; i < relatedArticles.length; i++) {
        const relatedArticleKeywords = articleConnections[relatedArticles[i]] || [];
        totalWhiteLines += relatedArticleKeywords.filter(kw => selectedKeywordsSet.has(kw)).length;
      }

      for (let i = 0; i < relatedArticles.length; i++) {
        const relatedArticleId = relatedArticles[i];
        const relatedArticlePos = positions[relatedArticleId];
        if (!relatedArticlePos) continue;

        const relatedArticleKeywords = articleConnections[relatedArticleId] || [];
        const sharedKeywords = relatedArticleKeywords.filter(kw => selectedKeywordsSet.has(kw));

        for (let j = 0; j < sharedKeywords.length; j++) {
          const sharedKeywordId = sharedKeywords[j];
          const keywordPos = positions[sharedKeywordId];
          if (!keywordPos) continue;

          const relatedArticleStartPos = getCrossPosition(relatedArticleId, relatedArticlePos, camera);
          const keywordEndPos = getCrossPosition(sharedKeywordId, keywordPos, camera);

          const line = createLine(
            relatedArticleStartPos,
            keywordEndPos,
            targetsLength + whiteLineIndex,
            targetsLength + totalWhiteLines,
            "#444444",
            true,
            relatedArticleId,
            sharedKeywordId
          );

          if (line) {
            allLines.push(line);
            whiteLineIndex++;
          }
        }
      }
    }

    return allLines;
  }, [selectedNode?.id, updateTrigger, linesVisible, processedData, articleConnections, keywordConnections]);

  useEffect(() => {
    if (selectedNode?.id && linesVisible && lines.length === 0) {
      requestAnimationFrame(() => {
        setUpdateTrigger(prev => prev + 1);
      });
    }
  }, [selectedNode, linesVisible, lines.length]);

  if (!lines.length) {
    return null;
  }

  return <group frustumCulled={false}>{lines}</group>;
}

export default ConnectionController;
