import getLogger from './shared/utils/getLogger';

import app from './express/server';

const logger = getLogger(module);

app.listen(process.env.EXPRESS_GRAPHQL_PORT || 4000, () =>
  logger.info('Now browse to localhost:4000/graphql'),
);
