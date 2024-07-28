const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let uploadSize = 0;
    const maxUploadSize = 1024 * 1024 * 100; // 100MB
    const startTime = Date.now();

    req.on('data', chunk => {
        uploadSize += chunk.length;
        const elapsedTime = (Date.now() - startTime) / 1000; 
        const mbps = (uploadSize * 8) / elapsedTime / (1024 * 1024);

        res.write(JSON.stringify({
            message: `Uploaded ${uploadSize} bytes`,
            size: uploadSize,
            mbps: mbps.toFixed(2)
        }) + "\n");

        if (uploadSize >= maxUploadSize) {
            const endTime = Date.now();
            const totalDuration = (endTime - startTime) / 1000; 
            const totalMbps = (uploadSize * 8) / totalDuration / (1024 * 1024);
            res.end(JSON.stringify({
                message: `Uploaded ${uploadSize} bytes`,
                size: uploadSize,
                duration: totalDuration,
                mbps: totalMbps.toFixed(2)
            }));
        }
    });

    req.on('end', () => {
        const endTime = Date.now();
        const totalDuration = (endTime - startTime) / 1000; 
        const totalMbps = (uploadSize * 8) / totalDuration / (1024 * 1024);
        res.end(JSON.stringify({
            message: `Uploaded ${uploadSize} bytes`,
            size: uploadSize,
            duration: totalDuration,
            mbps: totalMbps.toFixed(2)
        }));
    });
});

module.exports = router;
