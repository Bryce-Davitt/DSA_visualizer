import React from 'react';

function BFSVisualizer() {
  return (
    <div>
      <h3>Breadth-First Search (BFS) Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
}`}</pre>
    </div>
  );
}

export default BFSVisualizer; 