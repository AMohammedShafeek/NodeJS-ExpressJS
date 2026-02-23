const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsP = require('fs').promises
const path = require('path')

const logEvents = async (msg) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`
    console.log(logItem);
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        await fsP.mkdir(path.join(__dirname, 'logs'))
    }
    try {
        await fsP.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
    } catch (error) {
        console.error(error)
    }
}

module.exports = logEvents