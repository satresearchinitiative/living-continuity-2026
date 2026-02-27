import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Eviction(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/eviction.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[1.94, 4.26, -0.57]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere171.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere171_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere171_2.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  );
}
export default Eviction;
useGLTF.preload("/glossarySelected/eviction.glb");
