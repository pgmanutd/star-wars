import { gql } from 'apollo-boost';

export const CHECK_USER_AUTHENTICATION = gql`
  query IsAuthenticated {
    authenticated
  }
`;
