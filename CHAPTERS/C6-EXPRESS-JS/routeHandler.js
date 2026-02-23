const express = require('express')
const app = express()

const path = require('path')
const PORT = process.env.PORT || 3500

app.get(/^\/$|\/index(.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/handler', (req, res, next) => {
    console.log('Attempt to load Handler.html');
    next()
}, (req, res) => { 
    res.send('Handler Loaded Done')
})

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
