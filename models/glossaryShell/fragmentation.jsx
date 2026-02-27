import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Fragmentation(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/fragmentation.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[-1.39, -4.05, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere159.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere159_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere159_2.geometry}
          material={materials.outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere159_3.geometry}
          material={materials["glass.005"]}
        />
      </group>
    </group>
  );
}
export default Fragmentation;
useGLTF.preload("/glossarySelected/fragmentation.glb");
