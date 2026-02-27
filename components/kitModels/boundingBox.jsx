import React, { useMemo } from "react";
import { useStore } from "usestore-react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function BoundingBox() {
  const [gridDimensions] = useStore("gridDimensions", { width: 144, height: 192, cellSize: 12, centerX: 0, centerZ: 0 });
  const { nodes: fpNodes } = useGLTF("/models/gbl_update/frontPorch.glb");
  const { nodes: floorNodes } = useGLTF("/models/gbl_update/floor.glb");

  const fpHeight = useMemo(() => {
    if (!fpNodes) return 10;

    const box = new THREE.Box3();
    let hasGeometry = false;

    Object.values(fpNodes).forEach((node) => {
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

    if (!hasGeometry || box.isEmpty()) return 10;

    const size = box.getSize(new THREE.Vector3());
    return size.y;
  }, [fpNodes]);

  const floorBounds = useMemo(() => {
    if (!floorNodes) return { bottom: 0.99, height: 0 };

    const box = new THREE.Box3();
    let hasGeometry = false;

    Object.values(floorNodes).forEach((node) => {
      if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
        if (node.type && node.type !== 'Mesh') return;
        const key = Object.keys(floorNodes).find(k => floorNodes[k] === node);
        if (key && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'))) return;

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

    if (!hasGeometry || box.isEmpty()) return { bottom: 0.99, height: 0 };

    const floorPositionY = 0.99;
    const floorBottomY = box.min.y + floorPositionY;
    const floorHeight = box.max.y - box.min.y;
    return { bottom: floorBottomY, height: floorHeight };
  }, [floorNodes]);

  const { width, height, centerX, centerZ } = gridDimensions;

  const boxWidth = width;
  const boxLength = height;
  const porchHeight = fpHeight;
  const floorHeight = floorBounds.height;
  const totalHeight = porchHeight + floorHeight;
  
  const boxBottom = floorBounds.bottom;
  const boxTop = boxBottom + totalHeight;
  const boxCenterY = boxBottom + totalHeight / 2;

  const position = [centerX, boxCenterY, centerZ];

  const edges = useMemo(() => {
    const calculatedTotalHeight = totalHeight;
    
    const w = boxWidth / 2;
    const l = boxLength / 2;
    const h = calculatedTotalHeight / 2;

    const corners = [
      [-w, -h, -l],
      [w, -h, -l],
      [w, -h, l],
      [-w, -h, l],
      [-w, h, -l],
      [w, h, -l],
      [w, h, l],
      [-w, h, l],
    ];

    const edgeLines = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    return { corners, edgeLines };
  }, [boxWidth, boxLength, totalHeight]);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 1 });

  return (
    <group position={position}>
      {edges.edgeLines.map(([startIdx, endIdx], idx) => {
        const start = edges.corners[startIdx];
        const end = edges.corners[endIdx];
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...start),
          new THREE.Vector3(...end),
        ]);
        return (
          <line key={idx} geometry={geometry} material={lineMaterial} />
        );
      })}
    </group>
  );
}
