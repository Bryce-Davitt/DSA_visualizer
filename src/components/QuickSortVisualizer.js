import React from 'react';

function QuickSortVisualizer() {
  return (
    <div>
      <h3>Quick Sort Visualization</h3>
      <div style={{ margin: '16px 0' }}>
        <button>Step</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <pre>{`function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`}</pre>
    </div>
  );
}

export default QuickSortVisualizer; 