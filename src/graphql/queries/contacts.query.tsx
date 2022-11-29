import { gql } from 'graphql-request';

export const ContactsQuery = gql`
  query ContactsQuery {
    contactsConnection {
      edges {
        node {
          id
          title
          link
        }
      }
    }
  }
`;
