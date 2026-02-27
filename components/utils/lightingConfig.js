import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const LightingSetup = {
  ambient: {
    intensity: 1.5,
    color: new THREE.Color(0xffffff),
  },
  directional: [
    {
      position: [20, 25, 15],
      intensity: 1.5,
      color: new THREE.Color(0xffffff),
      castShadow: true,
      shadow: {
        mapSize: [2048, 2048],
        camera: {
          near: 0.5,
          far: 100,
          left: -50,
          right: 50,
          top: 50,
          bottom: -50,
        },
      },
    },
    {
      position: [-20, 20, -15],
      intensity: 0.8,
      color: new THREE.Color(0xffffff),
      castShadow: false,
    },
    {
      position: [0, 15, 0],
      intensity: 0.5,
      color: new THREE.Color(0xffffff),
      castShadow: false,
    },
    {
      position: [10, 10, -20],
      intensity: 0.4,
      color: new THREE.Color(0xffffff),
      castShadow: false,
    },
  ],
  hemisphere: {
    skyColor: new THREE.Color(0xffffff),
    groundColor: new THREE.Color(0x888888),
    intensity: 0.8,
  },
};

export function LightingSetupComponent() {
  const mainLightRef = useRef();

  useEffect(() => {
    if (mainLightRef.current && LightingSetup.directional[0]?.shadow) {
      const shadow = LightingSetup.directional[0].shadow;
      mainLightRef.current.shadow.mapSize.width = shadow.mapSize[0];
      mainLightRef.current.shadow.mapSize.height = shadow.mapSize[1];
      mainLightRef.current.shadow.camera.near = shadow.camera.near;
      mainLightRef.current.shadow.camera.far = shadow.camera.far;
      mainLightRef.current.shadow.camera.left = shadow.camera.left;
      mainLightRef.current.shadow.camera.right = shadow.camera.right;
      mainLightRef.current.shadow.camera.top = shadow.camera.top;
      mainLightRef.current.shadow.camera.bottom = shadow.camera.bottom;
    }
  }, []);

  return (
    <>
      <ambientLight 
        intensity={LightingSetup.ambient.intensity}
        color={LightingSetup.ambient.color}
      />
      
      <hemisphereLight
        skyColor={LightingSetup.hemisphere.skyColor}
        groundColor={LightingSetup.hemisphere.groundColor}
        intensity={LightingSetup.hemisphere.intensity}
      />

      {LightingSetup.directional.map((light, index) => (
        <directionalLight
          key={index}
          ref={index === 0 ? mainLightRef : null}
          position={light.position}
          intensity={light.intensity}
          color={light.color}
          castShadow={light.castShadow}
        />
      ))}
    </>
  );
}

export function createLightingSetup() {
  return <LightingSetupComponent />;
}
