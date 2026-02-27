import { useEffect, useRef } from 'react';
import { useStore } from 'usestore-react';
import { useThree } from '@react-three/fiber';
import { getStore } from 'usestore-react';
import { getConnectedNodes } from './nodeConnections';
import './selectionStore';

export function ElementOpacityController() {
  const { camera, gl } = useThree();
  const [selectedNode] = useStore('selectedNodeStore', null);
  const [highlightedNodes] = useStore('highlightedNodesStore', []);
  const [secondaryHighlightedArticles] = useStore('secondaryHighlightedArticlesStore', []);

  const isUserMovingCameraRef = useRef(false);
  const opacityStoreRef = useRef(null);
  const animationInProgressRef = useRef(false);

  useEffect(() => {
    opacityStoreRef.current = getStore('elementOpacityStore');
    if (!opacityStoreRef.current) {
      const { createStore } = require('usestore-react');
      opacityStoreRef.current = createStore('elementOpacityStore', {});
    }
  }, []);

  useEffect(() => {
    const handleStart = () => {
      isUserMovingCameraRef.current = true;
      animationInProgressRef.current = false;
    };

    const handleChange = () => {
    };

    const controls = gl.domElement.parentElement?.querySelector('canvas')?.__r3f?.controls;
    if (controls) {
      controls.addEventListener('start', handleStart);
      controls.addEventListener('change', handleChange);

      return () => {
        controls.removeEventListener('start', handleStart);
        controls.removeEventListener('change', handleChange);
      };
    }

    const canvas = gl.domElement;
    const handleMouseDown = () => {
      isUserMovingCameraRef.current = true;
      animationInProgressRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('touchstart', handleMouseDown, { passive: true });

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('touchstart', handleMouseDown);
    };
  }, [gl]);

  useEffect(() => {
    if (!opacityStoreRef.current) return;

    if (!selectedNode?.id || !Array.isArray(highlightedNodes) || highlightedNodes.length === 0) {
      opacityStoreRef.current.setState({});
      return;
    }

    const secondaryHighlightedSet = new Set(Array.isArray(secondaryHighlightedArticles) ? secondaryHighlightedArticles : []);

    const opacityMap = {};
    const highlightedSet = new Set(highlightedNodes);
    const selectedId = selectedNode?.id;

    const ARTICLE_IDS = Array.from({ length: 29 }, (_, index) => `A${index + 1}`);
    const KEYWORD_IDS = Array.from({ length: 54 }, (_, index) => `G${index + 1}`);

    const directlyConnected = selectedId ? new Set(getConnectedNodes(selectedId)) : new Set();
    directlyConnected.add(selectedId);

    [...ARTICLE_IDS, ...KEYWORD_IDS].forEach(nodeId => {
      const isKeyword = nodeId.startsWith('G');

      if (nodeId === selectedId) {
        opacityMap[nodeId] = 1.0;
      } else if (highlightedSet.has(nodeId)) {
        if (directlyConnected.has(nodeId)) {
          opacityMap[nodeId] = 1.0;
        } else {
          opacityMap[nodeId] = isKeyword ? 1 : 1;
        }
      } else if (secondaryHighlightedSet.has(nodeId)) {
        opacityMap[nodeId] = isKeyword ? 0.3 : 0.15;
      } else {
        opacityMap[nodeId] = isKeyword ? 0.3 : 0.15;
      }
    });

    opacityStoreRef.current.setState(opacityMap);
  }, [selectedNode, highlightedNodes, secondaryHighlightedArticles]);

  useEffect(() => {
    if (!animationInProgressRef.current) {
      isUserMovingCameraRef.current = false;
    }
  }, [selectedNode]);

  return null;
}

export default ElementOpacityController;

