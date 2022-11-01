const winston = require('winston')
const WinstonDaily = require('winston-daily-rotate-file')
const path = require('path')

const { combine, timestamp, printf, colorize } = winston.format

const logDir = '../../logs'

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue'
}

winston.addColors(colors)

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'http'
}

const logFormat = combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf((info) => {
        if (info.stack) {
            return `[${info.timestamp}] ${info.level}: ${info.message} \n Error Stack: ${info.stack}`
        }
        return `[${info.timestamp}] ${info.level}: ${info.message}`
    })
)

const consoleOpts = {
    handleExceptions: true,
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    format: combine(
        colorize({ all: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
    )
}

const transports = [
    new winston.transports.Console(consoleOpts),
    new WinstonDaily({
        level: 'debug',
        datePattern: 'YYYY-MM-DD',
        dirname: path.join(__dirname, logDir),
        filename: '%DATE%.log',
        //maxFiles: '15d',
        //zippedArchive: true
    })
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format: logFormat,
    transports
})

module.exports = Logger
