import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A2Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Alleyways_mapping_forgotten_spaces.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[7.31, 3.61, -2.1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell003.geometry}
          material={materials["Material.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell003_1.geometry}
          material={materials["Material.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell003_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A2Selected2;

useGLTF.preload("/entries_selected/Alleyways_mapping_forgotten_spaces.glb");
