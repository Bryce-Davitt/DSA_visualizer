import React from 'react';

function DFSVisualizer() {
  return (
    <div>
      <h3>Depth-First Search (DFS) Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}`}</pre>
    </div>
  );
}

export default DFSVisualizer; 