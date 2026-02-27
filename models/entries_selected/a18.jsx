import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A18Selected2(props) {
  const { nodes, materials } = useGLTF("/entries_selected/Social_Cohesion.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[11.52, 0.35, -2.54]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell026.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell026_1.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell026_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A18Selected2;

useGLTF.preload("/entries_selected/Social_Cohesion.glb");
