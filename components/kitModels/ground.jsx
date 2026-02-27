import React, { useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "usestore-react";
import { setupGLTFMaterials } from "../utils/materialSetup";

export default function Floor(props) {
  const { nodes, materials } = useGLTF("/models/gbl_update/floor.glb");

  useEffect(() => {
    if (materials) {
      setupGLTFMaterials(materials, true);

      Object.values(materials).forEach((material) => {
        if (material && material.isMaterial) {
          material.color.setHex(0xffffff);

          if (material.emissive) {
            material.emissive.setHex(0xffffff);
            if (material.emissiveIntensity !== undefined) {
              material.emissiveIntensity = 0.2;
            }
          }

          if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
            material.roughness = 0.5;
            material.metalness = 0.0;
          }

          material.needsUpdate = true;
        }
      });
    }
  }, [materials]);
  const [, setGridDimensions] = useStore("gridDimensions", { width: 144, height: 192, cellSize: 12, centerX: 0, centerZ: 0 });

  const meshNodes = useMemo(() => {
    if (!nodes) return [];
    return Object.entries(nodes).filter(([key, node]) => {
      if (!node || !node.geometry) return false;
      if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
      return true;
    });
  }, [nodes]);

  const gridDimensions = useMemo(() => {
    if (!nodes) return { width: 144, height: 192, cellSize: 12, centerX: 0, centerZ: 0 };

    const box = new THREE.Box3();
    let hasGeometry = false;

    Object.values(nodes).forEach((node) => {
      if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
        const geometry = node.geometry;
        geometry.computeBoundingBox();

        if (geometry.boundingBox) {
          const nodeBox = geometry.boundingBox.clone();

          if (node.matrix && !node.matrix.equals(new THREE.Matrix4())) {
            nodeBox.applyMatrix4(node.matrix);
          }

          if (hasGeometry) {
            box.union(nodeBox);
          } else {
            box.copy(nodeBox);
            hasGeometry = true;
          }
        }
      }
    });

    if (!hasGeometry || box.isEmpty()) {
      return { width: 144, height: 192, cellSize: 12, centerX: 0, centerZ: 0 };
    }

    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const desiredTilesX = 12;
    const desiredTilesZ = 16;
    const cellSize = Math.max(size.x / desiredTilesX, size.z / desiredTilesZ);
    const width = cellSize * desiredTilesX;
    const height = cellSize * desiredTilesZ;

    return { width, height, cellSize, centerX: center.x, centerZ: center.z };
  }, [nodes]);

  useEffect(() => {
    setGridDimensions(gridDimensions);
  }, [gridDimensions, setGridDimensions]);

  const firstMaterial = materials && Object.values(materials)[0];

  const CustomGrid = ({ width, height, cellSize, centerX, centerZ, yPosition }) => {
    const gridGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      
      const halfWidth = width / 2;
      const halfHeight = height / 2;
      const startX = centerX - halfWidth;
      const endX = centerX + halfWidth;
      const startZ = centerZ - halfHeight;
      const endZ = centerZ + halfHeight;
      
      const numLinesX = Math.floor(width / cellSize) + 1;
      const numLinesZ = Math.floor(height / cellSize) + 1;
      
      for (let i = 0; i <= numLinesX; i++) {
        const x = startX + (i * cellSize);
        vertices.push(x, yPosition, startZ, x, yPosition, endZ);
      }
      
      for (let i = 0; i <= numLinesZ; i++) {
        const z = startZ + (i * cellSize);
        vertices.push(startX, yPosition, z, endX, yPosition, z);
      }
      
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      
      return geometry;
    }, [width, height, cellSize, centerX, centerZ, yPosition]);
    
    const material = useMemo(() => {
      return new THREE.LineBasicMaterial({ 
        color: "#1C1C1C",
        linewidth: 1,
        opacity: 0.5,
        transparent: true,
      });
    }, []);
    
    return (
      <lineSegments geometry={gridGeometry} material={material} renderOrder={1} />
    );
  };

  return (
    <group>
      <CustomGrid
        width={gridDimensions.width}
        height={gridDimensions.height}
        cellSize={gridDimensions.cellSize}
        centerX={gridDimensions.centerX || 0}
        centerZ={gridDimensions.centerZ || 0}
        yPosition={1.1}
      />
      <group {...props} dispose={null}>
        {meshNodes.map(([nodeKey, node]) => {
          if (!node || !node.geometry) return null;
          if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
          if (node.type && node.type !== 'Mesh') return null;

          let nodeMaterial = node.material || firstMaterial;
          if (!nodeMaterial) return null;

          if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
            node.geometry.computeVertexNormals();
          }

          return (
            <mesh
              key={nodeKey}
              geometry={node.geometry}
              material={nodeMaterial}
              position={[0, 0.99, 0]}
              castShadow={false}
              receiveShadow={false}
            />
          );
        })}
      </group>
    </group>
  );
}

useGLTF.preload("/models/gbl_update/floor.glb");
