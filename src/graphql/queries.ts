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
            link
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
          teams {
            data {
              attributes {
                name
                email
                phone
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
          contactsInfo {
            email
            phone
            mainAddress
          }
        }
      }
    }
    locations {
      data {
        attributes {
          coordinates
          url
          phone
          email
          address
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
            ... on Team {
                url
              }
            ... on Teampage {
                url
              }
            ... on Location {
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
        }
      }
    }
    teams {
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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

export const GET_LOCATIES_DATA = gql`
  query GET_LOCATIES_DATA {
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
        }
      }
    }
    locations {
      data {
        attributes {
          coordinates
          url
          phone
          email
          address
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
            parrentPage {
              data {
                attributes {
                  title
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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

export const GET_SIDEMENU_PAGES = gql`
  query GET_SIDEMENU_PAGES ($slugUrl: String!) {
    pages: pages(filters: {  simplePage: { parrentPage: { url: { eq: $slugUrl }}}})  {
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
            parrentPage {
              data {
                attributes {
                  title
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
    locations {
      data {
        attributes {
          address
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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
          ... on Team {
            url
          }
          ... on Teampage {
            url
          }
          ... on Location {
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
          ... on Team {
              url
            }
          ... on Teampage {
              url
            }
          ... on Location {
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