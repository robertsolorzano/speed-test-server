const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let uploadSize = 0;
    const startTime = Date.now();

    req.on('data', chunk => {
        uploadSize += chunk.length;
        const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
        const mbps = (uploadSize * 8) / elapsedTime / (1024 * 1024); // Convert bytes to Mbps

        res.write(JSON.stringify({
            message: `Uploaded ${uploadSize} bytes`,
            size: uploadSize,
            elapsedTime: elapsedTime,
            mbps: mbps.toFixed(2)
        }) + "\n");
    });

    req.on('end', () => {
        res.end();
    });
});

module.exports = router;
