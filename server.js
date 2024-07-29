const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to set startTimestamp
app.use((req, res, next) => {
    req.startTimestamp = Date.now();
    next();
});

const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
