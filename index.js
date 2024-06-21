// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint 1: GET /
app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});

// Endpoint 2: GET /greet/:name
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
