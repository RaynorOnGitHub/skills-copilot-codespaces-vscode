// Create web server
// Web server will listen on port 3000

// Import the express module
const express = require('express');
const path = require('path');
const cors = require('cors');
const comments = require('./comments');

// Create an instance of express
const app = express();

// Configure the port that express is listening on
const port = process.env.PORT || 3000;

// Configure express to serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Handle GET requests to the /comments endpoint
app.get('/comments', (req, res) => {
    // Return all comments
    res.json(comments);
});

// Handle POST requests to the /comments endpoint
app.post('/comments', (req, res) => {
    // Retrieve the name and comment from the request body
    const { name, comment } = req.body;

    // Create a new comment object with the name and comment
    const newComment = {
        name,
        comment
    };

    // Add the new comment to the comments array
    comments.push(newComment);

    // Return the new comment
    res.json(newComment);
});

// Start the web server
app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});