import * as d3 from 'd3';
import { getRadialPosition } from './radialPosition';

const BASE_RADIUS = 15;

export function processNodeData(jsonData) {
  const allNodes = [];
  const links = [];
  const nodeMap = new Map();

  const articlesCount = jsonData.articles?.length || 0;
  const glossaryCount = jsonData.glossary?.length || 0;
  const totalNodes = articlesCount + glossaryCount;

  if (jsonData.articles) {
    jsonData.articles.forEach((article, arrayIndex) => {
      const position = getRadialPosition(
        arrayIndex,
        totalNodes,
        BASE_RADIUS,
        articlesCount,
        glossaryCount
      );
      const node = {
        ...article,
        type: 'article',
        position,
        x: position[0],
        y: position[1],
        z: position[2],
        vx: 0,
        vy: 0,
        vz: 0,
        fx: null,
        fy: null,
        fz: null,
      };
      allNodes.push(node);
      nodeMap.set(article.id, node);
    });
  }

  if (jsonData.glossary) {
    jsonData.glossary.forEach((keyword, arrayIndex) => {
      const globalIndex = articlesCount + arrayIndex;
      const position = getRadialPosition(
        globalIndex,
        totalNodes,
        BASE_RADIUS,
        articlesCount,
        glossaryCount
      );
      const node = {
        ...keyword,
        type: 'glossary',
        position,
        x: position[0],
        y: position[1],
        z: position[2],
        vx: 0,
        vy: 0,
        vz: 0,
        fx: null,
        fy: null,
        fz: null,
      };
      allNodes.push(node);
      nodeMap.set(keyword.id, node);
    });
  }

  allNodes.forEach((node) => {
    if (node.connections && node.connections.length > 0) {
      node.connections.forEach((targetId) => {
        const target = nodeMap.get(targetId);
        if (target) {
          links.push({
            source: node.id,
            target: targetId,
            sourceNode: node,
            targetNode: target,
          });
        }
      });
    }
  });

  return {
    nodes: allNodes,
    links,
    nodeMap,
  };
}

export function createForceSimulation(nodes, links, options = {}) {
  const {
    chargeStrength = -300,
    linkDistance = 50,
    linkStrength = 0.1,
    centerStrength = 0.1,
  } = options;

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(linkDistance)
        .strength(linkStrength)
    )
    .force('charge', d3.forceManyBody().strength(chargeStrength))
    .force('center', d3.forceCenter(0, 0).strength(centerStrength))
    .force(
      'collision',
      d3.forceCollide().radius((d) => (d.type === 'article' ? 3 : 2))
    );

  return simulation;
}

export function getConnectedNodeIds(nodeId, links) {
  return links
    .filter((link) => link.source === nodeId || link.target === nodeId)
    .map((link) => (link.source === nodeId ? link.target : link.source)  );
}

export function getConnectedLinks(nodeId, links) {
  return links.filter(
    (link) => link.source === nodeId || link.target === nodeId
  );
}

/**
 * Update node positions from simulation
 * @param {Array} nodes - Array of node objects
 */
export function updateNodePositions(nodes) {
  nodes.forEach((node) => {
    if (node.x !== undefined && node.y !== undefined) {
      node.position = [node.x, node.y, node.z || 0];
    }
  });
}

export function transitionNodePosition(node, targetPosition, duration = 1000) {
  const [targetX, targetY, targetZ] = targetPosition;
  const startX = node.x || node.position[0];
  const startY = node.y || node.position[1];
  const startZ = node.z || node.position[2];

  return d3
    .transition()
    .duration(duration)
    .ease(d3.easeCubicInOut)
    .tween('position', function () {
      const interpolateX = d3.interpolateNumber(startX, targetX);
      const interpolateY = d3.interpolateNumber(startY, targetY);
      const interpolateZ = d3.interpolateNumber(startZ, targetZ);
      return function (t) {
        node.x = interpolateX(t);
        node.y = interpolateY(t);
        node.z = interpolateZ(t);
        node.position = [node.x, node.y, node.z];
      };
    });
}

