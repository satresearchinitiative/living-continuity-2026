import { useEffect, useRef } from 'react';
import { useStore, getStore } from 'usestore-react';

export function ConnectionTransitionController() {
  const [selectedNode] = useStore('selectedNodeStore', null);
  const [cameraInteraction] = useStore('cameraInteractionStore', false);
  const prevSelectedNodeRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const visibilityStore = getStore('connectionLinesVisibilityStore');
    
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    if (selectedNode?.id !== prevSelectedNodeRef.current?.id) {
      const isNewSelection = selectedNode?.id && !prevSelectedNodeRef.current?.id;
      const isDeselection = !selectedNode?.id && prevSelectedNodeRef.current?.id;

      if (isNewSelection) {
        visibilityStore.setState(false);
        
        transitionTimeoutRef.current = setTimeout(() => {
          visibilityStore.setState(true);
        }, 1500);
        
      } else if (isDeselection) {
        visibilityStore.setState(false);
        
        transitionTimeoutRef.current = setTimeout(() => {
          visibilityStore.setState(true);
        }, 1000);
      }
      
      prevSelectedNodeRef.current = selectedNode;
    }

    if (cameraInteraction && selectedNode?.id) {
      visibilityStore.setState(false);
      
      transitionTimeoutRef.current = setTimeout(() => {
        visibilityStore.setState(true);
      }, 1200);
    }

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [selectedNode, cameraInteraction]);

  return null;
}

