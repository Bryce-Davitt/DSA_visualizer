import React from 'react';

function BinaryTreeVisualizer() {
  return (
    <div>
      <h3>Binary Tree Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`// Binary Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}`}</pre>
    </div>
  );
}

export default BinaryTreeVisualizer; 