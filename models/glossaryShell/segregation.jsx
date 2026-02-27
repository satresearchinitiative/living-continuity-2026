import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Segregation(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/segregation.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[-3.62, 2, 5.19]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere168.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere168_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere168_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default Segregation
useGLTF.preload("/glossarySelected/segregation.glb");
