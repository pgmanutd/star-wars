import { gql } from 'apollo-boost';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        name
        height
        mass
        gender
      }
    }
  }
`;
