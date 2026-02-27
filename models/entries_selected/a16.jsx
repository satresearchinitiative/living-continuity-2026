import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A16Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Rewilding_the_urban_void_-_Abstract.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[5.83, 3.36, 3.95]}
      >
       <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell024.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell024_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell024_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A16Selected2;

useGLTF.preload("/entries_selected/Rewilding_the_urban_void_-_Abstract.glb");
