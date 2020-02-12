import { createLogger, format, transports } from 'winston';
import _isEmpty from 'lodash/fp/isEmpty';

import prettify from './prettify';

const getLogger = module =>
  createLogger({
    level: 'debug',
    format: format.combine(
      format.label({
        label: (module.filename || __filename)
          .split('/')
          .slice(-2)
          .join('/'),
      }),
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(({ timestamp, level, label, message, ...rest }) => {
        const baseInfo = `[${timestamp}] [${level}] [${label}]: ${message}`;

        const additionalInfo = _isEmpty(rest)
          ? ''
          : `\n[Additional Details]: ${prettify(rest)}`;

        return baseInfo + additionalInfo;
      }),
    ),
    transports: [new transports.Console()],
  });

export default getLogger;
