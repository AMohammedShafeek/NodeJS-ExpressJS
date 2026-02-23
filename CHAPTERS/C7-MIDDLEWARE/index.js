const express = require('express')
const app = express()
const cors = require('cors')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')

const path = require('path')
const PORT = process.env.PORT || 3500

//Build-in Middleware
//for handle urlencoded data
app.use(express.urlencoded({ extended: false }))

//for handdle json
app.use(express.json())

//for serve static files
app.use(express.static(path.join(__dirname, '/public')))

//custom middleware
//for log
app.use(logger)

//cross orgin resource sharing
app.use(cors())

app.get(/^\/$|\/index(.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/error', (req, res) => {
    throw new Error("Test error triggered!");
});

app.all(/.*/, (req, res)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
