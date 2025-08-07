import React, { useState, useRef } from 'react';

const INITIAL_ARRAY = [5, 3, 8, 4, 2];

function BubbleSortVisualizer() {
  const [array, setArray] = useState([...INITIAL_ARRAY]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  const step = () => {
    let newArray = [...array];
    let newI = i;
    let newJ = j;
    if (newI < newArray.length - 1) {
      if (newJ < newArray.length - newI - 1) {
        if (newArray[newJ] > newArray[newJ + 1]) {
          [newArray[newJ], newArray[newJ + 1]] = [newArray[newJ + 1], newArray[newJ]];
        }
        newJ++;
      } else {
        newJ = 0;
        newI++;
      }
      setArray(newArray);
      setI(newI);
      setJ(newJ);
    } else {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
    }
  };

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    intervalRef.current = setInterval(step, 600);
  };

  const handlePause = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setArray([...INITIAL_ARRAY]);
    setI(0);
    setJ(0);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h3>Bubble Sort Visualization</h3>
      <div style={{ display: 'flex', gap: 8, margin: '24px 0' }}>
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{
              width: 40,
              height: 40,
              lineHeight: '40px',
              background: idx === j || idx === j + 1 ? '#ffeb3b' : '#90caf9',
              color: '#222',
              textAlign: 'center',
              borderRadius: 4,
              border: '2px solid #1976d2',
              fontWeight: 'bold',
              fontSize: 20,
              transition: 'background 0.2s',
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div style={{ margin: '16px 0' }}>
        <button onClick={step} disabled={isPlaying}>Step</button>
        <button onClick={handlePlay} disabled={isPlaying}>Play</button>
        <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <pre style={{ background: '#f4f4f4', padding: 12, borderRadius: 4 }}>{`function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`}</pre>
    </div>
  );
}

export default BubbleSortVisualizer; 