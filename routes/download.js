const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    const file = path.join(__dirname, '../public/testfile.bin');
    const fileSize = fs.statSync(file).size;

    res.setHeader('Content-Length', fileSize);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=testfile.bin');

    const startTime = Date.now();

    res.download(file, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
        } else {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; 
            console.log(`File downloaded in ${duration} seconds.`);
        }
    });
});

module.exports = router;
