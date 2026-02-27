const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const path = require('path')
const PORT = process.env.PORT || 3500

//Build-in Middleware
//for handle urlencoded data
app.use(express.urlencoded({ extended: false }))

//for handdle json
app.use(express.json())

//for serve static files
app.use('/', express.static(path.join(__dirname, '/public')))

//cross orgin resource sharing
app.use(cors(corsOptions))

app.use('/', require('./routes/root'))
app.use('/employees', require('./routes/api/employees'))

app.get(/.*/, (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
