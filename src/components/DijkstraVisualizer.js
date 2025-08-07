import React from 'react';

function DijkstraVisualizer() {
  return (
    <div>
      <h3>Dijkstra's Algorithm Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  // ...
}`}</pre>
    </div>
  );
}

export default DijkstraVisualizer; 