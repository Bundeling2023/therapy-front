import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
} from "./fragments";

export const GET_HOMEPAGE_DATA = gql`
  ${GeneralInfoFragment}
  ${TeamMemberFragment}
  ${LocationFragment}
  query GET_HOMEPAGE_DATA {
    home {
      mainBanner {
        title
        description
        link
        buttonText
        img {
          url
        }
      }
      services {
        title
        link {
          url
        }
        img {
          url
        }
      }
      modalVideo
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    locations (sort: "displayPriority") {
      ...LocationFragment
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

