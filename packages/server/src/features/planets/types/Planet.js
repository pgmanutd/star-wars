import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Planet',
  description: 'Star wars planet',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Planet name',
    },
    population: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Planet population',
    },
  }),
});
