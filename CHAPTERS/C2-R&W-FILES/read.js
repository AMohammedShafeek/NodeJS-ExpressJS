const fs = require('fs')
const path = require('path')

fs.readFile('./txt-files/text1.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data);
})

fs.readFile('./txt-files/text1.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data.toString());
})

fs.readFile('./txt-files/text2.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data);
})

fs.readFile(path.join(__dirname, 'txt-files', 'text2.txt'), 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log("Read Using Path:", data);
})