import React, { useState, useRef } from 'react';

const INITIAL_ARRAY = [7, 2, 5, 3, 9];

function SelectionSortVisualizer() {
  const [array, setArray] = useState([...INITIAL_ARRAY]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(1);
  const [minIdx, setMinIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const [phase, setPhase] = useState('findMin'); // 'findMin' or 'swap'

  const step = () => {
    let newArray = [...array];
    let newI = i;
    let newJ = j;
    let newMinIdx = minIdx;
    let newPhase = phase;

    if (newI >= newArray.length - 1) {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
      return;
    }

    if (newPhase === 'findMin') {
      if (newJ < newArray.length) {
        if (newArray[newJ] < newArray[newMinIdx]) {
          newMinIdx = newJ;
        }
        newJ++;
      } else {
        newPhase = 'swap';
      }
    }
    if (newPhase === 'swap') {
      if (newMinIdx !== newI) {
        [newArray[newI], newArray[newMinIdx]] = [newArray[newMinIdx], newArray[newI]];
      }
      newI++;
      newJ = newI + 1;
      newMinIdx = newI;
      newPhase = 'findMin';
    }

    setArray(newArray);
    setI(newI);
    setJ(newJ);
    setMinIdx(newMinIdx);
    setPhase(newPhase);
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
    setJ(1);
    setMinIdx(0);
    setPhase('findMin');
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h3>Selection Sort Visualization</h3>
      <div style={{ display: 'flex', gap: 8, margin: '24px 0' }}>
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{
              width: 40,
              height: 40,
              lineHeight: '40px',
              background:
                idx === i
                  ? '#ff7043' // current index
                  : idx === minIdx
                  ? '#ffd54f' // current min
                  : idx === j
                  ? '#81c784' // current j
                  : '#90caf9',
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
      <pre style={{ background: '#f4f4f4', padding: 12, borderRadius: 4 }}>{`function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`}</pre>
    </div>
  );
}

export default SelectionSortVisualizer; 