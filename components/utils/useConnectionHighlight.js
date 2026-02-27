import { useEffect, useRef } from 'react';
import { useStore } from 'usestore-react';
import { getConnectedNodes } from './nodeConnections';
import './selectionStore';

export function useConnectionHighlight(nodeId, isActive) {
  const [, setSelectedNode] = useStore('selectedNodeStore', null);
  const hasConnections = getConnectedNodes(nodeId).length > 0;
  const wasActiveRef = useRef(false);
  const nodeIdRef = useRef(nodeId);

  useEffect(() => {
    nodeIdRef.current = nodeId;
  }, [nodeId]);

  useEffect(() => {
    if (!nodeId) {
      return undefined;
    }

    if (isActive && !wasActiveRef.current) {
      requestAnimationFrame(() => {
        setSelectedNode({ id: nodeId, ts: Date.now() });
      });
    }

    if (!isActive && wasActiveRef.current) {
      requestAnimationFrame(() => {
        setSelectedNode(prev => {
          if (prev?.id === nodeIdRef.current) {
            return null;
          }
          return prev;
        });
      });
    }

    wasActiveRef.current = isActive;

    return () => {
      if (wasActiveRef.current && nodeIdRef.current === nodeId) {
        requestAnimationFrame(() => {
          setSelectedNode(prev => {
            if (prev?.id === nodeIdRef.current) {
              return null;
            }
            return prev;
          });
        });
      }
    };
  }, [isActive, nodeId, setSelectedNode]);
}

