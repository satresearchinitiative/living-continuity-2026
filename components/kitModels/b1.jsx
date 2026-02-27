import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  useGLTF,
  SpotLight,
  PresentationControls,
  Html,
  ContactShadows,
  MeshReflectorMaterial,
  Grid,
} from "@react-three/drei";
import { useStore } from "usestore-react";
import { useDrag } from "@use-gesture/react";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import { useGesture } from "react-use-gesture";
import { useSpring, a } from "@react-spring/three";
import * as THREE from "three";
import { OBJECT_GRID_POSITIONS, gridToWorldPosition, worldToGridPosition } from "../utils/objectPositions";
import { ObjectControls } from "../objectControls";
import { setupGLTFMaterials } from "../utils/materialSetup";
import "./object-title.scss";

export default function B1({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
  const { nodes, materials } = useGLTF("/models/gbl_update/bath.glb");

  useEffect(() => {
    if (materials) {
      setupGLTFMaterials(materials, true);
    }
  }, [materials]);


  const lineNodes = useMemo(() => {
    if (!nodes) return [];
    return Object.entries(nodes).filter(([key, node]) => {
      if (!node || !node.geometry) return false;
      return node.isLineSegments || node.isLine || node.isLineLoop || (node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')));
    });
  }, [nodes]);

  const meshNodes = useMemo(() => {
    if (!nodes) return [];
    return Object.entries(nodes).filter(([key, node]) => {
      if (!node || !node.geometry) return false;
      if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
      if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
      return node.isMesh;
    });
  }, [nodes]);

  const allNodes = useMemo(() => {
    const nodeMap = {};
    if (nodes) {
      Object.entries(nodes).forEach(([key, node]) => {
        if (node && (node.isMesh || node.isLineSegments)) {
          nodeMap[key] = node;
        }
      });
    }
    return nodeMap;
  }, [nodes]);

  const meshRef = useRef();
  const [cameraState, setCameraState] = useState("cameraState");
  const [rotationCount, setRotationCount] = useState(0);
  const [gridDimensions] = useStore("gridDimensions", { width: 144, height: 192, cellSize: 12, centerX: 0, centerZ: 0 });
  const [positionInitialized, setPositionInitialized] = useState(false);
  const [positionResetTrigger] = useStore("objectPositionResetTrigger", 0);
  
  const gridPos = OBJECT_GRID_POSITIONS.b1;
  const initialWorldPos = gridToWorldPosition(gridPos.gridX, gridPos.gridZ, gridDimensions);
  
  const [currentPosition, setCurrentPosition] = useState({
    x: initialWorldPos.x,
    y: initialWorldPos.y,
    z: initialWorldPos.z,
  });

  const [currentGridPos, setCurrentGridPos] = useState({
    gridX: gridPos.gridX,
    gridZ: gridPos.gridZ,
  });
  
  const state = useThree();
  const isZoom = isZoomState;
  
  useEffect(() => {
    if (show && gridDimensions && gridDimensions.width > 0) {
      const worldPos = gridToWorldPosition(gridPos.gridX, gridPos.gridZ, gridDimensions);
      setCurrentPosition({ x: worldPos.x, y: worldPos.y, z: worldPos.z });
      if (!positionInitialized) {
        setCurrentGridPos({ gridX: gridPos.gridX, gridZ: gridPos.gridZ });
        setPositionInitialized(true);
      }
    }
  }, [show, gridDimensions, gridPos, positionInitialized]);

  useEffect(() => {
    if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
      const worldPos = gridToWorldPosition(gridPos.gridX, gridPos.gridZ, gridDimensions);
      setCurrentPosition({ x: worldPos.x, y: worldPos.y, z: worldPos.z });
      setCurrentGridPos({ gridX: gridPos.gridX, gridZ: gridPos.gridZ });
      setRotationCount(0);
    }
  }, [positionResetTrigger, gridDimensions, gridPos]);

  const handleMove = (cameraRelativeX, cameraRelativeZ) => {
    if (!gridDimensions || gridDimensions.width === 0) return;
    
    const camera = state.camera;
    if (!camera) return;
    
    // Update camera matrix to ensure it's current
    camera.updateMatrixWorld();
    
    // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
    const cameraRight = new THREE.Vector3(1, 0, 0);
    const cameraForward = new THREE.Vector3(0, 0, -1);
    
    cameraRight.applyQuaternion(camera.quaternion);
    cameraForward.applyQuaternion(camera.quaternion);
    
    const rightXZ = new THREE.Vector2(cameraRight.x, cameraRight.z).normalize();
    const forwardXZ = new THREE.Vector2(cameraForward.x, cameraForward.z).normalize();
    
    const gridXAxis = new THREE.Vector2(1, 0);
    const gridZAxis = new THREE.Vector2(0, 1);
    
    const rightDotX = rightXZ.dot(gridXAxis);
    const rightDotZ = rightXZ.dot(gridZAxis);
    const forwardDotX = forwardXZ.dot(gridXAxis);
    const forwardDotZ = forwardXZ.dot(gridZAxis);
    
    let deltaGridX = 0;
    let deltaGridZ = 0;
    
    if (cameraRelativeX !== 0) {
      const absRightDotX = Math.abs(rightDotX);
      const absRightDotZ = Math.abs(rightDotZ);
      
      if (absRightDotX > absRightDotZ) {
        deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
      } else {
        deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
      }
    }
    
    if (cameraRelativeZ !== 0) {
      const absForwardDotX = Math.abs(forwardDotX);
      const absForwardDotZ = Math.abs(forwardDotZ);
      
      if (absForwardDotX > absForwardDotZ) {
        deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
      } else {
        deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
      }
    }
    
    setCurrentGridPos(prev => {
      const newGridX = prev.gridX + deltaGridX;
      const newGridZ = prev.gridZ + deltaGridZ;
      const newWorldPos = gridToWorldPosition(newGridX, newGridZ, gridDimensions);
      setCurrentPosition({ x: newWorldPos.x, y: newWorldPos.y, z: newWorldPos.z });
      return { gridX: newGridX, gridZ: newGridZ };
    });
  };

  const handleRotate = () => {
    setRotationCount(prev => prev + Math.PI / 2);
  };

  const maxZ = 13;
  const minZ = -13;
  const maxX = 16;
  const minX = -16;
  const GUI = true;
  const [showPanel, setShowPanel] = useState();
  const [selectedObjectId, setSelectedObjectId] = useStore("selectedObjectId", null);
  const [sceneRotation, setSceneRotation] = useStore("kitOfParts_sceneRotation", false);
  const [objectRotationTrigger] = useStore("objectRotationTrigger", 0);
  const objectId = "b1";
  const isSelected = selectedObjectId === objectId;

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: isSelected ? 0xe9ff00 : 0x000000,
      linewidth: isSelected ? 4 : 2,
      depthTest: true
    });
  }, [isSelected]);

  useEffect(() => {
    if (isSelected && objectRotationTrigger > 0) {
      setRotationCount(prev => prev + Math.PI / 2);
    }
  }, [objectRotationTrigger, isSelected]);


  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [spring, set] = useSpring(() => ({
    position: [currentPosition.x, currentPosition.y, currentPosition.z],
    rotation: [0, 0, 0],
    config: { friction: 40 },
  }));

  const [opacitySpring, setOpacity] = useSpring(() => ({
    opacity: 0,
    config: { tension: 100, friction: 50 },
  }));

  useEffect(() => {
    if (show) {
      setOpacity({ opacity: 1 });
    }
  }, [show, setOpacity]);

  const bind = useGesture({
    onDrag: ({ offset: [x, y, z] }) => {
      if (isMouseDragging) {
        setCurrentPosition({
          x: Math.min(
            Math.max(Math.round(currentPosition.x + x / 99), minX),
            maxX
          ),
          y: 0,
          z: Math.min(
            Math.max(Math.round(currentPosition.z + y / 99), minZ),
            maxZ
          ),
        });
      }
    }
  });
  const UP = () => {
    console.log(isZoom);
    if (isZoom === "Top") {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z - 1 });
      }
    } else if (isZoom === "One") {
      if (currentPosition.z < minZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z - 1 });
      }
    } else if (isZoom === "Two") {
      if (currentPosition.x < maxX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
      }
    } else if (isZoom === "Three") {
      if (currentPosition.z < maxZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
      }
    } else if (isZoom === "Four") {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
      }
    } else {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z - 1 });
      }
    }
  };
  const DOWN = () => {
    if (isZoom === "Top") {
      if (currentPosition.z < maxZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
      }
    } else if (isZoom === "One") {
      if (currentPosition.z < maxZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
      }
    } else if (isZoom === "Two") {
      if (currentPosition.x > minX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
      }
    } else if (isZoom === "Three") {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z - 1 });
      }
    } else if (isZoom === "Four") {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
      }
    } else {
      if (currentPosition.z < maxZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
      }
    }

    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
  };
  const LEFT = () => {
    if (isZoom === "Top") {
      if (currentPosition.x > minX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
      }
    } else if (isZoom === "One") {
      if (currentPosition.x > minX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
      }
    } else if (isZoom === "Two") {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z - 1 });
      }
    } else if (isZoom === "Three") {
      if (currentPosition.x < maxX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
      }
    } else if (isZoom === "Four") {
      if (currentPosition.z < maxZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
      }
    } else {
      if (currentPosition.x > minX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
      }
    }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
  };
  const RIGHT = () => {
    if (isZoom === "Top") {
      if (currentPosition.x < maxX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
      }
    } else if (isZoom === "One") {
      if (currentPosition.x < maxX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
      }
    } else if (isZoom === "Two") {
      if (currentPosition.z < maxZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
      }
    } else if (isZoom === "Three") {
      if (currentPosition.x > minX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
      }
    } else if (isZoom === "Four") {
      if (currentPosition.z > minZ) {
        setCurrentPosition({ ...currentPosition, z: currentPosition.z - 1 });
      }
    } else {
      if (currentPosition.x < maxX) {
        setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
      }
    }

    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
  };
  // useEffect(() => {
  //   console.log('currentPosition', currentPosition)
  // }, [currentPosition])
  useEffect(() => {
    //console.log("currentPosition", meshRef.current.position)
  }, [state]);

  useEffect(() => {
    if (showPanel) {
      setCurrentPosition({ ...currentPosition, y: 1 });
    } else {
      setCurrentPosition({ ...currentPosition, y: 0 });
    }
  }, [showPanel]);

  const prevShowRef = useRef(false);
  useEffect(() => {
    if (show && !prevShowRef.current) {
      setSelectedObjectId(objectId);
      if (isAxio) {
        setSceneRotation(false);
      }
    }
    prevShowRef.current = show;
  }, [show, isAxio, setSelectedObjectId, setSceneRotation]);

  useEffect(() => {
    if (materials && Object.keys(materials).length > 0 && show) {
      Object.values(materials).forEach(material => {
        if (material && material.isMaterial) {
          if (!isSelected && selectedObjectId && selectedObjectId !== null && isAxio) {
            if (material.userData.originalOpacity === undefined) {
              material.userData.originalOpacity = material.opacity !== undefined ? material.opacity : 1;
            }
            material.opacity = 0.4;
            material.transparent = true;
          } else {
            if (material.userData.originalOpacity !== undefined) {
              material.opacity = material.userData.originalOpacity;
            } else {
              material.opacity = 1;
            }
            material.transparent = false;
          }
        }
      });
    }
  }, [isSelected, selectedObjectId, materials, show, isAxio]);

  const actionsPanel = (e) => {
    e.stopPropagation();
    if (isMouseDragging === true) {
      setShowPanel(true);
    }
  };

  const handleObjectClick = (e) => {
    e.stopPropagation();
    setSelectedObjectId(objectId);
    if (isAxio === true) {
      setSceneRotation(false);
    }
    if (isMouseDragging === true) {
      setShowPanel(true);
    }
  };



  return (
    <group
      {...props}
    >
      {show && (
        <a.group style={{ opacity: opacitySpring.opacity }}>
          <a.group
            rotation={[0, rotationCount, 0]}
            onClick={handleObjectClick}
            position={[currentPosition.x, currentPosition.y, currentPosition.z]}
          >
            {meshNodes.map(([nodeKey, node], index) => {
              if (!node || !node.geometry) return null;
              const nodeMaterial = node.material || (materials && Object.values(materials)[0]);
              if (!nodeMaterial || !node.geometry.attributes) return null;
              return (
                <mesh
                  key={nodeKey}
                  ref={index === 0 ? meshRef : null}
                  castShadow={false}
                  receiveShadow={false}
                  geometry={node.geometry}
                  material={nodeMaterial}
                />
              );
            })}
            {lineNodes.map(([nodeKey, node]) => {
              if (!node || !node.geometry) return null;
              if (!node.geometry.attributes) return null;
              
              let geometry = node.geometry;
              if (node.isMesh) {
                geometry = new THREE.EdgesGeometry(node.geometry);
              }
              
              if (isSelected) {
                const offsets = [
                  [0, 0, 0],
                  [0.01, 0, 0],
                  [-0.01, 0, 0],
                  [0, 0.01, 0],
                  [0, -0.01, 0],
                  [0.007, 0.007, 0],
                  [-0.007, -0.007, 0],
                  [0.007, -0.007, 0],
                  [-0.007, 0.007, 0],
                  [0.005, 0, 0],
                  [-0.005, 0, 0],
                  [0, 0.005, 0],
                  [0, -0.005, 0],
                ];
                
                return (
                  <group key={nodeKey}>
                    {offsets.map((offset, idx) => (
                      <lineSegments
                        key={`${nodeKey}-${idx}`}
                        geometry={geometry}
                        material={lineMaterial}
                        position={offset}
                      />
                    ))}
                  </group>
                );
              }
              
              return (
                <lineSegments
                  key={nodeKey}
                  geometry={geometry}
                  material={lineMaterial}
                />
              );
            })}
            {isSelected && (
              <>
                <ObjectControls
                  isSelected={isSelected}
                  title="BATHROOM"
                  onRotate={handleRotate}
                  onMoveRight={() => handleMove(0, -1)} 
                  onMoveLeft={() => handleMove(0, 1)} 
                  onMoveTop={() => handleMove(1, 0)}
                  onMoveBottom={() => handleMove(-1, 0)} 
                  onPlace={() => setSelectedObjectId(null)}
                />
              </>
            )}
            {/* <ContactShadows
              opacity={1}
              scale={10}
              blur={1}
              far={10}
              resolution={256}
              color="#000000"
            /> */}


            {showPanel && (
              <Html center as="div">
                <div
                  className="panel"

                >
                  <div
                    className="rotate"
                    onClick={() => {
                      setRotationCount(rotationCount + Math.PI / 2);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div

                    className="up"
                    onClick={UP}
                  >
                    <svg
                      width="46"
                      height="35"
                      viewBox="0 0 46 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: 'rotate(-90deg)' }}
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="45"
                        height="34"
                        rx="17"
                        fill="black"
                        stroke="white"
                      />
                      <path
                        d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184"
                        stroke="#EAFF00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        transform="translate(11.5, 10.5)"
                      />
                    </svg>
                  </div>
                  <div
                    className="rotate"
                    onClick={() => {
                      setRotationCount(rotationCount - Math.PI / 2);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="left" onClick={LEFT}>
                    <svg
                      width="46"
                      height="35"
                      viewBox="0 0 46 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: 'rotate(180deg)' }}
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="45"
                        height="34"
                        rx="17"
                        fill="black"
                        stroke="white"
                      />
                      <path
                        d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184"
                        stroke="#EAFF00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        transform="translate(11.5, 10.5)"
                      />
                    </svg>
                  </div>
                  <div className="down" onClick={DOWN}>
                    <svg
                      width="46"
                      height="35"
                      viewBox="0 0 46 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: 'rotate(90deg)' }}
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="45"
                        height="34"
                        rx="17"
                        fill="black"
                        stroke="white"
                      />
                      <path
                        d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184"
                        stroke="#EAFF00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        transform="translate(11.5, 10.5)"
                      />
                    </svg>
                  </div>
                  <div className="right" onClick={RIGHT}>
                    <svg
                      width="46"
                      height="35"
                      viewBox="0 0 46 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="45"
                        height="34"
                        rx="17"
                        fill="black"
                        stroke="white"
                      />
                      <path
                        d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184"
                        stroke="#EAFF00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        transform="translate(11.5, 10.5)"
                      />
                    </svg>
                  </div>
                  <div
                    className="place"
                    onClick={() => {
                      setShowPanel(false);
                    }}
                  >
                    <svg
                      width="154"
                      height="26"
                      viewBox="0 0 154 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="153"
                        height="25"
                        rx="12.5"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </Html>
            )}
          </a.group>
        </a.group>
      )}
    </group>
  );
}

useGLTF.preload("/models/gbl_update/bath.glb");
