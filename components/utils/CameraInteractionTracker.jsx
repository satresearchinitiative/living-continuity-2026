import { useEffect, useRef } from 'react';
import { useStore } from 'usestore-react';

export function CameraInteractionTracker() {
  const [, setCameraInteraction] = useStore('cameraInteractionStore', false);
  const [selectedNode] = useStore('selectedNodeStore', null);
  const interactionTimeoutRef = useRef(null);
  const isInteractingRef = useRef(false);
  
  useEffect(() => {
    if (selectedNode?.id) {
      setCameraInteraction(false);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
        interactionTimeoutRef.current = null;
      }
      isInteractingRef.current = false;
    }
  }, [selectedNode, setCameraInteraction]);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    let dragStartPos = null;
    let isDragging = false;
    
    const handlePointerDown = (e) => {
      dragStartPos = { x: e.clientX, y: e.clientY };
      isDragging = false;
    };
    
    const handlePointerMove = (e) => {
      if (dragStartPos && !isDragging) {
        const dx = Math.abs(e.clientX - dragStartPos.x);
        const dy = Math.abs(e.clientY - dragStartPos.y);
        if (dx > 5 || dy > 5) {
          isDragging = true;
          isInteractingRef.current = true;
          setCameraInteraction(true);
          
          if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
            interactionTimeoutRef.current = null;
          }
        }
      } else if (isDragging) {
        isInteractingRef.current = true;
        setCameraInteraction(true);
      }
    };
    
    const handlePointerUp = () => {
      if (isDragging) {
        isInteractingRef.current = false;
        if (interactionTimeoutRef.current) {
          clearTimeout(interactionTimeoutRef.current);
        }
        interactionTimeoutRef.current = setTimeout(() => {
          if (!isInteractingRef.current) {
            setCameraInteraction(false);
          }
        }, 1500);
      }
      dragStartPos = null;
      isDragging = false;
    };
    
    const handleWheel = () => {
      isInteractingRef.current = true;
      setCameraInteraction(true);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      interactionTimeoutRef.current = setTimeout(() => {
        if (!isInteractingRef.current) {
          setCameraInteraction(false);
        }
      }, 2000);
    };
    
    canvas.addEventListener('pointerdown', handlePointerDown, { passive: true });
    canvas.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerup', handlePointerUp, { passive: true });
    canvas.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('wheel', handleWheel);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [setCameraInteraction]);

  return null;
}
