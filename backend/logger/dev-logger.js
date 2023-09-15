const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, prettyPrint, errors } = format;

const buildDevLogger = () => {
  const customFormat = printf(({ level, message, stack }) => {
    return `${level} : ${stack || message}`;
  });

  return createLogger({
    format: combine(
      format.colorize(),
      prettyPrint(),
      errors({ stack: true }),
      customFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'logs/error.log', level: 'error' }),
      new transports.File({ filename: 'logs/combined.log' })
    ]
  })
}

module.exports = buildDevLogger;