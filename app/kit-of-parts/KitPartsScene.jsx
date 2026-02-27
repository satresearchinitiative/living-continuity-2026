'use client';

import React, { useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import { useStore } from "usestore-react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Floor from "../../components/kitModels/ground.jsx";
import B1 from "../../components/kitModels/b1";
import Bb from "../../components/kitModels/bb";
import FP from "../../components/kitModels/FP";
import K1 from "../../components/kitModels/K1";
import K2 from "../../components/kitModels/K2";
import ST1 from "../../components/kitModels/ST1";

const DeselectHandler = ({ children, draggingMode }) => {
  const [, setSelectedObjectId] = useStore("selectedObjectId", null);
  
  return (
    <group
      onClick={(e) => {
        if (draggingMode && e.target === e.currentTarget) {
          setSelectedObjectId(null);
        }
      }}
    >
      {children}
    </group>
  );
};

const OrbitControlsWithDeselect = ({ draggingMode }) => {
  const [, setSelectedObjectId] = useStore("selectedObjectId", null);
  
  return null;
};

const CameraDolly = ({ isZoom, draggingMode, guiMode, disableRotation, sceneRotation }) => {
  const state = useThree();

  useEffect(() => {
    if (draggingMode === true) {
        state.camera.position.set(0, 27, 0);
      state.camera.zoom = 17
    }
      if (guiMode === true) {
          state.camera.position.set(-5.16, 19.9, 8.7);
      state.camera.zoom = 17

      }
      if (disableRotation === true || sceneRotation === true) {

      state.camera.zoom = 17
      }
  }, [draggingMode, guiMode, disableRotation, sceneRotation, state.camera]);

  return null;
};

const SceneBackground = React.memo(() => {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color(0x1C1C1C);
  }, [scene]);
  return null;
});
SceneBackground.displayName = 'SceneBackground';

const DoubleSidedGrid = (props) => {
  const gridRef = useRef();
  
  useEffect(() => {
    if (gridRef.current) {
      const material = gridRef.current.material;
      if (material) {
        material.side = THREE.DoubleSide;
        material.needsUpdate = true;
      }
    }
  }, []);
  
  useFrame(() => {
    if (gridRef.current && gridRef.current.material && gridRef.current.material.side !== THREE.DoubleSide) {
      gridRef.current.material.side = THREE.DoubleSide;
      gridRef.current.material.needsUpdate = true;
    }
  });
  
  return <Grid ref={gridRef} {...props} />;
};

export default function KitPartsScene({
  bathroom,
  boxbed,
  front,
  kitchen,
  k2,
  st1,
  isZoom,
  draggingMode,
  guiMode,
  disableRotation,
  sceneRotation,
  selectedObjectId
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.__kitOfPartsStoresInitialized) {
      console.error('[KitPartsScene] WARNING: Stores not initialized before component mount!');
    }
    console.log('[KitPartsScene] Component mounted, stores initialized:', typeof window !== 'undefined' && window.__kitOfPartsStoresInitialized);
  }, []);

  useEffect(() => {
    console.log('[KitPartsScene] Setting up WebGL context handlers');
    const handleContextLost = (event) => {
      event.preventDefault();
      console.error('[KitPartsScene] WebGL context lost! Attempting to restore...');
      console.error('[KitPartsScene] Context lost event details:', {
        cancelable: event.cancelable,
        defaultPrevented: event.defaultPrevented
      });
    };

    const handleContextRestored = () => {
      console.log('[KitPartsScene] WebGL context restored successfully');
      console.log('[KitPartsScene] Reloading page to restore scene...');
      window.location.reload();
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      console.log('[KitPartsScene] Canvas found, attaching event listeners');
      canvas.addEventListener('webglcontextlost', handleContextLost);
      canvas.addEventListener('webglcontextrestored', handleContextRestored);
    } else {
      console.warn('[KitPartsScene] Canvas element not found');
    }

    return () => {
      if (canvas) {
        console.log('[KitPartsScene] Cleaning up WebGL context handlers');
        canvas.removeEventListener('webglcontextlost', handleContextLost);
        canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      }
    };
  }, []);

  return (
    <Canvas
        dpr={[1, 2]} 
        orthographic 
        camera={{ position: [-14, 11, 15], zoom: 13 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: false,
      }}
        style={{
          background: "transparent",
          height: "100vh",
          width: "100vw",
          position: "relative",
          zIndex: 1,
          pointerEvents: "auto",
        }}
        onCreated={(state) => {
        console.log('[KitPartsScene] Canvas created successfully');
        console.log('[KitPartsScene] Canvas state:', {
          gl: state.gl ? 'WebGL context created' : 'No WebGL context',
          scene: state.scene ? 'Scene created' : 'No scene',
          camera: state.camera ? 'Camera created' : 'No camera',
          size: state.size
        });
        }}
        onError={(error) => {
        console.error('[KitPartsScene] Canvas error occurred:', error);
        console.error('[KitPartsScene] Error details:', {
          message: error?.message,
          stack: error?.stack,
          name: error?.name
        });
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.5}
        />
        <directionalLight 
          position={[-10, 5, -5]} 
          intensity={0.3}
        />

        <SceneBackground />
        <DeselectHandler draggingMode={draggingMode}>
          <group rotation={[0, 0, 0]}>
            <DoubleSidedGrid
              position={[0, 1.01, 0]}
              followCamera={false}
              args={[32, 26]}
              cellColor={"#1C1C1C"}
              cellSize={5}
              cellThickness={0.2}
              sectionColor={"#1C1C1C"}
              sectionSize={1}
            />
          <B1 show={bathroom} isZoomState={isZoom} isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation} />
          <Bb show={boxbed} isZoomState={isZoom} isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation} />
          <FP show={front} isZoomState={isZoom} isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation} />
          <K1 show={kitchen} isZoomState={isZoom} isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation} />
          <K2 show={k2} isZoomState={isZoom} isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation} />
          <ST1 show={st1} isZoomState={isZoom} isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation} />
            <Floor />
          </group>
        </DeselectHandler>
        <OrbitControls 
          autoRotate={sceneRotation} 
          enableRotate={disableRotation && !(draggingMode && selectedObjectId)}
          enablePan={!(draggingMode && selectedObjectId)}
          enableZoom={!(draggingMode && selectedObjectId)}
          autoRotateSpeed={0.5}
        />
        <OrbitControlsWithDeselect draggingMode={draggingMode} />
      <CameraDolly isZoom={isZoom} draggingMode={draggingMode} guiMode={guiMode} disableRotation={disableRotation} sceneRotation={sceneRotation} />
    </Canvas>
  );
}
