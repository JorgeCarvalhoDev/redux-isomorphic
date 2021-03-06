import winston from 'winston';
winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;

module.exports.stream = {
  write: (message) => {  // (message,encoding)
    logger.info(message);
  },
};

/*
  http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
*/
