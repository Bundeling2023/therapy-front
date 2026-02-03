import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
  PageFragment,
  SeoFragment,
  NavigationItemFragment,
} from "./fragments";

/**
 * Shared navigation query fragment for header and footer
 * Used across all pages
 */
export const NAVIGATION_QUERY = gql`
  fragment NavigationQuery on Query {
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

/**
 * Shared basic data query for all pages
 * Includes navigation, general info, teams, and locations
 */
export const SHARED_PAGE_DATA = gql`
  ${GeneralInfoFragment}
  fragment SharedPageData on Query {
    generalinfo {
      ...GeneralInfoFragment
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      data {
        ...TeamMemberFragment
      }
    }
    locations (sort: "displayPriority") {
      data {
        ...LocationFragment
      }
    }
  }
`;
