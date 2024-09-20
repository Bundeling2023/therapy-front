import { gql } from "@apollo/client";
import { GeneralInfoFragment } from "./fragments";

export const GET_TEAMPAGE_DATA = gql`
  ${GeneralInfoFragment}
  query GET_TEAMPAGE_DATA {
    teampage {
      data {
        attributes {
          title
          seo {
            metaTitle
            metaDescription
            canonicalURL
          }
        }
      }
    }
    generalinfo {
      ...GeneralInfoFragment
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          email
          phone
          desc
          url
          bigRegistrationNumber
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    locations (sort: "displayPriority") {
      data {
        attributes {
          url
          title
          displayPriority
        }
      }
    }
    header: renderNavigation(
      navigationIdOrSlug: "header"
      type: TREE
      menuOnly: false
    ) {
      title
      path
      related {
        attributes {
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
      items {
        title
        path
        related {
        attributes {
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
        items {
          title
          path
          related {
          attributes {
            ... on Page {
                url
               publishedAt
              }
            }
          }
          items {
            title
            path
            related {
            attributes {
              ... on Page {
                  url
                  publishedAt
                }
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
        attributes {
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
      items {
        title
        path
        related {
        attributes {
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
`;
