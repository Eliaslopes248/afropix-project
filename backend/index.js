const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React "dist" folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle all routes by serving React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend connected on http://localhost:${PORT}`);
});
