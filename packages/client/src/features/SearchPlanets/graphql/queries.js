import { gql } from 'apollo-boost';

export const GET_PLANETS = gql`
  query GetPlanets($planetName: String) {
    planets(planetName: $planetName) {
      name
      population
    }
  }
`;
