const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsP = require('fs').promises
const path = require('path')

const logEvents = async (msg, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsP.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsP.appendFile(path.join(__dirname, '..', 'logs', logName), logItem)
    } catch (error) {
        console.error(error)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin || 'Direct'}\t${req.url}`, 'reqLog.txt')
    console.log(`${req.method} ${req.path}`);
    next()
}

const errorLogger = (name, msg) => {
    logEvents(`${name}:\t${msg}`, 'errorLog.txt')
    console.log(`${req.method} ${req.path}`);
}

module.exports = { logger, errorLogger, logEvents }