import * as THREE from "three";

export function createWhiteMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.9,
    metalness: 0.1,
    roughness: 0.8,
  });
}

export function createWhiteWireframeMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
  });
}

