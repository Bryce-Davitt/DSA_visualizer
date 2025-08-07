import React from 'react';

function LinkedListVisualizer() {
  return (
    <div>
      <h3>Linked List Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`// Linked List Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}`}</pre>
    </div>
  );
}

export default LinkedListVisualizer; 