import * as THREE from 'three';

const crossGroupRegistry = new Map();
const crossPositionCache = new Map();
const tempVec = new THREE.Vector3();

export function registerCrossGroup(nodeId, crossGroupRef) {
  if (crossGroupRef) {
    crossGroupRegistry.set(nodeId, crossGroupRef);
    crossPositionCache.delete(nodeId);
  } else {
    crossGroupRegistry.delete(nodeId);
    crossPositionCache.delete(nodeId);
  }
}

export function unregisterCrossGroup(nodeId) {
  crossGroupRegistry.delete(nodeId);
  crossPositionCache.delete(nodeId);
}

export function updateCrossPosition(nodeId) {
  const crossGroupRef = crossGroupRegistry.get(nodeId);
  if (!crossGroupRef || !crossGroupRef.current) return null;

  try {
    const crossGroup = crossGroupRef.current;
    crossGroup.getWorldPosition(tempVec);
    const position = [tempVec.x, tempVec.y, tempVec.z];
    crossPositionCache.set(nodeId, position);
    return position;
  } catch (error) {
    return null;
  }
}

export function updateAllCrossPositions() {
  const positions = {};
  crossGroupRegistry.forEach((crossGroupRef, nodeId) => {
    const pos = updateCrossPosition(nodeId);
    if (pos) {
      positions[nodeId] = pos;
    }
  });
  return positions;
}

export function getCachedCrossPosition(nodeId) {
  return crossPositionCache.get(nodeId) || null;
}

export function clearCache() {
  crossPositionCache.clear();
}
