const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=testfile.bin');

    const bufferSize = 1024 * 1024; // 1MB
    const totalSize = bufferSize * 100; // 100MB file
    const buffer = Buffer.alloc(bufferSize, 'a'); // Fill buffer with 'a'

    let sentSize = 0;

    const interval = setInterval(() => {
        if (res.writableEnded || sentSize >= totalSize) {
            clearInterval(interval);
            res.end();
            return;
        }
        res.write(buffer);
        sentSize += bufferSize;
    }, 100);

    req.on('close', () => {
        clearInterval(interval);
    });
});

module.exports = router;
