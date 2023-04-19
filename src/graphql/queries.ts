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
        team {
          name
          email
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
        addressesMap {
          coordinates
          description
        }
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
    items {
      title
      path
    }
  }
  footer: renderNavigation(
    navigationIdOrSlug: "footer"
    type: TREE
    menuOnly: false
  ) {
    title
    path
    items {
      title
      path
    }
  }
}
`