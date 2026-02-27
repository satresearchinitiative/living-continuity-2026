export const OBJECT_GRID_POSITIONS = {
  fp: { gridX: 4, gridZ: 14 },
  k1: { gridX: 10, gridZ: 15.5 },
  k2: { gridX: 10, gridZ: 10.5 },
  b1: { gridX: 10, gridZ: 9 },
  bb: { gridX: 2, gridZ: 5 },
  st1: { gridX: 7.5, gridZ: 2 },
  st2: { gridX: 6.5, gridZ: 2 },
  stairs: { gridX: 7, gridZ: 5 },
};

export function gridToWorldPosition(gridX, gridZ, gridDimensions) {
  const { cellSize, centerX, centerZ, width, height } = gridDimensions;
  
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  
  const leftEdge = centerX - halfWidth;
  const bottomEdge = centerZ - halfHeight;
  
  const worldX = leftEdge + (gridX * cellSize);
  const worldZ = bottomEdge + (gridZ * cellSize);
  
  return { x: worldX, y: 1.01, z: worldZ };
}

export function clampToGridBounds(position, gridDimensions) {
  const { width, height, centerX, centerZ } = gridDimensions;
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  
  const minX = centerX - halfWidth;
  const maxX = centerX + halfWidth;
  const minZ = centerZ - halfHeight;
  const maxZ = centerZ + halfHeight;
  
  return {
    x: Math.max(minX, Math.min(maxX, position.x)),
    y: position.y,
    z: Math.max(minZ, Math.min(maxZ, position.z)),
  };
}

export function worldToGridPosition(worldX, worldZ, gridDimensions) {
  const { cellSize, centerX, centerZ, width, height } = gridDimensions;
  
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  
  const leftEdge = centerX - halfWidth;
  const bottomEdge = centerZ - halfHeight;
  
  const gridX = (worldX - leftEdge) / cellSize;
  const gridZ = (worldZ - bottomEdge) / cellSize;
  
  return { gridX, gridZ };
}
