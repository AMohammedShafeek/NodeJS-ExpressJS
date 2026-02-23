const http = require('http')

const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 3500

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    switch (req.url) {
        case '/':
            res.statusCode = 200
            let filePath = path.join(__dirname, 'views', 'index.html')
            fs.readFile(filePath, 'utf8', (err, data) => {
                res.end(data)
            })
            break
    }
})

server.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
