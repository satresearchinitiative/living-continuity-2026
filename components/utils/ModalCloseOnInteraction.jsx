'use client';

import { useEffect, useRef } from 'react';
import { useStore } from 'usestore-react';

export default function ModalCloseOnInteraction() {
  const [isCaptureModalOpen, setIsCaptureModalOpen] = useStore('kitOfParts_captureModalOpen', false);
  const [, setCaptureMode] = useStore('kitOfParts_captureMode', false);
  const [, setCachedImageDataUrl] = useStore('kitOfParts_cachedImageDataUrl', null);
  const interactionRef = useRef(false);

  useEffect(() => {
    if (!isCaptureModalOpen) return;

    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    let dragStartPos = null;
    let isDragging = false;
    
    const handlePointerDown = (e) => {
      const modalWrapper = document.querySelector('.capture-modal-wrapper');
      if (modalWrapper && (modalWrapper.contains(e.target) || e.target.closest('.capture-modal-wrapper'))) {
        return;
      }
      
      if (e.target === canvas || canvas.contains(e.target)) {
        dragStartPos = { x: e.clientX, y: e.clientY };
        isDragging = false;
      }
    };
    
    const handlePointerMove = (e) => {
      const modalWrapper = document.querySelector('.capture-modal-wrapper');
      if (modalWrapper && (modalWrapper.contains(e.target) || e.target.closest('.capture-modal-wrapper'))) {
        return;
      }
      
      if (dragStartPos && !isDragging) {
        const dx = Math.abs(e.clientX - dragStartPos.x);
        const dy = Math.abs(e.clientY - dragStartPos.y);
        if (dx > 5 || dy > 5) {
          isDragging = true;
          if (!interactionRef.current) {
            interactionRef.current = true;
            setIsCaptureModalOpen(false);
            setTimeout(() => {
              setCaptureMode(false);
              setCachedImageDataUrl(null);
            }, 300);
          }
        }
      }
    };
    
    const handleWheel = (e) => {
      const modalWrapper = document.querySelector('.capture-modal-wrapper');
      if (modalWrapper && (modalWrapper.contains(e.target) || e.target.closest('.capture-modal-wrapper'))) {
        return;
      }
      
      if (!interactionRef.current) {
        interactionRef.current = true;
        setIsCaptureModalOpen(false);
        setTimeout(() => {
          setCaptureMode(false);
          setCachedImageDataUrl(null);
        }, 300);
      }
    };
    
    const handlePointerUp = () => {
      dragStartPos = null;
      isDragging = false;
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
    };
  }, [isCaptureModalOpen, setIsCaptureModalOpen, setCaptureMode, setCachedImageDataUrl]);

  useEffect(() => {
    if (!isCaptureModalOpen) {
      interactionRef.current = false;
    }
  }, [isCaptureModalOpen]);

  return null;
}
