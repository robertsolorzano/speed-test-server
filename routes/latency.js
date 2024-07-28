const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const timestamp = Date.now();
  res.json({ message: 'Latency test', timestamp });
});

module.exports = router;


