/**
* Example:
*
* -----
* Query
* -----
* query IsAuthenticated {
    authenticated
  }
*/

import { GraphQLBoolean } from 'graphql';

import { isAuthenticated } from '../resolvers';

export default {
  type: GraphQLBoolean,
  resolve: isAuthenticated,
};
