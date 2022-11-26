import { gql } from 'graphql-request';

export const BiographiesQuery = gql`
  query Biographies {
    biographiesConnection {
      edges {
        node {
          content {
            raw
          }
        }
      }
    }
  }
`;
