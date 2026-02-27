'use client';

import React, { useCallback, useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import PassiveOrbitControls from "../../components/utils/PassiveOrbitControls";
import CameraResetOnExitCapture from "../../components/utils/CameraResetOnExitCapture";
import { LightingSetupComponent } from "../../components/utils/lightingConfig";
import { useStore } from "usestore-react";
import Floor from "../../components/kitModels/ground.jsx";
import BoundingBox from "../../components/kitModels/boundingBox.jsx";
import B1 from "../../components/kitModels/b1";
import Bb from "../../components/kitModels/bb";
import FP from "../../components/kitModels/FP";
import K1 from "../../components/kitModels/K1";
import K2 from "../../components/kitModels/K2";
import ST1 from "../../components/kitModels/ST1";
import ST2 from "../../components/kitModels/ST2";
import Stairs from "../../components/kitModels/Stairs";
import { toPng } from "html-to-image";
import * as THREE from "three";
import './kit-parts.scss';

function KitOfPartsPage() {
  const [objects, setObjects] = useStore("kitOfParts_objectsState");
  const [bathroom, setbathroom] = useStore("kitOfParts_clickbathroom2");
  const [boxbed, setboxbed] = useStore("kitOfParts_boxbedState");
  const [front, setfront] = useStore("kitOfParts_frontState");
  const [kitchen, setkitchen] = useStore("kitOfParts_kitchenState");
  const [k2, setK2] = useStore("kitOfParts_k2State");
  const [st1, setSt1] = useStore("kitOfParts_st1State");
  const [st2, setSt2] = useStore("kitOfParts_st2State", false);
  const [stairs, setStairs] = useStore("kitOfParts_stairsState", false);
  const ref = useRef(null);
  const [captureMode, setCaptureMode] = useStore("kitOfParts_captureMode", false);
  const [isCaptureModalOpen] = useStore("kitOfParts_captureModalOpen", false);
  const [, setCachedImageDataUrl] = useStore("kitOfParts_cachedImageDataUrl", null);
  const [, setIsCaptureModalOpen] = useStore("kitOfParts_captureModalOpen", false);
  const [cameraResetting, setCameraResetting] = useState(false);
  const [, setSelectedObjectId] = useStore('selectedObjectId', null);
  const [, setCloseAllPanels] = useStore('kitOfParts_closeAllPanels', false);

  useEffect(() => {
    if (captureMode) {
      setSelectedObjectId(null);
      setObjects(false);
      setCloseAllPanels(true);
      
      setIsCaptureModalOpen(true);
      
      if (ref.current) {
        setTimeout(() => {
          toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
              setCachedImageDataUrl(dataUrl);
            })
            .catch((err) => {
              console.error('[ERROR] Failed to generate image:', err);
            });
        }, 500);
      }
    }
  }, [captureMode, setCachedImageDataUrl, setIsCaptureModalOpen, setSelectedObjectId, setObjects, setCloseAllPanels]);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    setCaptureMode(true);
  }, [setCaptureMode]);

  const handleCloseScreenshotForm = useCallback(() => {
    setIsScreenshotFormOpen(false);
    setScreenshotDataUrl(null);
  }, []);

  const [sceneRotation, setSceneRotation] = useStore("kitOfParts_sceneRotation", false);
  const [isZoom, setZoom] = useState("");
  const [disableRotation, setDisableRotation] = useState(false);
  const [buttonTriggered, setbuttonTriggered] = useState(false);
  const [draggingMode, setDraggingMode] = useState(false);
  const [guiMode, setGuiMode] = useState(false);

  useEffect(() => {
    if (sceneRotation) {
      setIsCaptureModalOpen(false);
      setTimeout(() => {
        setCaptureMode(false);
        setCachedImageDataUrl(null);
      }, 300);
    }
  }, [sceneRotation, setIsCaptureModalOpen, setCaptureMode, setCachedImageDataUrl]);

  // Keep frameloop running when modal just closed so camera reset can run.
  // Compute during render so frameloop is "always" on the FIRST render after close (useEffect runs too late).
  const prevCaptureModeRef = useRef(captureMode);
  const wasInCapture = prevCaptureModeRef.current;
  prevCaptureModeRef.current = captureMode;
  const keepFramesForReset = wasInCapture && !captureMode && !isCaptureModalOpen;

  useEffect(() => {
    if (keepFramesForReset) {
      setCameraResetting(true);
      const t = setTimeout(() => setCameraResetting(false), 800);
      return () => clearTimeout(t);
    }
  }, [captureMode, isCaptureModalOpen]);

  const handleButton = () => {
    setbuttonTriggered(!buttonTriggered);
  };
  
  useEffect(() => {
    if (buttonTriggered) {
      setDisableRotation(false);
    } else {
      setDisableRotation(true);
    }
  }, [buttonTriggered]);

  const axoModeToggle = useCallback(() => {
    if(draggingMode){
        setDraggingMode(!draggingMode);
    }
    setGuiMode(!guiMode);
    setDisableRotation(false);
    setSceneRotation(false);
  }, [draggingMode, guiMode]);

  const dragModeToggle = useCallback(() => {
    if(guiMode){
        setGuiMode(!guiMode);
    }
    setDraggingMode(!draggingMode);
    setDisableRotation(false);
    setSceneRotation(false);
  }, [draggingMode, guiMode]);

  const planModeToggle = useCallback(() => {
    setDraggingMode(false);
    setGuiMode(false);
    setDisableRotation(!disableRotation);
    setSceneRotation(!sceneRotation);
  }, [disableRotation, sceneRotation]);

  const SceneSetup = React.memo(() => {
    return null;
  });
  SceneSetup.displayName = 'SceneSetup';

  const StableLighting = React.memo(() => {
    return <LightingSetupComponent />;
  });
  StableLighting.displayName = 'StableLighting';

  const OrthographicCameraSetup = React.memo(() => {
    const { camera, size } = useThree();
    const lastSizeRef = useRef({ width: 0, height: 0 });
    const zoomRef = useRef(null);

    useEffect(() => {
      if (camera && camera.isOrthographicCamera) {
        if (zoomRef.current === null) {
          zoomRef.current = camera.zoom;
        }
        
        const sizeChanged = 
          Math.abs(lastSizeRef.current.width - size.width) > 0.5 || 
          Math.abs(lastSizeRef.current.height - size.height) > 0.5;
        
        if (sizeChanged) {
          const preservedZoom = zoomRef.current;
          
          camera.near = 0.1;
          camera.far = 2000;
          
          const aspect = size.width / size.height;
          const viewSize = 500;
          
          camera.left = -viewSize * aspect;
          camera.right = viewSize * aspect;
          camera.top = viewSize;
          camera.bottom = -viewSize;
          
          camera.zoom = preservedZoom;
          camera.updateProjectionMatrix();
          
          zoomRef.current = camera.zoom;
          lastSizeRef.current = { width: size.width, height: size.height };
        } else {
          if (zoomRef.current !== null && Math.abs(camera.zoom - zoomRef.current) > 0.001) {
            camera.zoom = zoomRef.current;
            camera.updateProjectionMatrix();
          }
        }
      }
    }, [camera, size]);

    useEffect(() => {
      if (camera && camera.isOrthographicCamera) {
        if (zoomRef.current === null) {
          zoomRef.current = camera.zoom;
        }
        
        const handleResize = () => {
          const preservedZoom = zoomRef.current || camera.zoom;
          const aspect = window.innerWidth / window.innerHeight;
          const viewSize = 500;
          
          camera.left = -viewSize * aspect;
          camera.right = viewSize * aspect;
          camera.top = viewSize;
          camera.bottom = -viewSize;
          
          camera.zoom = preservedZoom;
          camera.updateProjectionMatrix();
          
          zoomRef.current = camera.zoom;
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, [camera]);

    return null;
  });
  OrthographicCameraSetup.displayName = 'OrthographicCameraSetup';

  const CameraZoomLock = React.memo(() => {
    const { camera } = useThree();
    const zoomRef = useRef(null);
    const isLockingRef = useRef(false);
    const lockTimeoutRef = useRef(null);
    const frameCountRef = useRef(0);
    const [objects] = useStore("kitOfParts_objectsState");
    const [bathroom] = useStore("kitOfParts_clickbathroom2");
    const [boxbed] = useStore("kitOfParts_boxbedState");
    const [front] = useStore("kitOfParts_frontState");
    const [kitchen] = useStore("kitOfParts_kitchenState");
    const [k2] = useStore("kitOfParts_k2State");
    const [st1] = useStore("kitOfParts_st1State");
    const [st2] = useStore("kitOfParts_st2State", false);
    const [stairs] = useStore("kitOfParts_stairsState", false);
    const lastObjectsRef = useRef(objects);
    const lastElementsRef = useRef({ bathroom, boxbed, front, kitchen, k2, st1, st2, stairs });
    const LOCK_FRAMES = 10;

    useEffect(() => {
      if (camera && camera.isOrthographicCamera) {
        if (zoomRef.current === null) {
          zoomRef.current = camera.zoom;
        }
      }
    }, [camera]);

    useEffect(() => {
      if (camera && camera.isOrthographicCamera) {
        const inventoryChanged = lastObjectsRef.current !== objects;
        const elementsChanged = 
          lastElementsRef.current.bathroom !== bathroom ||
          lastElementsRef.current.boxbed !== boxbed ||
          lastElementsRef.current.front !== front ||
          lastElementsRef.current.kitchen !== kitchen ||
          lastElementsRef.current.k2 !== k2 ||
          lastElementsRef.current.st1 !== st1 ||
          lastElementsRef.current.st2 !== st2 ||
          lastElementsRef.current.stairs !== stairs;

        if (inventoryChanged || elementsChanged) {
          if (zoomRef.current !== null) {
            camera.zoom = zoomRef.current;
            camera.updateProjectionMatrix();
          }
          
          isLockingRef.current = true;
          frameCountRef.current = 0;
        }
        
        lastObjectsRef.current = objects;
        lastElementsRef.current = { bathroom, boxbed, front, kitchen, k2, st1, st2, stairs };
      }
    }, [objects, bathroom, boxbed, front, kitchen, k2, st1, st2, stairs, camera]);

    useFrame(() => {
      if (camera && camera.isOrthographicCamera) {
        if (isLockingRef.current && zoomRef.current !== null) {
          if (Math.abs(camera.zoom - zoomRef.current) > 0.001) {
            camera.zoom = zoomRef.current;
            camera.updateProjectionMatrix();
          }
          
          frameCountRef.current++;
          if (frameCountRef.current >= LOCK_FRAMES) {
            isLockingRef.current = false;
            zoomRef.current = camera.zoom;
          }
        } else {
          zoomRef.current = camera.zoom;
        }
      }
    });

    return null;
  });
  CameraZoomLock.displayName = 'CameraZoomLock';

  const CameraLock = React.memo(() => {
    const { camera } = useThree();
    const [captureMode] = useStore("kitOfParts_captureMode", false);

    useFrame(() => {
      if (captureMode && camera && camera.isOrthographicCamera) {
        // Continuously lock camera position and rotation during capture
        camera.position.set(0, 50, 0);
        camera.zoom = 17;
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
      }
    });

    return null;
  });
  CameraLock.displayName = 'CameraLock';

  const CameraDolly = React.memo(({ isZoom, draggingMode, guiMode, disableRotation, sceneRotation }) => {
    const state = useThree();
    const [captureMode] = useStore("kitOfParts_captureMode", false);
    const prevCaptureModeRef = useRef(false);
    const isInitialMountRef = useRef(true);
    const initialCameraPositionRef = useRef(null);
    const initialCameraZoomRef = useRef(null);

    useEffect(() => {
      if (state.camera && state.camera.isOrthographicCamera) {
        // Store initial camera position on first mount
        if (isInitialMountRef.current) {
          initialCameraPositionRef.current = state.camera.position.clone();
          initialCameraZoomRef.current = state.camera.zoom;
        }
        
        // Track if we're transitioning FROM capture mode
        const wasInCaptureMode = prevCaptureModeRef.current;
        const justExitedCaptureMode = wasInCaptureMode && !captureMode;
        
        // Skip camera positioning on initial mount unless we're in a specific mode
        if (isInitialMountRef.current && !captureMode && !draggingMode && !guiMode) {
          prevCaptureModeRef.current = captureMode;
          isInitialMountRef.current = false;
          return;
        }
        
        if (captureMode === true) {
          // Lock camera in top-down view for capture
          state.camera.position.set(0, 50, 0);
          state.camera.zoom = 17;
          state.camera.lookAt(0, 0, 0);
        } else if (justExitedCaptureMode) {
          // CameraResetOnExitCapture (outside page) handles the switch in useFrame
          prevCaptureModeRef.current = captureMode;
          isInitialMountRef.current = false;
          return;
        } else if (draggingMode === true) {
          // Axonometric view
          state.camera.position.set(-14, 11, 15);
          state.camera.zoom = 17;
          state.camera.lookAt(0, 0, 0);
        } else if (guiMode === true) {
          // GUI mode view
          state.camera.position.set(-5.16, 19.9, 8.7);
          state.camera.zoom = 17;
          state.camera.lookAt(0, 0, 0);
        }
        
        state.camera.updateProjectionMatrix();
        prevCaptureModeRef.current = captureMode;
        isInitialMountRef.current = false;
      }
    }, [captureMode, draggingMode, guiMode, state.camera]);

    return null;
  });

  return (
      <>
        <div ref={ref} style={{ overscrollBehavior: 'none', touchAction: 'none' }}>
        <Canvas
            dpr={1.5}
            orthographic 
            camera={{ position: [-14, 11, 15], zoom: 17 }}
            frameloop={sceneRotation === true || captureMode || keepFramesForReset || cameraResetting ? "always" : "demand"}
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
              preserveDrawingBuffer: true,
              failIfMajorPerformanceCaveat: false,
            }}
            onCreated={({ gl, scene, camera, size }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.0;
              gl.outputColorSpace = THREE.SRGBColorSpace;
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
              
              if (camera && camera.isOrthographicCamera) {
                camera.near = 0.1;
                camera.far = 2000;
              }
            }}
            style={{
              background: "#1C1C1C",
              height: "100vh",
              overscrollBehavior: 'none',
              touchAction: 'none',
            }}
        >
          <OrthographicCameraSetup />
          <SceneSetup />
          <StableLighting />
          <Suspense fallback={null}>
            <group rotation={captureMode ? [0, Math.PI / 2, 0] : [0, Math.PI / 2, 0]} position={[0, -10, 0]}>
            <B1 show={bathroom} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>
            <Bb show={boxbed} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>

            <FP show={front} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>
            <K1 show={kitchen} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>
            <K2 show={k2} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>
            <ST1 show={st1} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>
            <ST2 show={st2} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>
            <Stairs show={stairs} isZoomState={isZoom}  isMouseDragging={guiMode} isAxio={draggingMode} freeView={sceneRotation}/>

            <Floor />
            <BoundingBox />

            </group>
            <PassiveOrbitControls 
              key={captureMode ? 'capture' : 'default'}
              autoRotate={sceneRotation === true && !captureMode} 
              enableRotate={!captureMode}
              enableZoom={!captureMode}
              enablePan={!captureMode}
              autoRotateSpeed={0.2}
              enableDamping={true}
              dampingFactor={0.05}
              makeDefault={false}
              minDistance={500}
              maxDistance={Infinity}
              minZoom={0.1}
              maxZoom={100}
            />
            <CameraZoomLock />
            <CameraLock />
            <CameraResetOnExitCapture />
            <CameraDolly isZoom={isZoom} draggingMode={draggingMode} guiMode={guiMode} disableRotation={disableRotation} sceneRotation={sceneRotation}/>
          </Suspense>
        </Canvas>
      </div>
      </>
  );
}

export default KitOfPartsPage;
