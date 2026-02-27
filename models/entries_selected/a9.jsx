import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A9Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Folk_Housing_Revisited_(Ghubaibah).glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[-3.41, -2.58, -6.93]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell009.geometry}
          material={materials["Material.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell009_1.geometry}
          material={materials["Material.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell009_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A9Selected2;

useGLTF.preload("/entries_selected/Folk_Housing_Revisited_(Ghubaibah).glb");
