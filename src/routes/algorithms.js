const express = require('express');
const router = express.Router();

const algorithms = [
  { name: 'Bubble Sort', id: 'bubble-sort' },
  { name: 'Merge Sort', id: 'merge-sort' },
  { name: 'Binary Search', id: 'binary-search' },
  { name: 'Breadth-First Search', id: 'bfs' },
  { name: 'Depth-First Search', id: 'dfs' }
];

router.get('/', (req, res) => {
  res.json(algorithms);
});

module.exports = router; 