const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  let uploadSize = 0;
  req.on('data', chunk => {
    uploadSize += chunk.length;
  });
  req.on('end', () => {
    res.send(`Uploaded ${uploadSize} bytes`);
  });
});

module.exports = router;

