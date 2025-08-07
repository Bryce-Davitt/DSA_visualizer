import React from 'react';

function LinearSearchVisualizer() {
  return (
    <div>
      <h3>Linear Search Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`}</pre>
    </div>
  );
}

export default LinearSearchVisualizer; 