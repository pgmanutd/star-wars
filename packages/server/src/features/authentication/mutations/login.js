/**
* Example:
*
* -----
* Mutation
* -----
* mutation Login($username: String!, $password: String!) {
      login(
      username: $username
      password: $password
    ) {
      token
      user {
        name
        height
        mass
        gender
      }
    }
  }
*
* ---------------
* Query Variables
* ---------------
  {
    "username": "Luke Skywalker",
    "password": "19BBY"
  }
*/

import { GraphQLNonNull, GraphQLString } from 'graphql';

import { login } from '../resolvers';

import { AuthenticatedUserDetails } from '../types';

export default {
  type: AuthenticatedUserDetails,
  args: {
    username: {
      name: 'username',
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      name: 'password',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: login,
};
