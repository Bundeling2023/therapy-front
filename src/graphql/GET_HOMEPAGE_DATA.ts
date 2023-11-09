import { gql } from "@apollo/client";
import { GeneralInfoFragment } from "./fragments";

export const GET_HOMEPAGE_DATA = gql`
  ${GeneralInfoFragment}
  query GET_HOMEPAGE_DATA {
    home {
      data {
        attributes {
          mainBanner {
            title
            description
            link
            buttonText
            img {
              data {
                attributes {
                  url
                }
              }
            }
          }
          services {
            title
            link {
              data {
                attributes {
                  url
                }
              }
            }
            img {
              data {
                attributes {
                  url
                }
              }
            }
          }
          modalVideo
          seo {
            metaTitle
            metaDescription
            canonicalURL
          }
        }
      }
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          email
          phone
          desc
          url
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
          coordinates
          url
          title
          phone
          email
          address
          displayPriority
          workingHours {
           	monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
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
