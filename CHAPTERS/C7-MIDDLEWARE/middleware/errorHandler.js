const { errorLogger } = require('./logEvents')

const errorHandler = (err, req, res, next) => {
    errorLogger(err.name, err.message)
    console.error(err.stack)
    res.status(500).send(err.mesage)
    next()
}

module.exports = errorHandler