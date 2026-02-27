import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A10Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Gentrification_in_Cairo.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[-1.42, 0.14, -3.25]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell014.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell014_1.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell014_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A10Selected2;

useGLTF.preload("/entries_selected/Gentrification_in_Cairo.glb");
