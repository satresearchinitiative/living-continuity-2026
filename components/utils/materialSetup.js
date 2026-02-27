import * as THREE from "three";

export function setupMaterialTextures(material, preserveOriginal = true) {
  if (!material || !material.isMaterial) return;

  const originalProperties = preserveOriginal ? {
    color: material.color?.clone(),
    emissive: material.emissive?.clone(),
    roughness: material.roughness,
    metalness: material.metalness,
    opacity: material.opacity,
    transparent: material.transparent,
    side: material.side,
  } : null;

  const textureMaps = [
    'map',
    'normalMap',
    'roughnessMap',
    'metalnessMap',
    'aoMap',
    'emissiveMap',
    'bumpMap',
    'displacementMap',
    'alphaMap',
    'clearcoatMap',
    'clearcoatNormalMap',
    'clearcoatRoughnessMap',
    'iridescenceMap',
    'iridescenceThicknessMap',
    'sheenColorMap',
    'sheenRoughnessMap',
    'specularColorMap',
    'specularIntensityMap',
    'transmissionMap',
    'thicknessMap',
  ];

  textureMaps.forEach((mapName) => {
    const texture = material[mapName];
    if (texture && texture.isTexture) {
      if (texture.image && !texture.image.complete) {
        texture.image.addEventListener('load', () => {
          texture.needsUpdate = true;
        });
      }
      
      if (texture.flipY === undefined || texture.flipY === true) {
        texture.flipY = false;
      }
      
      if (!texture.wrapS || texture.wrapS === THREE.ClampToEdgeWrapping) {
        texture.wrapS = THREE.RepeatWrapping;
      }
      if (!texture.wrapT || texture.wrapT === THREE.ClampToEdgeWrapping) {
        texture.wrapT = THREE.RepeatWrapping;
      }
      
      if (texture.generateMipmaps !== false) {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
      }
      texture.magFilter = THREE.LinearFilter;
      
      if (mapName === 'normalMap' || mapName.includes('Normal')) {
        if (texture.colorSpace !== THREE.NoColorSpace) {
          texture.colorSpace = THREE.NoColorSpace;
        }
      } else if (mapName === 'map' || mapName === 'emissiveMap' || mapName === 'aoMap') {
        if (texture.colorSpace !== THREE.SRGBColorSpace) {
          texture.colorSpace = THREE.SRGBColorSpace;
        }
      } else {
        if (texture.colorSpace !== THREE.NoColorSpace) {
          texture.colorSpace = THREE.NoColorSpace;
        }
      }
      
      texture.needsUpdate = true;
    }
  });

  if (preserveOriginal && originalProperties) {
    if (originalProperties.color && !material.color.equals(originalProperties.color)) {
      material.color.copy(originalProperties.color);
    }
    if (originalProperties.emissive && material.emissive) {
      material.emissive.copy(originalProperties.emissive);
    }
    if (originalProperties.roughness !== undefined) {
      material.roughness = originalProperties.roughness;
    }
    if (originalProperties.metalness !== undefined) {
      material.metalness = originalProperties.metalness;
    }
    if (originalProperties.opacity !== undefined) {
      material.opacity = originalProperties.opacity;
    }
    if (originalProperties.transparent !== undefined) {
      material.transparent = originalProperties.transparent;
    }
    if (originalProperties.side !== undefined) {
      material.side = originalProperties.side;
    }
  }

  if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
    material.needsUpdate = true;
  }
}

export function setupGLTFMaterials(materials, preserveOriginal = true) {
  if (!materials) return;

  Object.values(materials).forEach((material) => {
    if (material && material.isMaterial) {
      setupMaterialTextures(material, preserveOriginal);
    }
  });
}
