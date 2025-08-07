import React from 'react';
import BubbleSortVisualizer from './BubbleSortVisualizer';
import SelectionSortVisualizer from './SelectionSortVisualizer';
import InsertionSortVisualizer from './InsertionSortVisualizer';
import MergeSortVisualizer from './MergeSortVisualizer';
import QuickSortVisualizer from './QuickSortVisualizer';
import BinarySearchVisualizer from './BinarySearchVisualizer';
import LinearSearchVisualizer from './LinearSearchVisualizer';
import BFSVisualizer from './BFSVisualizer';
import DFSVisualizer from './DFSVisualizer';
import DijkstraVisualizer from './DijkstraVisualizer';
import ArrayVisualizer from './ArrayVisualizer';
import LinkedListVisualizer from './LinkedListVisualizer';
import StackVisualizer from './StackVisualizer';
import QueueVisualizer from './QueueVisualizer';
import BinaryTreeVisualizer from './BinaryTreeVisualizer';
import HeapVisualizer from './HeapVisualizer';
import GraphVisualizer from './GraphVisualizer';
import HashTableVisualizer from './HashTableVisualizer';

function Visualizer({ selectedType, selectedId }) {
  if (!selectedId) {
    return <div style={{ padding: 32 }}>Select a data structure or algorithm to visualize.</div>;
  }

  let visualizerComponent = null;
  if (selectedType === 'algo') {
    switch (selectedId) {
      case 'bubble-sort':
        visualizerComponent = <BubbleSortVisualizer />; break;
      case 'selection-sort':
        visualizerComponent = <SelectionSortVisualizer />; break;
      case 'insertion-sort':
        visualizerComponent = <InsertionSortVisualizer />; break;
      case 'merge-sort':
        visualizerComponent = <MergeSortVisualizer />; break;
      case 'quick-sort':
        visualizerComponent = <QuickSortVisualizer />; break;
      case 'binary-search':
        visualizerComponent = <BinarySearchVisualizer />; break;
      case 'linear-search':
        visualizerComponent = <LinearSearchVisualizer />; break;
      case 'bfs':
        visualizerComponent = <BFSVisualizer />; break;
      case 'dfs':
        visualizerComponent = <DFSVisualizer />; break;
      case 'dijkstra':
        visualizerComponent = <DijkstraVisualizer />; break;
      default:
        visualizerComponent = <div>Visualization for algorithm "{selectedId}" coming soon!</div>;
    }
  } else if (selectedType === 'ds') {
    switch (selectedId) {
      case 'array':
        visualizerComponent = <ArrayVisualizer />; break;
      case 'linked-list':
        visualizerComponent = <LinkedListVisualizer />; break;
      case 'stack':
        visualizerComponent = <StackVisualizer />; break;
      case 'queue':
        visualizerComponent = <QueueVisualizer />; break;
      case 'binary-tree':
        visualizerComponent = <BinaryTreeVisualizer />; break;
      case 'heap':
        visualizerComponent = <HeapVisualizer />; break;
      case 'graph':
        visualizerComponent = <GraphVisualizer />; break;
      case 'hash-table':
        visualizerComponent = <HashTableVisualizer />; break;
      default:
        visualizerComponent = <div>Visualization for data structure "{selectedId}" coming soon!</div>;
    }
  }

  return (
    <div style={{ padding: 32 }}>
      {visualizerComponent}
    </div>
  );
}

export default Visualizer; 