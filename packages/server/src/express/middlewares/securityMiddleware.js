import helmet from 'helmet';

const securityMiddleware = server => {
  server.disable('x-powered-by');

  server.use(helmet.xssFilter());

  server.use(helmet.frameguard('deny'));

  server.use(helmet.ieNoOpen());

  server.use(helmet.noSniff());
};

export default securityMiddleware;
