const express = require('express');
const router = express.Router();

const datastructures = [
  { name: 'Array', id: 'array' },
  { name: 'Linked List', id: 'linked-list' },
  { name: 'Stack', id: 'stack' },
  { name: 'Queue', id: 'queue' },
  { name: 'Binary Tree', id: 'binary-tree' },
  { name: 'Graph', id: 'graph' }
];

router.get('/', (req, res) => {
  res.json(datastructures);
});

module.exports = router; 