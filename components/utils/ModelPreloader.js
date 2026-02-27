import { useGLTF } from "@react-three/drei";

const preloadedModels = new Set();
const failedModels = new Set();

export function preloadGLBModel(path) {
  if (!path || preloadedModels.has(path) || failedModels.has(path)) {
    return;
  }
  
  preloadedModels.add(path);
  
  try {
    useGLTF.preload(path);
  } catch (error) {
    failedModels.add(path);
    preloadedModels.delete(path);
  }
}

export async function preloadGLBModelAsync(path) {
  if (!path || preloadedModels.has(path) || failedModels.has(path)) {
    return Promise.resolve();
  }
  
  return new Promise((resolve) => {
    preloadedModels.add(path);
    
    try {
      useGLTF.preload(path);
      resolve();
    } catch (error) {
      failedModels.add(path);
      preloadedModels.delete(path);
      resolve();
    }
  });
}

export function preloadAllModels(nodeData) {
  if (!nodeData) return;
  
  if (nodeData.articles) {
    nodeData.articles.forEach(article => {
      if (article.modelPath && article.modelPath.trim() !== '') {
        preloadGLBModel(article.modelPath);
      }
    });
  }
  
  if (nodeData.glossary) {
    nodeData.glossary.forEach(glossary => {
      if (glossary.modelPath && glossary.modelPath.trim() !== '') {
        preloadGLBModel(glossary.modelPath);
      }
    });
  }
}

export function preloadImages(nodeData) {
  if (!nodeData) return Promise.resolve();
  
  const imagePromises = [];
  const batchSize = 6;
  const articles = nodeData.articles || [];
  
  for (let i = 0; i < articles.length; i += batchSize) {
    const batch = articles.slice(i, i + batchSize);
    batch.forEach(article => {
      if (article.imageUrl) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        const promise = new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
          img.src = article.imageUrl;
        });
        imagePromises.push(promise);
      }
    });
    
    if (i + batchSize < articles.length) {
      imagePromises.push(new Promise(resolve => setTimeout(resolve, 10)));
    }
  }
  
  return Promise.allSettled(imagePromises);
}
