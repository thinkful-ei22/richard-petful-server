const express = require('express');

const {catQueue} = require('../utils/testQueue');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(catQueue.peek());
});

router.delete('/', (req, res, next) => {
  res.json(catQueue.dequeue());
});

module.exports = router;