import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Density(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/density.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[-8.9, -3.91, -1.99]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere152.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere152_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere152_2.geometry}
          material={materials.outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere152_3.geometry}
          material={materials["glass.005"]}
        />
      </group>
    </group>
  );
}
export default Density;

useGLTF.preload("/glossarySelected/density.glb");
