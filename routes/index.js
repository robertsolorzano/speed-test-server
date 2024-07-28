const express = require('express');
const router = express.Router();

const downloadRoute = require('./download');
const latencyRoute = require('./latency');
const uploadRoute = require('./upload');

router.use('/download', downloadRoute);
router.use('/latency', latencyRoute);
router.use('/upload', uploadRoute);

module.exports = router;
