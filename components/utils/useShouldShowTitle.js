import { useStore } from 'usestore-react';
import { useMemo } from 'react';
import './selectionStore';

export function useShouldShowTitle(nodeId) {
  const [highlightedNodes] = useStore('highlightedNodesStore', []);
  
  return useMemo(() => {
    if (!nodeId || !Array.isArray(highlightedNodes)) {
      return false;
    }
    return highlightedNodes.includes(nodeId);
  }, [nodeId, highlightedNodes]);
}

