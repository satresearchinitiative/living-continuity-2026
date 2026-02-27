import { useGLTF } from "@react-three/drei";

export function safePreloadGLB(path) {
  if (!path) return;
  
  try {
    useGLTF.preload(path);
  } catch (error) {
  }
}
