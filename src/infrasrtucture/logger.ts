import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'white',
    http: 'green',
    debug: 'cyan',
};

winston.addColors(colors);

const level = () => {
    const isDevelopment = process.env.NODE_ENV || 'development';
    return isDevelopment ? 'debug' : 'warn';
};

const format = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DDTHH:mm:ss',
    }),

    winston.format.colorize({ all: true }),

    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
];

const logger = winston.createLogger({
    level: level(),
    levels: levels,
    format: format,
    transports: transports,
    exitOnError: false,
});

export { logger };
