import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Narrative(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/periphery.glb");
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere167.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere167_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere167_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default Narrative;
useGLTF.preload("/glossarySelected/periphery.glb");
