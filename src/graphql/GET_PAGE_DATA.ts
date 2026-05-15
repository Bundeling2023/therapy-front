import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
  query GET_PAGE_DATA ($slugUrl: String!) {
    pages(filters: { url: { eq: $slugUrl }}) {
      url
      title
      pageWithBlocks {
        blocks(pagination: { limit: 100 }) {
          title
          description
          link {
            url
          }
          img {
            url
          }
        }
      }
      simplePage {
        description
        img {
          url
        }
      }
      specialisations(pagination: { limit: 100 }) {
        Name
        teamMembers(pagination: { limit: 100 }) {
          name
          email
          phone
          desc
          url
          img {
            url
          }
        }
      }
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
  }
`;
