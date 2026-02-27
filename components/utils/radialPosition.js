const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const OUTER_RADIUS_BASE = 22;
const OUTER_RADIUS_VARIATION = 6;
const INNER_RADIUS_BASE = 12;
const INNER_RADIUS_VARIATION = 3;

function sphericalPosition(localIndex, localTotal, radius, useEvenDistribution = false) {
  if (localTotal <= 1) {
    return [0, 0, 0];
  }

  if (useEvenDistribution) {
    const yRaw = 1 - (localIndex / (localTotal - 1)) * 2;
    const y = Math.max(-0.9, Math.min(0.9, yRaw));
    const r = Math.sqrt(Math.max(0, 1 - y * y)) * radius;
    const theta = GOLDEN_ANGLE * localIndex;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    return [x, y * radius, z];
  } else {
    const yRaw = 1 - (localIndex / (localTotal - 1)) * 2;
    const y = Math.max(-0.85, Math.min(0.85, yRaw));
    const r = Math.sqrt(Math.max(0, 1 - y * y)) * radius;
    const theta = GOLDEN_ANGLE * localIndex;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    return [x, y * radius * 0.8, z];
  }
}

function getVariedRadius(index, baseRadius, variation) {
  const variationFactor = Math.sin(index * 0.7) * 0.5 + Math.cos(index * 1.3) * 0.3;
  const variedRadius = baseRadius + (variationFactor * variation);
  return variedRadius;
}

export function getRadialPosition(index, total, radius = 15, articlesCount = null, glossaryCount = null) {
  if (articlesCount !== null && glossaryCount !== null && total === articlesCount + glossaryCount) {
    if (index < articlesCount) {
      const variedRadius = getVariedRadius(
        index, 
        OUTER_RADIUS_BASE, 
        OUTER_RADIUS_VARIATION
      );
      return sphericalPosition(index, articlesCount, variedRadius, false);
    }
    const keywordIndex = index - articlesCount;
    const variedRadius = getVariedRadius(
      keywordIndex,
      INNER_RADIUS_BASE,
      INNER_RADIUS_VARIATION
    );
    return sphericalPosition(
      keywordIndex,
      glossaryCount,
      variedRadius,
      true
    );
  }

  return sphericalPosition(index, total, radius);
}

export function getCircularPosition(index, total, radius = 8, height = 0) {
  const angle = (index / total) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  return [x, height, z];
}

