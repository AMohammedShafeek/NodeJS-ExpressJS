const express = require('express')
const app = express()

const path = require('path')
const PORT = process.env.PORT || 3500

app.get(/^\/$|\/index(.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

const one = (req, res, next) => {
    console.log('one');
    next()
}

const two = (req, res, next) => {
    console.log('two');
    next()
}

const three = (req, res, next) => {
    console.log('three');
    res.send('Finished')
    next()
}

app.get('/chaining', [one, two, three])

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))