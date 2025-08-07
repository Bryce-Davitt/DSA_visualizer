import React from 'react';

function StackVisualizer() {
  return (
    <div>
      <h3>Stack Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`// Stack operations example
const stack = [];
stack.push(1);
stack.push(2);
stack.pop(); // 2
`}</pre>
    </div>
  );
}

export default StackVisualizer; 