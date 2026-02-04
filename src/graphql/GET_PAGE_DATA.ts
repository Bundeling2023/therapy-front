import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
  PageFragment,
  NavigationQueryFragment,
} from "./fragments";

export const GET_PAGE_DATA = gql`
  ${GeneralInfoFragment}
  ${LocationFragment}
  ${TeamMemberFragment}
  ${NavigationQueryFragment}
  query GET_PAGE_DATA ($slugUrl: String!) {
    pages(filters: { url: { eq: $slugUrl }}) {
      url
      title
      pageWithBlocks {
        blocks {
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
    generalinfo {
      ...GeneralInfoFragment
    }
    teams(sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    locations(sort: "displayPriority") {
      ...LocationFragment
    }
    ...NavigationQueryFragment
  }
`;
