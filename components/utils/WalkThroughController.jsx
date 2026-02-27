import { useEffect, useRef } from 'react';
import { useStore } from 'usestore-react';

export function WalkThroughController({ nodeData, processedData, isActive }) {
  const [, setSelectedNode] = useStore('selectedNodeStore', null);
  const intervalRef = useRef(null);
  const currentArticleRef = useRef(null);
  const visitedArticlesRef = useRef(new Set());
  const wasActiveBeforePauseRef = useRef(false);
  const hasInitialRunRef = useRef(false);
  const isActiveRef = useRef(isActive);
  const nodeDataRef = useRef(nodeData);
  const processedDataRef = useRef(processedData);

  // Keep refs in sync with props
  useEffect(() => {
    isActiveRef.current = isActive;
    nodeDataRef.current = nodeData;
    processedDataRef.current = processedData;
  }, [isActive, nodeData, processedData]);

  useEffect(() => {
    if (!isActive || !nodeData || !processedData) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (!isActive) {
        setSelectedNode(null);
        currentArticleRef.current = null;
        visitedArticlesRef.current.clear();
        wasActiveBeforePauseRef.current = false;
        hasInitialRunRef.current = false; // Allow animation to start again when user clicks dynamic view
      }
      return;
    }

    const allArticles = nodeData.articles || [];
    const allGlossary = nodeData.glossary || [];
    const allNodes = [...allArticles, ...allGlossary];
    if (allNodes.length === 0) return;

    const getRandomNode = () => {
      const availableNodes = allNodes.filter(node => {
        if (visitedArticlesRef.current.size >= allNodes.length) {
          return true;
        }
        return !visitedArticlesRef.current.has(node.id);
      });

      if (availableNodes.length === 0) {
        visitedArticlesRef.current.clear();
        return allNodes[Math.floor(Math.random() * allNodes.length)];
      }

      return availableNodes[Math.floor(Math.random() * availableNodes.length)];
    };

    const visitNode = (nodeItem) => {
      setSelectedNode({ id: nodeItem.id, ts: Date.now() });
    };

    const nextNode = () => {
      const randomNode = getRandomNode();
      if (randomNode) {
        currentArticleRef.current = randomNode;
        visitedArticlesRef.current.add(randomNode.id);
        visitNode(randomNode);
      }
    };

    const startWalkThrough = () => {
      // Check if we still have valid data before starting
      if (!isActiveRef.current || !nodeDataRef.current || !processedDataRef.current) {
        return;
      }

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      const currentNodes = [...(nodeDataRef.current.articles || []), ...(nodeDataRef.current.glossary || [])];
      if (currentNodes.length === 0) return;

      if (!currentArticleRef.current) {
        currentArticleRef.current = currentNodes[Math.floor(Math.random() * currentNodes.length)];
        visitedArticlesRef.current.add(currentArticleRef.current.id);
        visitNode(currentArticleRef.current);
      }

      intervalRef.current = setInterval(() => {
        // Double-check we're still active before each iteration
        if (!isActiveRef.current || !nodeDataRef.current || !processedDataRef.current) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return;
        }
        nextNode();
      }, 8000);
    };

    // Start the walk-through only on initial run
    if (!hasInitialRunRef.current) {
      hasInitialRunRef.current = true;
      startWalkThrough();
    }

    // Handle visibility change (pause when tab is hidden, resume when visible)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Tab is hidden - pause the walk-through
        wasActiveBeforePauseRef.current = intervalRef.current !== null;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else if (document.visibilityState === 'visible') {
        // Tab is visible again - resume the walk-through if it was active
        // Use ref to get the latest isActive value
        if (wasActiveBeforePauseRef.current && isActiveRef.current && nodeDataRef.current && processedDataRef.current) {
          startWalkThrough();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isActive, nodeData, processedData, setSelectedNode]);

  return null;
}
