import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  description: 'Star wars user',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User name',
    },
    height: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User height',
    },
    mass: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User weight',
    },
    gender: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User gender',
    },
  }),
});
