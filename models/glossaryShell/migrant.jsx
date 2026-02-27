import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Migrant(props) {
  const { nodes, materials } = useGLTF("/glossarySelected/migrant.glb");
  return (
    <group {...props} dispose={null}>
      <group //position={[8.92, 1.46, -0.6]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere172.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere172_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere172_2.geometry}
          material={materials.outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere172_3.geometry}
          material={materials["glass.005"]}
        />
      </group>
    </group>
  );
}
export default Migrant;
useGLTF.preload("/glossarySelected/migrant.glb");
