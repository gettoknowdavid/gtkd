import { gql } from 'graphql-request';

export const ResumeQuery = gql`
  query ResumeQuery {
    resumesConnection {
      edges {
        node {
          fullName
          contact {
            raw
          }
          mainSkills {
            raw
          }
          jobTitle
          summary
          experiences {
            id
            title
            location
            startDate
            endDate
            jobTitle
            summary
            bullets {
              raw
            }
          }
          educations {
            id
            school
            city
            country
            degree
            field
            completionDate
          }
          professionalSkills {
            raw
          }
          volunteerExperiences {
            id
            title
            location
            startDate
            endDate
            jobTitle
            summary
            bullets {
              raw
            }
          }
          languages {
            raw
          }
        }
      }
    }
    asset(where: { id: "clb17aom004n80bl65bs2msh4" }) {
      fileName
      url
    }
  }
`;
