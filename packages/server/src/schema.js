import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { composeResolvers } from 'awesome-graphql-utils';

import planets from './features/planets';
import authentication from './features/authentication';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...authentication.queries,
      ...composeResolvers(
        {
          ...planets.queries,
        },
        authentication.resolvers,
      ),
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...authentication.mutations,
    }),
  }),
});
