const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.startTimestamp = Date.now();
    next();
});

// Use routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
