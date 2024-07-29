// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     const serverTimestamp = Date.now();
//     res.json({
//         message: 'Latency test',
//         serverTimestamp: serverTimestamp,
//         serverProcessingTime: serverTimestamp - req.startTimestamp 
//     });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const serverTimestamp = Date.now();
    const serverProcessingTime = serverTimestamp - req.startTimestamp;
    console.log(`Request startTimestamp: ${req.startTimestamp}`);
    console.log(`Server Processing Time: ${serverProcessingTime} ms`);
    res.json({
        message: 'Latency test',
        serverTimestamp: serverTimestamp,
        serverProcessingTime: serverProcessingTime
    });
});

module.exports = router;
