import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A12Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Meet_Your_Neighbors_(Again).glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[10.89, 0.43, 1.86]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell002.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell002_1.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell002_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A12Selected2;

useGLTF.preload("/entries_selected/Meet_Your_Neighbors_(Again).glb");
