import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function A26Selected2(props) {
  const { nodes, materials } = useGLTF(
    "/entries_selected/We_Remember_as_Archival_Commons.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group //position={[-7.42, 1.12, -5.52]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell022.geometry}
          material={materials["Material.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell022_1.geometry}
          material={materials["Material.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell007_cell_cell022_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default A26Selected2;

useGLTF.preload("/entries_selected/We_Remember_as_Archival_Commons.glb");
