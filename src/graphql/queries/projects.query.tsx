import { gql } from 'graphql-request';

export const ProjectsQuery = gql`
  query Projects {
    projectsConnection(orderBy: id_DESC) {
      edges {
        node {
          id
          title
          description
          frameworks
          links {
            ... on Link {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`;
