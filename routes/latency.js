const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const serverTimestamp = Date.now();
    res.json({
        message: 'Latency test',
        serverTimestamp: serverTimestamp,
        serverProcessingTime: serverTimestamp - req.startTimestamp 
    });
});

module.exports = router;
