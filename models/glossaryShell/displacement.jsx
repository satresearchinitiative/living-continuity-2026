import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Displacement(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/displacement.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[-3.42, -2.68, -2.49]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere156.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere156_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere156_2.geometry}
          material={materials.outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere156_3.geometry}
          material={materials["glass.005"]}
        />
      </group>
    </group>
  );
}
export default Displacement;
useGLTF.preload("/glossarySelected/displacement.glb");
