'use client';

export const dynamic = 'force-dynamic';

import { Environment } from "@react-three/drei";
import PassiveOrbitControls from "../../components/utils/PassiveOrbitControls";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useEffect, Suspense, useMemo, useCallback, useState, startTransition } from "react";
import OptimizedCanvas from "../../components/utils/OptimizedCanvas";
import ConnectionController from "../../components/connectionControler";
import ElementOpacityController from "../../components/utils/ElementOpacityController";
import Modal from "react-modal";
import { useStore } from "usestore-react";
import TopBar from "../../components/treeComponents/topbar";
import LivingContinuityButton from "../../components/livingContinuityButton";
import { suppressTextureErrors } from "../../components/utils/suppressTextureErrors";
import { processNodeData } from "../../components/utils/d3DataManager";
import ArticleNodeTemplate from "../../components/templates/ArticleNodeTemplate";
import { GlossaryNodeTemplate } from "../../components/templates/GlossaryNodeTemplate";
import { initializeLoadingState, completeLoading } from "../../components/utils/LoadingStateManager";
import { CameraInteractionTracker } from "../../components/utils/CameraInteractionTracker";
import { ConnectionTransitionController } from "../../components/utils/ConnectionTransitionController";
import { preloadAllModels, preloadImages, preloadGLBModel } from "../../components/utils/ModelPreloader";
import { WalkThroughController } from "../../components/utils/WalkThroughController";
import { CameraFOVController } from "../../components/utils/CameraFOVController";
import "./welcomeModal.scss";

const selectedComponents = {};
const glossaryShellComponents = {};
let initialCameraHasBeenSet = false;

const getSelectedComponent = async (id) => {
  if (!selectedComponents[id]) {
    try {
      const lowerId = id.toLowerCase();
      const module = await import(`../../models/entries_selected/${lowerId}`);
      const exportName = `${id}Selected2`;
      selectedComponents[id] = module[exportName] || module.default || module[`${id}Selected`];
    } catch (e) {
      console.warn(`Could not load selected component for ${id}:`, e);
      return null;
    }
  }
  return selectedComponents[id];
};

const getGlossaryShellComponent = async (path) => {
  if (!path) return null;
  let key = path.replace('../glossaryShell/', '');
  if (!glossaryShellComponents[key]) {
    try {
      let module;
      try {
        module = await import(`../../models/glossaryShell/${key}`);
      } catch (e1) {
        const normalizedKey = key.replace(/-/g, '');
        try {
          module = await import(`../../models/glossaryShell/${normalizedKey}`);
          key = normalizedKey;
        } catch (e2) {
          throw e2;
        }
      }
      const pascalCase = key
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      glossaryShellComponents[key] = module.default || module[pascalCase] || Object.values(module).find(v => typeof v === 'function');
    } catch (e) {
      console.warn(`Could not load glossary shell for ${key}:`, e);
      return null;
    }
  }
  return glossaryShellComponents[key];
};


