import { gql } from "@apollo/client";

export const GET_SHARED_DATA = gql`
# Write your query or mutation here
query GET_SHARED_DATA {
  	home {
     data {
      attributes {
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
`;
