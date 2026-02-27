'use client';

import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useStore } from 'usestore-react';

/**
 * Forces camera to axonometric view when capture modal closes.
 * Must be defined at module level so it persists across renders (refs would reset if defined inside page).
 */
export default function CameraResetOnExitCapture() {
  const { camera } = useThree();
  const [captureMode] = useStore('kitOfParts_captureMode', false);
  const resetFramesRef = useRef(0);
  const prevCaptureModeRef = useRef(captureMode);

  useFrame(() => {
    if (!camera?.isOrthographicCamera) return;

    const wasCapture = !!prevCaptureModeRef.current;
    prevCaptureModeRef.current = captureMode;

    if (wasCapture && !captureMode) {
      resetFramesRef.current = 15;
    }

    if (resetFramesRef.current > 0) {
      resetFramesRef.current--;
      camera.position.set(-14, 11, 15);
      camera.zoom = 17;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
