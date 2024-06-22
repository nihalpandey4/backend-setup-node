import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, userId=null, label, timestamp }) => {
    return `${timestamp} [${label}] [userId: ${userId}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'nodeServer' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.File({filename:'./log/error.log', level: 'error'}),
        new transports.File({filename:'./log/info.log', level: 'info'}),
        new transports.File({filename:'./log/debug.log', level: 'debug'})
    ]
});

const info = (message:string,userId:number|null = null ) =>{
    if (userId)
        logger.info(`[userId: ${userId}] message: [${message}]`)
}

const debug = (message:string,userId:number ) =>{
    logger.debug(`[userId: ${userId}] message: [${message}]`)
}

const nodeLogger = {
    info: info,
    error: logger.error,
    debug: debug
}

export default nodeLogger;
