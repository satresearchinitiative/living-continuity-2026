import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A4Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/City_as_a_Category_of_Practice.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[2.78, 2.43, -4.57]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell011.geometry}
          material={materials["Material.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell011_1.geometry}
          material={materials["Material.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell011_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A4Selected2;

useGLTF.preload("/entries_selected/City_as_a_Category_of_Practice.glb");
