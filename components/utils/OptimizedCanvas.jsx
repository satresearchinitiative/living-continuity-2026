'use client';

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";

const createCleanObject = (source) => {
  if (!source || typeof source !== 'object' || Array.isArray(source)) {
    return {};
  }
  const clean = {};
  try {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const value = source[key];
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && !Array.isArray(value)) {
            clean[key] = createCleanObject(value);
          } else if (typeof value !== 'object') {
            clean[key] = value;
          }
        }
      }
    }
  } catch (e) {
    console.warn('[OptimizedCanvas] Error creating clean object:', e);
  }
  return clean;
};

export default function OptimizedCanvas({ children, frameloop, style, camera, orthographic }) {
  const glConfig = useMemo(() => {
    try {
      return {
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
        logarithmicDepthBuffer: false,
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: false,
      };
    } catch (e) {
      console.error('[OptimizedCanvas] Error creating glConfig:', e);
      return {
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      };
    }
  }, []);

  const canvasProps = useMemo(() => {
    const builtProps = {
      dpr: [1, 1.5],
      frameloop: frameloop || 'demand',
      gl: (glConfig && typeof glConfig === 'object' && !Array.isArray(glConfig)) ? glConfig : {
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      },
    };
    
    if (orthographic !== undefined) {
      builtProps.orthographic = orthographic;
    }
    
    try {
      if (style !== undefined && style !== null && typeof style === 'object' && !Array.isArray(style)) {
        builtProps.style = createCleanObject(style);
      }
      
      if (camera !== undefined && camera !== null && typeof camera === 'object' && !Array.isArray(camera)) {
        builtProps.camera = createCleanObject(camera);
      }
    } catch (e) {
      console.error('[OptimizedCanvas] Error building canvasProps:', e);
    }
    
    return builtProps;
  }, [frameloop, style, camera, glConfig, orthographic]);

  if (!canvasProps || typeof canvasProps !== 'object' || Array.isArray(canvasProps)) {
    console.error('[OptimizedCanvas] Invalid canvasProps, using defaults:', canvasProps);
    return (
      <Canvas dpr={[1, 1.5]} frameloop="demand">
        {children}
      </Canvas>
    );
  }

  if (!Canvas) {
    console.error('[OptimizedCanvas] Canvas component not available');
    return null;
  }

  const safeCanvasProps = useMemo(() => {
    const clean = createCleanObject(canvasProps);
    
    if (!clean.dpr || !Array.isArray(clean.dpr)) {
      clean.dpr = [1, 1.5];
    }
    if (!clean.frameloop || typeof clean.frameloop !== 'string') {
      clean.frameloop = 'demand';
    }
    if (!clean.gl || typeof clean.gl !== 'object' || Array.isArray(clean.gl)) {
      clean.gl = glConfig;
    }
    
    return clean;
  }, [canvasProps, glConfig]);

  try {
    return (
      <Canvas {...safeCanvasProps}>
        {children}
      </Canvas>
    );
  } catch (e) {
    console.error('[OptimizedCanvas] Error rendering Canvas:', e, 'safeCanvasProps:', safeCanvasProps);
    return (
      <Canvas dpr={[1, 1.5]} frameloop="demand">
        {children}
      </Canvas>
    );
  }
}
