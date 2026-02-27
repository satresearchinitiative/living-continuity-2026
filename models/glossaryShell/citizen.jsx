import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Citizen(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/citizen.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[-5.13, 1.96, -5.14]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere165.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere165_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere165_2.geometry}
          material={materials.outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere165_3.geometry}
          material={materials["glass.005"]}
        />
      </group>
    </group>
  );
}
export default Citizen;
useGLTF.preload("/glossarySelected/citizen.glb");
