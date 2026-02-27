import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A5Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Community_Expulsion.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[-2.16, 2.34, -4.92]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell006.geometry}
          material={materials["Material.058"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell006_1.geometry}
          material={materials["Material.058"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell006_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A5Selected2;

useGLTF.preload("/entries_selected/Community_Expulsion.glb");
