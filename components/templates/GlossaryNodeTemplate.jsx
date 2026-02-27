import React, { useEffect, useRef, useState, useMemo, useCallback, Suspense } from "react";
import { useGLTF, Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { createStore, useStore } from "usestore-react";
import { createWhiteMaterial } from "../utils/whiteMaterial";
import { useConnectionHighlight } from "../utils/useConnectionHighlight";
import { useShouldShowTitle } from "../utils/useShouldShowTitle";
import { useNodeVisibility } from "../utils/LoadingStateManager";
import "./GlossaryNodeTemplate.scss";

function GlossaryNodeWithModel({ nodeData, ...props }) {
  const { nodes, materials } = useGLTF(nodeData.modelPath);
  return <GlossaryNodeContent nodeData={nodeData} nodes={nodes} materials={materials} {...props} />;
}

function GlossaryNodeWithoutModel({ nodeData, ...props }) {
  return <GlossaryNodeContent nodeData={nodeData} nodes={{}} materials={{}} {...props} />;
}

function GlossaryNodeContent({
  nodeData,
  nodes,
  materials,
  showAllLines,
  title,
  active,
  props,
  setTitle,
  setDefault,
  glossaryShellComponent,
}) {
  const objectRef = useRef();
  const [linesActive, setLinesActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [modalIsOpen, setOpen] = useState(false);
  const isSelectingRef = useRef(false);

  const position = nodeData.position || [0, 0, 0];
  const centerPoint = position;
  const [opacityMap] = useStore('elementOpacityStore', {});
  const opacity = opacityMap[nodeData.id] !== undefined ? opacityMap[nodeData.id] : 1.0;
  
  const crossBottomOffset = useMemo(() => {
    return 1.93; // Offset downward from keyword center (matches connectionController with 0.35 scale)
  }, []);
  
  const nodeIndex = nodeData.index !== undefined ? nodeData.index : 0;
  const totalNodes = 83;
  const { isVisible, opacity: loadingOpacity } = useNodeVisibility(nodeData.id, nodeIndex, totalNodes);
  
  const finalOpacity = useMemo(() => {
    if (!isVisible) return 0;
    return opacity * loadingOpacity;
  }, [isVisible, opacity, loadingOpacity]);

  const isDimmed = useMemo(() => {
    const isKeyword = nodeData.id && nodeData.id.startsWith('G');
    return isKeyword && Math.abs(finalOpacity - 0.3) < 0.01;
  }, [finalOpacity, nodeData.id]);
  
  const whiteMaterial = useMemo(() => {
    const material = createWhiteMaterial();
    material.opacity = finalOpacity;
    material.transparent = finalOpacity < 1.0;
    return material;
  }, [finalOpacity]);
  
  useConnectionHighlight(nodeData.id, linesActive);
  const shouldShowTitle = useShouldShowTitle(nodeData.id);
  
  const [highlightedNodes] = useStore('highlightedNodesStore', []);
  const isHighlighted = useMemo(() => {
    return Array.isArray(highlightedNodes) && highlightedNodes.includes(nodeData.id);
  }, [highlightedNodes, nodeData.id]);

  const [selectedNode, setSelectedNode] = useStore('selectedNodeStore', null);
  const [, setWalkThroughActive] = useStore('walkThroughActive', false);
  const isSelected = useMemo(() => {
    return selectedNode?.id === nodeData.id;
  }, [selectedNode, nodeData.id]);
  
  const [, setHighlightedNodes] = useStore('highlightedNodesStore', []);

  const isSecondaryHighlighted = useMemo(() => {
    return isHighlighted && !isSelected && !linesActive;
  }, [isHighlighted, isSelected, linesActive]);

  const [clickCounter4, setClickCounter4] = useStore(`${nodeData.id}Store`, false);
  useEffect(() => {
    if (isSelectingRef.current) {
      return;
    }
    
    if (selectedNode && selectedNode.id !== nodeData.id && linesActive) {
      requestAnimationFrame(() => {
        if (!isSelectingRef.current) {
          setClickCount(0);
          setClicked(false);
          setLinesActive(false);
        }
      });
    }
  }, [selectedNode, linesActive, nodeData.id]);

  useEffect(() => {
    if (materials && Object.keys(materials).length > 0) {
      Object.values(materials).forEach(material => {
        if (material) {
          material.opacity = finalOpacity;
          material.transparent = finalOpacity < 1.0;
        }
      });
    }
  }, [finalOpacity, materials]);

  function handleOpen() {
    setOpen(!modalIsOpen);
  }

  function handleCloseModal() {
    setOpen(false);
    setClickCount(0);
    setClicked(false);
    setLinesActive(false);
  }

  const handleClick = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    
    isSelectingRef.current = true;
    requestAnimationFrame(() => {
      setClicked(prev => !prev);
      setClickCount(prev => prev + 1);
      setClickCounter4(false);
      setTimeout(() => {
        isSelectingRef.current = false;
      }, 100);
    });
  }, [setClickCounter4]);

  function closeAll() {
    setClickCount(0);
    setClicked(false);
    setLinesActive(false);
  }

  const handleCloseCross = useCallback((e) => {
    e.stopPropagation();
    setClickCount(0);
    setClicked(false);
    setLinesActive(false);
    setClickCounter4(false);
    setSelectedNode(null);
    setHighlightedNodes([]);
    setWalkThroughActive(false); // Pause dynamic view when closing connection
    if (setDefault) setDefault();
  }, [setClickCounter4, setSelectedNode, setHighlightedNodes, setWalkThroughActive, setDefault]);

  useEffect(() => {
    if (clickCount === 1) {
      setLinesActive(true);
      if (setTitle) setTitle();
      setClickCounter4(true);
    } else if (clickCount === 2) {
      setLinesActive(false);
      setClickCount(0);
      if (setDefault) setDefault();
    }
  }, [clicked, setTitle, setDefault, setClickCounter4]);

  useEffect(() => {
    if (showAllLines) {
      setClickCount(1);
    } else if (!showAllLines) {
      setClickCount(0);
    }
  }, [showAllLines]);

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={position}
        scale={[1, 1, 1]}
        onClick={handleClick}
        ref={objectRef}
        opacity={finalOpacity}
        className="glossaryNodeGroup"
        frustumCulled={false}
      >
        <mesh position={[0, 0, 0]} visible={false}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial transparent opacity={0} side={THREE.DoubleSide} />
        </mesh>
        <Html center>
          <div className="glossaryContainer">
            <div
              className={`glossaryPill ${(isSelected || isHighlighted || linesActive) ? 'selected' : ''} ${isSecondaryHighlighted ? 'secondaryHighlighted' : ''} ${isHighlighted || linesActive ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              style={{ opacity: finalOpacity }}
            >
              <span className="glossaryPillTitle">
                {(title || nodeData.title || "").toUpperCase()}
              </span>
              {(isSelected || isHighlighted || linesActive) && nodeData.hasOpenButton && (
                <span
                  className="glossaryPillOpenButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    const slugifyTitle = (title) => {
                      return title
                        .toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/[\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, '');
                    };
                    const keywordSlug = slugifyTitle(nodeData.title || '');
                    if (typeof window !== 'undefined') {
                      sessionStorage.setItem('fromLivingContinuity', Date.now().toString());
                    }
                    window.location.href = `/glossary#${keywordSlug}`;
                  }}
                >
                  OPEN
                </span>
              )}
            </div>
            {(isSelected || linesActive) && !isSecondaryHighlighted && (
              <div 
                className={`glossaryCross ${(isSelected || linesActive) ? 'selected' : ''}`} 
                style={{ opacity: finalOpacity }}
                onClick={handleCloseCross}
              >
                <div className="glossaryCrossBackground" />
                <div className="glossaryCrossBorder" />
                <div className="glossaryCrossLines">
                  <div className="glossaryCrossLine line1" />
                  <div className="glossaryCrossLine line2" />
                </div>
              </div>
            )}
          </div>
        </Html>
      </group>
      {linesActive == true && (
        <group>
          <Line
            points={[...position, ...centerPoint]}
            color={"#ffffff"}
            lineWidth={1}
          />
        </group>
      )}

      {showAllLines == true && (
        <group>
          <Line
            points={[...position, ...centerPoint]}
            color={"#ffffff"}
            lineWidth={1}
          />
        </group>
      )}
    </>
  );
}

export const GlossaryNodeTemplate = React.memo(function GlossaryNodeTemplate({ nodeData, ...props }) {
  const hasModel = !!nodeData.modelPath && nodeData.modelPath.trim() !== '';
  
  if (hasModel) {
    return (
      <Suspense fallback={null}>
        <GlossaryNodeWithModel nodeData={nodeData} {...props} />
      </Suspense>
    );
  } else {
    return <GlossaryNodeWithoutModel nodeData={nodeData} {...props} />;
  }
}, (prevProps, nextProps) => {
  const prevPos = prevProps.nodeData.position || [0, 0, 0];
  const nextPos = nextProps.nodeData.position || [0, 0, 0];
  const positionChanged = prevPos[0] !== nextPos[0] || prevPos[1] !== nextPos[1] || prevPos[2] !== nextPos[2];
  
  if (positionChanged) return false;
  
  return (
    prevProps.nodeData.id === nextProps.nodeData.id &&
    prevProps.showAllLines === nextProps.showAllLines
  );
});
