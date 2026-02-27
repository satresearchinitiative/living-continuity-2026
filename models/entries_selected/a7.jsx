import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A7Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Domestication_of_the_Public_Realm.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[4.65, 0.72, 0.76]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell019.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell019_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell019_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A7Selected2;

useGLTF.preload("/entries_selected/Domestication_of_the_Public_Realm.glb");
