import { gql } from "@apollo/client";
import { GeneralInfoFragment } from "./fragments";

export const GET_LOCATIONS_DATA = gql`
  ${GeneralInfoFragment}
  query GET_LOCATIONS_DATA {
    locatie {
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
    locations (sort: "displayPriority") {
      data {
        attributes {
          title
          coordinates
          url
          phone
          email
          address
          displayPriority
          onlyForKids
          workingHours {
           	monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
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
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          url
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
          }
          ... on Teampage {
            url
          }
          ... on Locatie {
            url
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
            }
          ... on Teampage {
              url
            }
          ... on Locatie {
              url
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
          }
          ... on Teampage {
            url
          }
          ... on Locatie {
            url
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
            }
          ... on Teampage {
              url
            }
          ... on Locatie {
              url
            }
          }
        }
      }
    }
  }
`;
