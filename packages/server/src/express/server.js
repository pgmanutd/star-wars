import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

import '../shared/settings/defaults';

import getLogger from '../shared/utils/getLogger';

import authentication from '../features/authentication';
import planets from '../features/planets';

import schema from '../schema';

import securityMiddleware from './middlewares/securityMiddleware';

const logger = getLogger(module);
const app = express();
const router = express.Router();

securityMiddleware(app);

router.use(
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

app.use(bodyParser.json());
app.use('/', router);
app.use('/.netlify/functions/server', router);

export const handler = serverless(app);
export default app;
