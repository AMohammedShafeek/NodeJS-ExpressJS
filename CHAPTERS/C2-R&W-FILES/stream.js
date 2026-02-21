const fs = require('fs')
const rs = fs.createReadStream('./txt-files/large.txt', { encoding: 'utf8' })
const ws = fs.createWriteStream('./txt-files/NewLarge.txt')

rs.on('data', (dataChunk) => {
    ws.write(dataChunk)
})

rs.pipe(ws)