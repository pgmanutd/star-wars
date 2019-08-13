import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import getLogger from './shared/utils/getLogger';

import securityMiddleware from './middlewares/securityMiddleware';

import authentication from './features/authentication';
import planets from './features/planets';

import schema from './schema';

const logger = getLogger(module);
const app = express();

securityMiddleware(app);

app.use(
  '/graphql',
  cors(),
  graphqlHTTP(req => {
    const startTime = Date.now();

    const user = authentication.domainServices.getUserUsingAuthorizationHeader(
      req.get('authorization'),
    );

    return {
      schema,
      pretty: __DEV__,
      graphiql: __DEV__,
      extensions() {
        if (!__DEV__) {
          return undefined;
        }

        return { runTime: Date.now() - startTime };
      },
      context: {
        req,
        user,
        repositories: {
          authentication: authentication.repository,
          planets: planets.repository,
        },
      },
      customFormatErrorFn(error) {
        logger.error('Error from graphql route =====> ', error);

        if (__DEV__) {
          return error;
        }

        return {
          ...error,
          extensions: {
            ...error.extensions,
            exceptions: undefined,
          },
        };
      },
    };
  }),
);

app.listen(process.env.EXPRESS_GRAPHQL_PORT || 4000, () =>
  logger.info('Now browse to localhost:4000/graphql'),
);
