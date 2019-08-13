import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

import User from './User';

export default new GraphQLObjectType({
  name: 'AuthenticatedUserDetails',
  description: 'Authenticated user details after login',
  fields: () => ({
    token: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'JWT Token',
    },
    user: {
      type: User,
      description: 'User details',
    },
  }),
});
