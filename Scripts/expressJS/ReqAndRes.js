// Importing the Express framework
const express = require('express')

// Creating an Express application instance
const app = express()

// Starting the server on port 3000
app.listen(3000)

// Route: GET /
// Sends plain text as response
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Route: GET /
// Sends HTML content as response
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

// Route: GET /
// Sends HTML with explicit HTTP status code
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World</h1>')
})
