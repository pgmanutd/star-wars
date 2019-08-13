/**
* Example:
*
* -----
* Query
* -----
* query GetPlanets($planetName: String) {
    planets(planetName: $planetName) {
      name
      population
    }
  }
*
* ---------------
* Query Variables
* ---------------
  {
    "planetName": "Tatooine"
  }
*/

import { GraphQLString, GraphQLList } from 'graphql';

import { Planet } from '../types';

import { planets } from '../resolvers';

export default {
  type: new GraphQLList(Planet),
  args: {
    planetName: {
      name: 'PlanetName',
      type: GraphQLString,
      description: 'Search planets by their name',
    },
  },
  resolve: planets,
};
