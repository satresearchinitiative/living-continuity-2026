import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A14Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/More_than_buildings.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[-8.48, 1.95, 1.9]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell018.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell018_1.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell018_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A14Selected2;

useGLTF.preload("/entries_selected/More_than_buildings.glb");
