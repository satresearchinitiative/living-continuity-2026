'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useStore } from 'usestore-react';
import { useMemo } from 'react';

export function CameraFOVController() {
  const { camera } = useThree();
  const [selectedNode] = useStore('selectedNodeStore', null);
  const [highlightedNodes] = useStore('highlightedNodesStore', []);
  const [walkThroughActive] = useStore('walkThroughActive', false);

  const hasHighlightedElements = useMemo(() => {
    return !!selectedNode || (Array.isArray(highlightedNodes) && highlightedNodes.length > 0);
  }, [selectedNode, highlightedNodes]);

  const targetFOV = useMemo(() => {
    if (walkThroughActive) {
      return hasHighlightedElements ? 47.5 : 50;
    }
    return hasHighlightedElements ? 45 : 50;
  }, [hasHighlightedElements, walkThroughActive]);

  useFrame(() => {
    if (camera && camera.isPerspectiveCamera) {
      const currentFOV = camera.fov;
      const difference = targetFOV - currentFOV;
      
      if (Math.abs(difference) > 0.1) {
        camera.fov += difference * 0.1;
        camera.updateProjectionMatrix();
      } else if (Math.abs(difference) > 0.01) {
        camera.fov = targetFOV;
        camera.updateProjectionMatrix();
      }
    }
  });

  return null;
}
