import { gql } from "@apollo/client";
import { GeneralInfoFragment } from "./fragments";

export const GET_CONTACTUS_PAGE = gql`
  ${GeneralInfoFragment}
  query GET_CONTACTUS_PAGE {
    contactus {
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
    locations (sort: "displayPriority") {
      data {
        attributes {
          address
          url
          title
          displayPriority
          onlyForKids
        }
      }
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          url
        }
      }
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