const HomePage = () => {
  const [cameraOptions] = useStore('cameraOptions');
  const [sceneRotation] = useStore('livingContinuity_sceneRotation', false);
  const [walkThroughActive, setWalkThroughActive] = useStore('walkThroughActive', false);
  const showAllLines = false;
  const [camera, setCamera] = useState(true);
  const [modalIsOpen, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [nodeData, setNodeData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [selectedComponentsMap, setSelectedComponentsMap] = useState({});
  const [glossaryShellComponentsMap, setGlossaryShellComponentsMap] = useState({});
  const [selectedNode] = useStore('selectedNodeStore', null);
  const [cameraInteraction] = useStore('cameraInteractionStore', false);
  const [environmentLoaded, setEnvironmentLoaded] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [modalInitialized, setModalInitialized] = useState(typeof window !== 'undefined');
  const getInitialCameraPosition = () => {
    const radius = 28;
    const height = 6;
    const theta = Math.random() * Math.PI * 2;
    const x = radius * Math.cos(theta);
    const z = radius * Math.sin(theta);
    return [x, height, z];
  };
  
  const [initialCameraPosition] = useState(() => getInitialCameraPosition());
  
  const frameloopMode = camera || cameraInteraction || initialLoad ? 'always' : 'demand';
  

  useEffect(() => {
    fetch(`/data/nodes.json?t=${Date.now()}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        startTransition(() => {
          setNodeData(data);
          const processed = processNodeData(data);
          setProcessedData(processed);
        });
        
        const totalNodes = (data.articles?.length || 0) + (data.glossary?.length || 0);
        initializeLoadingState(totalNodes);
        
        const scheduleIdleWork = (callback) => {
          if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(callback, { timeout: 2000 });
          } else {
            setTimeout(callback, 100);
          }
        };
        
        const loadComponentsInBatches = async () => {
          const batchSize = 5;
          const allArticles = data.articles || [];
          const allGlossary = data.glossary || [];
          
          const loadBatch = async (items, loader, setter, type) => {
            for (let i = 0; i < items.length; i += batchSize) {
              await new Promise(resolve => {
                scheduleIdleWork(async () => {
                  const batch = items.slice(i, i + batchSize);
                  const results = await Promise.allSettled(
                    batch.map(async (item) => {
                      try {
                        const component = await loader(item);
                        return { id: item.id, component };
                      } catch (e) {
                        console.warn(`Failed to load ${type} component for ${item.id}:`, e);
                        return { id: item.id, component: null };
                      }
                    })
                  );
                  
                  startTransition(() => {
                    setter(prev => {
                      const updated = { ...prev };
                      results.forEach((result) => {
                        if (result.status === 'fulfilled' && result.value?.component) {
                          updated[result.value.id] = result.value.component;
                        }
                      });
                      return updated;
                    });
                  });
                  
                  setTimeout(resolve, 50);
                });
              });
            }
          };
          
          const articleLoader = (article) => {
            if (article.selectedModelPath) {
              return getSelectedComponent(article.id);
            }
            return Promise.resolve(null);
          };
          
          const glossaryLoader = (glossary) => {
            if (glossary.glossaryShellPath) {
              return getGlossaryShellComponent(glossary.glossaryShellPath);
            }
            return Promise.resolve(null);
          };
          
          await Promise.all([
            loadBatch(allArticles, articleLoader, setSelectedComponentsMap, 'article'),
            loadBatch(allGlossary, glossaryLoader, setGlossaryShellComponentsMap, 'glossary')
          ]);
          
          completeLoading();
        };
        
        scheduleIdleWork(() => {
          preloadAllModels(data);
          preloadImages(data).catch(() => {});
        });
        
        scheduleIdleWork(() => {
          loadComponentsInBatches().catch(err => {
            console.error('Error loading components:', err);
            completeLoading();
          });
        });
      })
      .catch(err => {
        console.error('Failed to load node data:', err);
        startTransition(() => {
          setNodeData({ articles: [], glossary: [] });
          setProcessedData({ nodes: [], links: [], nodeMap: new Map() });
        });
      });
  }, []);

  useEffect(() => {
    let timer2;
    const timer = setTimeout(() => {
      setEnvironmentLoaded(true);
      timer2 = setTimeout(() => {
        setInitialLoad(false);
      }, 20);
    }, 10);
    return () => {
      clearTimeout(timer);
      if (timer2) clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const cleanup = suppressTextureErrors();
    return cleanup;
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && modalIsOpen) {
        handleOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen, handleOpen]);

  useEffect(() => {
    // When modal closes (diagram opens), wait 8 seconds then start walkthrough
    if (!modalIsOpen && processedData && nodeData) {
      const timer = setTimeout(() => {
        setWalkThroughActive(true);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen, processedData, nodeData, setWalkThroughActive]);

  const titleSetters = useMemo(() => {
    if (!nodeData) return {};
    const setters = {};
    
    nodeData.articles.forEach(article => {
      setters[article.id] = () => setTitle(article.title);
    });
    
    nodeData.glossary.forEach(glossary => {
      setters[glossary.id] = () => setTitle(glossary.title || '');
    });
    
    return setters;
  }, [nodeData]);

  const setTitleDefault = useCallback(() => setTitle(""), []);

  const SceneBackground = React.memo(() => {
    const { scene } = useThree();
    useEffect(() => {
      scene.background = new THREE.Color(0x1C1C1C);
    }, [scene]);
    return null;
  });
  SceneBackground.displayName = 'SceneBackground';

  const CameraDolly = React.memo(({ cameraOptions }) => {
    const state = useThree();
    const [selectedNode] = useStore('selectedNodeStore', null);
    
    useEffect(() => {
      if (selectedNode) {
        return;
      }
      
      if (!cameraOptions) {
        return;
      }
      
      if (!initialCameraHasBeenSet) {
        return;
      }
      
      const presets = {
        top: [0.267, 14.68, 0.6],
        reset: [5.29, -1.59, 6],
        overview: [0, 6, 18],
      };

      const nextPosition = presets[cameraOptions];
      if (!nextPosition) {
        return;
      }

      state.camera.position.set(...nextPosition);
      state.camera.lookAt(0, 0, 0);
      state.camera.updateProjectionMatrix();
    }, [cameraOptions, state.camera, selectedNode]);
    return null;
  });

  const InitialCameraSetup = React.memo(({ initialPosition }) => {
    const { camera, set } = useThree();
    const initialPositionRef = React.useRef(initialPosition);
    
    useEffect(() => {
      if (!initialCameraHasBeenSet && initialPositionRef.current) {
        const timer = setTimeout(() => {
          if (!initialCameraHasBeenSet) {
            camera.position.set(...initialPositionRef.current);
            camera.lookAt(0, 0, 0);
            camera.updateProjectionMatrix();
            set({ camera });
            initialCameraHasBeenSet = true;
          }
        }, 50);
        return () => clearTimeout(timer);
      }
    }, []);
    
    return null;
  });
  InitialCameraSetup.displayName = 'InitialCameraSetup';
  
  CameraDolly.displayName = 'CameraDolly';

  return (
    <>
      <Modal 
        isOpen={modalIsOpen} 
        contentLabel="Welcome Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
        ariaHideApp={false}
        className="welcomeModalContent"
        overlayClassName="welcomeModalOverlay"
        onRequestClose={handleOpen}
        closeTimeoutMS={150}
        preventScroll={true}
      >
        <div onClick={handleOpen}>
          <LivingContinuityButton onClick={handleOpen} />
        </div>
      </Modal>
      {(!processedData || !nodeData) && (
        <div className="welcomeLoading">
          Loading...
        </div>
      )}
      <div className="welcomeTopbarWrapper">
        <TopBar title={title} />
      </div>

      <div className="welcomeCanvasWrapper">
        <OptimizedCanvas
          frameloop={frameloopMode}
        >
        <SceneBackground />
        <InitialCameraSetup initialPosition={initialCameraPosition} />
        <ambientLight intensity={1} />
        {environmentLoaded && (
          <Suspense fallback={null}>
            <Environment preset="city" />
          </Suspense>
        )}
        <CameraDolly cameraOptions={cameraOptions} />
        {processedData && nodeData && (
          <>
            <WalkThroughController 
              nodeData={nodeData} 
              processedData={processedData} 
              isActive={walkThroughActive}
            />
            <ElementOpacityController />
            <CameraInteractionTracker />
            <ConnectionTransitionController />
            <CameraFOVController />

            {nodeData.articles.map((article) => {
              const node = processedData.nodeMap.get(article.id);
              if (!node) return null;
              
              const SelectedComponent = selectedComponentsMap[article.id];
              const setTitleFn = titleSetters[article.id] || setTitleDefault;
              
              return (
                <Suspense key={article.id} fallback={null}>
                  <ArticleNodeTemplate
                    nodeData={node}
                    showAllLines={showAllLines}
                    setTitle={setTitleFn}
                    setDefault={setTitleDefault}
                    selectedComponent={SelectedComponent}
                  />
                </Suspense>
              );
            })}

            {nodeData.glossary.map((glossary) => {
              const node = processedData.nodeMap.get(glossary.id);
              if (!node) return null;
              
              const GlossaryShellComponent = glossaryShellComponentsMap[glossary.id];
              const setTitleFn = titleSetters[glossary.id] || setTitleDefault;
              
              return (
                <Suspense key={glossary.id} fallback={null}>
                  <GlossaryNodeTemplate
                    nodeData={node}
                    showAllLines={showAllLines}
                    title={glossary.title}
                    setTitle={setTitleFn}
                    setDefault={setTitleDefault}
                    glossaryShellComponent={GlossaryShellComponent}
                  />
                </Suspense>
              );
            })}

            <ConnectionController processedData={processedData} />
          </>
        )}

        <PassiveOrbitControls
          autoRotate={sceneRotation && !walkThroughActive ? true : false}
          autoRotateSpeed={0.5}
          minDistance={1}
          maxDistance={60}
          enableDamping={true}
          dampingFactor={0.08}
          enablePan={true}
          makeDefault={false}
          rotateSpeed={0.8}
          panSpeed={0.8}
          zoomSpeed={0.8}
          enableRotate={true}
        />
        </OptimizedCanvas>
      </div>
    </>
  );
};

export default HomePage;
