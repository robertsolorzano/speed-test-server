const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let uploadSize = 0;
    const startTime = Date.now();

    req.on('data', chunk => {
        uploadSize += chunk.length;
    });

    req.on('end', () => {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;
        res.json({
            message: `Uploaded ${uploadSize} bytes`,
            size: uploadSize,
            duration: duration,
            timestamp: endTime
        });
    });
});

module.exports = router;