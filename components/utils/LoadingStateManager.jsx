import { useStore, getStore } from 'usestore-react';
import { useEffect, useState } from 'react';

export function useLoadingState() {
  const [loadingState] = useStore('loadingState', {
    nodesLoaded: 0,
    totalNodes: 0,
    isLoading: true,
    nodesVisible: [],
  });

  return loadingState;
}

export function useNodeVisibility(nodeId, index, totalNodes) {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [loadingState] = useStore('loadingState', {
    nodesLoaded: 0,
    totalNodes: 0,
    isLoading: true,
    nodesVisible: [],
  });

  useEffect(() => {
    const baseDelay = 50;
    const staggerDelay = index * baseDelay;
    const maxDelay = totalNodes * baseDelay;
    
    if (!loadingState.isLoading && loadingState.totalNodes > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        
        const fadeDuration = 800;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / fadeDuration, 1);
          
          const eased = 1 - Math.pow(1 - progress, 3);
          setOpacity(eased);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        animate();
      }, staggerDelay);

      return () => clearTimeout(timer);
    }
  }, [loadingState.isLoading, loadingState.totalNodes, index, totalNodes]);

  return { isVisible, opacity: Math.max(opacity, 0.1) };
}

export function initializeLoadingState(totalNodes) {
  const store = getStore('loadingState');
  if (store) {
  store.setState({
    nodesLoaded: 0,
    totalNodes,
    isLoading: true,
      nodesVisible: [],
  });
  }
}

export function completeLoading() {
  const store = getStore('loadingState');
  if (store) {
  store.setState(prev => ({
    ...prev,
    isLoading: false,
  }));
  }
}

export function markNodeLoaded(nodeId) {
  const store = getStore('loadingState');
  if (store) {
  store.setState(prev => ({
    ...prev,
    nodesLoaded: prev.nodesLoaded + 1,
      nodesVisible: [...(prev.nodesVisible || []), nodeId],
  }));
  }
}

export default { useLoadingState, useNodeVisibility, initializeLoadingState, completeLoading, markNodeLoaded };

