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
        const totalDuration = (endTime - startTime) / 1000; 
        const totalMbps = (uploadSize * 8) / totalDuration / (1024 * 1024); 

        res.json({
            message: `Uploaded ${uploadSize} bytes`,
            size: uploadSize,
            duration: totalDuration,
            mbps: totalMbps.toFixed(2)
        });
    });

    req.on('error', (err) => {
        console.error('Error during upload:', err);
        res.status(500).send('Error during upload');
    });
});

module.exports = router;
