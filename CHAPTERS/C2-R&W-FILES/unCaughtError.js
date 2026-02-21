// unCaughtError.js

const fs = require('fs')

fs.readFile('./txt-files/text3.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data);
})

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})