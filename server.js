const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use((req, res, next) => {
    req.startTimestamp = Date.now();
    next();
});

const routes = require('./routes');

// Use routes
app.use(routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
