import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
} from "./fragments";

export const GET_CONTACTUS_PAGE = gql`
  ${GeneralInfoFragment}
  ${LocationFragment}
  ${TeamMemberFragment}
  query GET_CONTACTUS_PAGE {
    contactus {
      title
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
    locations (sort: "displayPriority") {
      ...LocationFragment
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    generalinfo {
      ...GeneralInfoFragment
    }
    header: renderNavigation(
      navigationIdOrSlug: "header"
      type: TREE
      menuOnly: false
    ) {
      title
      path
      related {
        ... on Page {
          url
          publishedAt
        }
        ... on Teampage {
          url
          publishedAt
        }
        ... on Locatie {
          url
          publishedAt
        }
      }
      items {
        title
        path
        related {
          ... on Page {
            url
            publishedAt
          }
          ... on Teampage {
            url
            publishedAt
          }
          ... on Locatie {
            url
            publishedAt
          }
        }
        items {
          title
          path
          related {
            ... on Page {
              url
              publishedAt
            }
          }
        }
      }
    }
    footer: renderNavigation(
      navigationIdOrSlug: "footer"
      type: TREE
      menuOnly: false
    ) {
      title
      path
      related {
        ... on Page {
          url
          publishedAt
        }
        ... on Teampage {
          url
          publishedAt
        }
        ... on Locatie {
          url
          publishedAt
        }
      }
      items {
        title
        path
        related {
          ... on Page {
            url
            publishedAt
          }
          ... on Teampage {
            url
            publishedAt
          }
          ... on Locatie {
            url
            publishedAt
          }
        }
      }
    }
  }
`;
