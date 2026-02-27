import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A1Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/Adaptive_Re-Use_in_Sharjah.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell017.geometry}
          material={materials["Material.005"]}/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell017_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell017_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A1Selected2;
useGLTF.preload("/entries_selected/Adaptive_Re-Use_in_Sharjah.glb");
