import React from 'react';

function ArrayVisualizer() {
  return (
    <div>
      <h3>Array Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`// Array operations example
const arr = [1, 2, 3, 4];
arr.push(5); // [1,2,3,4,5]
arr.pop();   // [1,2,3,4]
`}</pre>
    </div>
  );
}

export default ArrayVisualizer; 