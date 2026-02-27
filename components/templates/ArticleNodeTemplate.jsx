import React, { useEffect, useRef, useState, useMemo, useCallback, Suspense } from "react";
import {
  Line,
  useGLTF,
  Html,
} from "@react-three/drei";
import { useStore } from "usestore-react";
import * as THREE from "three";
import Modal from "react-modal";
import ArchiveModal from "../../components/treeModals/archiveModal";
import "../../components/treeModals/archive.scss";
import { createWhiteMaterial } from "../utils/whiteMaterial";
import { useConnectionHighlight } from "../utils/useConnectionHighlight";
import { useShouldShowTitle } from "../utils/useShouldShowTitle";
import { RotatingImage } from "../rotatingImage";
import { useNodeVisibility } from "../utils/LoadingStateManager";
import "./ArticleNodeTemplate.scss";

function ArticleNodeWithModel({ nodeData, ...props }) {
  const { nodes, materials } = useGLTF(nodeData.modelPath);
  return <ArticleNodeContent nodeData={nodeData} nodes={nodes} materials={materials} {...props} />;
}

function ArticleNodeWithoutModel({ nodeData, ...props }) {
  return <ArticleNodeContent nodeData={nodeData} nodes={{}} materials={{}} {...props} />;
}

function ArticleNodeContent({
  nodeData,
  nodes,
  materials,
  showAllLines,
  props,
  setTitle,
  setDefault,
  selectedComponent,
}) {
  const objectRef = useRef();
  const [linesActive, setLinesActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [modalIsOpen, setOpen] = useState(false);
  const [Store, setStore] = useStore(`${nodeData.id}Store`, false);
  const isSelectingRef = useRef(false);

  const position = nodeData.position || [0, 0, 0];
  const centerPoint = position;
  const whiteMaterial = useMemo(() => createWhiteMaterial(), []);
  useConnectionHighlight(nodeData.id, linesActive);
  const shouldShowTitle = useShouldShowTitle(nodeData.id);
  const [opacityMap] = useStore('elementOpacityStore', {});
  const opacity = opacityMap[nodeData.id] !== undefined ? opacityMap[nodeData.id] : 1.0;
  const [highlightedNodes] = useStore('highlightedNodesStore', []);
  const [secondaryHighlightedArticles] = useStore('secondaryHighlightedArticlesStore', []);

  const nodeIndex = nodeData.index !== undefined ? nodeData.index : 0;
  const totalNodes = 83;
  const { isVisible, opacity: loadingOpacity } = useNodeVisibility(nodeData.id, nodeIndex, totalNodes);

  const isSecondaryHighlighted = secondaryHighlightedArticles?.includes(nodeData.id);

  const finalOpacity = useMemo(() => {
    if (!isVisible) return 0;
    const baseOpacity = opacity * loadingOpacity;
    return baseOpacity;
  }, [isVisible, opacity, loadingOpacity]);

  const [selectedNode, setSelectedNode] = useStore('selectedNodeStore', null);
  const [, setWalkThroughActive] = useStore('walkThroughActive', false);

  const isDimmed = useMemo(() => {
    return selectedNode && selectedNode.id !== nodeData.id && !highlightedNodes?.includes(nodeData.id) && !isSecondaryHighlighted;
  }, [selectedNode, nodeData.id, highlightedNodes, isSecondaryHighlighted]);

  const isHighlighted = useMemo(() => {
    return selectedNode?.id === nodeData.id || (highlightedNodes?.includes(nodeData.id) && selectedNode?.id?.startsWith('G'));
  }, [selectedNode, nodeData.id, highlightedNodes]);

  const articleScale = useMemo(() => {
    if (isDimmed) {
      return [10.8 * 0.6, 14.4 * 0.6, 1];
    }
    if (isHighlighted) {
      return [10.8 * 1.3, 14.4 * 1.3, 1];
    }
    return [10.8, 14.4, 1];
  }, [isDimmed, isHighlighted]);
  const [, setHighlightedNodes] = useStore('highlightedNodesStore', []);
  const [cameraInteraction] = useStore('cameraInteractionStore', false);
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
          setStore(false);
        }
      });
    }
  }, [selectedNode, linesActive, nodeData.id, setStore]);

  function handleOpen() {
    setOpen(!modalIsOpen);
  }

  const [modelState, setModelState] = useState(false);
  useEffect(() => {
    if (!nodeData.connections || nodeData.connections.length === 0) {
      setModelState(false);
      return;
    }

    const checkConnections = () => {
      const { getStore } = require('usestore-react');
      const anyActive = nodeData.connections.some(connId => {
        try {
          const store = getStore(`${connId}Store`, false);
          return store === true;
        } catch (e) {
          return false;
        }
      });
      setModelState(anyActive);
    };

    checkConnections();
    const interval = setInterval(checkConnections, 500);
    return () => clearInterval(interval);
  }, [nodeData.connections]);

  function handleCloseModal() {
    setOpen(false);
    setDefault();
    setClickCount(0);
    setClicked(false);
    setLinesActive(false);
    setStore(false);
    if (window.location.hash === `#${nodeData.id}`) {
      window.history.pushState(null, '', window.location.pathname);
    }
  }

  const handleClick = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    
    setClickCount(prev => {
      const newCount = prev === 0 ? 1 : 0;
      
      if (newCount === 1) {
        isSelectingRef.current = true;
        requestAnimationFrame(() => {
          setClicked(true);
          setLinesActive(true);
          setStore(true);
          if (setTitle) setTitle();
          setTimeout(() => {
            isSelectingRef.current = false;
          }, 100);
        });
      } else {
        setClicked(false);
        setLinesActive(false);
        setDefault();
        setStore(false);
      }
      
      return newCount;
    });
  }, [setStore, setTitle, setDefault]);

  function handleReadClick(e) {
    e.stopPropagation();
    setOpen(true);
    if (nodeData.id) {
      window.history.pushState(null, '', `#${nodeData.id}`);
    }
  }

  function closeAll() {
    setClickCount(0);
    setClicked(false);
    setLinesActive(false);
    setDefault();
    setStore(false);
  }

  const handleCloseCross = useCallback((e) => {
    e.stopPropagation();
    setClickCount(0);
    setClicked(false);
    setLinesActive(false);
    setStore(false);
    setSelectedNode(null);
    setHighlightedNodes([]);
    setWalkThroughActive(false); // Pause dynamic view when closing connection
    if (setDefault) setDefault();
  }, [setStore, setSelectedNode, setHighlightedNodes, setWalkThroughActive, setDefault]);

  useEffect(() => {
    if (clickCount === 1) {
      setLinesActive(true);
      if (setTitle) setTitle();
      setStore(true);
    }
  }, [clicked, setTitle, setStore]);

  useEffect(() => {
    if (typeof window === 'undefined' || !nodeData.id) return;

    const checkHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash === nodeData.id && !modalIsOpen) {
        setTimeout(() => {
          setOpen(true);
        }, 1000);
      } else if (hash !== nodeData.id && modalIsOpen && hash !== '') {
        setOpen(false);
        setDefault();
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setStore(false);
      } else if (hash === '' && modalIsOpen) {
        setOpen(false);
        setDefault();
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setStore(false);
      }
    };

    checkHash();

    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [nodeData.id, modalIsOpen, setDefault, setStore]);

  return (
    <>
      <group {...props} dispose={null} frustumCulled={false}>
        <group
          position={position}
          scale={[0.5, 0.5, 0.5]}
          onClick={handleClick}
          opacity={finalOpacity}
          ref={objectRef}
          className="articleNodeGroup"
          frustumCulled={false}
        >
          {!modelState && (
            <RotatingImage
              imageUrl={nodeData.imageUrl}
              position={[0, 0, 0]}
              scale={articleScale}
              tiltAmount={0.15}
              opacity={finalOpacity}
              faceCamera={isHighlighted || isSecondaryHighlighted}
              showCross={selectedNode?.id === nodeData.id && !isSecondaryHighlighted}
              title={nodeData.title}
              showTitle={selectedNode?.id === nodeData.id || (highlightedNodes?.includes(nodeData.id) && selectedNode?.id?.startsWith('G'))}
              showReadButton={selectedNode?.id === nodeData.id || (highlightedNodes?.includes(nodeData.id) && selectedNode?.id?.startsWith('G'))}
              onReadClick={handleReadClick}
              onCloseCross={handleCloseCross}
              onClick={handleClick}
              nodeId={nodeData.id}
              highlightState={{
                isSelected: selectedNode?.id === nodeData.id,
                isHighlighted: highlightedNodes?.includes(nodeData.id),
                isSecondaryHighlighted: isSecondaryHighlighted,
                hasSelection: !!selectedNode,
              }}
            />
          )}

          <Html center>
            <Modal
              isOpen={modalIsOpen}
              contentLabel="Article Modal"
              className="archive-modal-content"
              overlayClassName="archive-modal-overlay"
              bodyOpenClassName="archive-modal-open"
              htmlOpenClassName="archive-modal-open"
            >
              <ArchiveModal
                closeModal={() => handleCloseModal()}
                connect1={nodeData.connectionKeywords?.[0] || ""}
                connect2={nodeData.connectionKeywords?.[1] || ""}
                connect3={nodeData.connectionKeywords?.[2] || ""}
                connect4={nodeData.connectionKeywords?.[3] || ""}
                img={nodeData.imageUrl}
                title={nodeData.title}
                author={nodeData.author}
                content={nodeData.content}
                authorBio={nodeData.authorBio}
                keywords={nodeData.keywords}
                photoCredit={nodeData.photoCredit}
              />
            </Modal>
          </Html>

        </group>
      </group>
    </>
  );
}

const ArticleNodeTemplate = React.memo(function ArticleNodeTemplate({ nodeData, ...props }) {
  const hasModel = !!nodeData.modelPath && nodeData.modelPath.trim() !== '';

  if (hasModel) {
    return (
      <Suspense fallback={null}>
        <ArticleNodeWithModel nodeData={nodeData} {...props} />
      </Suspense>
    );
  } else {
    return <ArticleNodeWithoutModel nodeData={nodeData} {...props} />;
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

export default ArticleNodeTemplate;
