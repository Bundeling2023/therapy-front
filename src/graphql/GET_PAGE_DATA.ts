import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
  PageFragment,
} from "./fragments";

export const GET_PAGE_DATA = gql`
  ${GeneralInfoFragment}
  ${LocationFragment}
  ${TeamMemberFragment}
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
        ... on Location {
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
          ... on Location {
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
            ... on Location {
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
              ... on Location {
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
        ... on Location {
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
          ... on Location {
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
            ... on Location {
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
              ... on Location {
                url
                publishedAt
              }
            }
          }
        }
      }
    }
  }
`;
