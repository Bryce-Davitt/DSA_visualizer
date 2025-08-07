import React from 'react';

function QueueVisualizer() {
  return (
    <div>
      <h3>Queue Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`// Queue operations example
const queue = [];
queue.push(1);
queue.push(2);
queue.shift(); // 1
`}</pre>
    </div>
  );
}

export default QueueVisualizer; 