import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const FALLBACK_GLB = "/entries_selected/Social_Cohesion.glb";

export function A17Selected2(props) {
  const { nodes, materials } = useGLTF(FALLBACK_GLB);
  return (
    <group {...props} dispose={null}>
      <group>
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
export default A17Selected2;

useGLTF.preload(FALLBACK_GLB);
