import { gql } from "@apollo/client";

export const GET_HOMEPAGE_DATA = gql`
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
    teams (sort: "displayPriority") {
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
      data {
        attributes {
          contactsInfo {
            email
            phone
            mainAddress
          }
          privacyPolicyPage {
            data {
              attributes {
                url
              }
            }
          }
          termsAndConditionsPage {
            data {
              attributes {
                url
              }
            }
          }
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
`

export const GET_TEAMPAGE_DATA = gql`
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
      data {
        attributes {
          contactsInfo {
            email
            phone
            mainAddress
          }
          privacyPolicyPage {
            data {
              attributes {
                url
              }
            }
          }
          termsAndConditionsPage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    teams (sort: "displayPriority") {
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
`

export const GET_LOCATIONS_DATA = gql`
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
      data {
        attributes {
          contactsInfo {
            email
            phone
            mainAddress
          }
          privacyPolicyPage {
            data {
              attributes {
                url
              }
            }
          }
          termsAndConditionsPage {
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
          title
          coordinates
          url
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
    teams (sort: "displayPriority") {
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
`

export const GET_PAGES = gql`
  query GET_PAGES  {
    pages: pages(pagination: { start: 0, limit: 100 }) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }
`

export const GET_PAGE_DATA = gql`
  query GET_PAGE_DATA ($slugUrl: String!) {
    pages: pages(filters: { url: { eq: $slugUrl }})  {
      data {
        id
        attributes {
          url
          title
          pageWithBlocks {
            blocks {
              title
              description
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
          }
          simplePage {
            description
            img {
              data {
                attributes {
                  url
                }
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
    }
    generalinfo {
      data {
        attributes {
          contactsInfo {
            email
            phone
            mainAddress
          }
          privacyPolicyPage {
            data {
              attributes {
                url
              }
            }
          }
          termsAndConditionsPage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    teams (sort: "displayPriority") {
      data {
        attributes {
          name
          url
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
`

export const GET_CONTACTUS_PAGE = gql`
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
        }
      }
    }
    teams (sort: "displayPriority") {
      data {
        attributes {
          name
          url
        }
      }
    }
    generalinfo {
      data {
        attributes {
          contactsInfo {
            email
            phone
            mainAddress
          }
          privacyPolicyPage {
            data {
              attributes {
                url
              }
            }
          }
          termsAndConditionsPage {
            data {
              attributes {
                url
              }
            }
          }
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
`