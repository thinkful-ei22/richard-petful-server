const express = require('express');

const {dogQueue} = require('../utils/testQueue');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(dogQueue.peek());
});

router.delete('/', (req, res, next) => {
  res.json(dogQueue.dequeue());
});

module.exports = router;