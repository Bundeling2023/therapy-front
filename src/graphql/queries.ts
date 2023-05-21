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
    addresses {
      data {
        attributes {
          coordinates
          description
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
            slug
            title
          }
        }
      }
      items {
        title
        path
        related {
        attributes {
        	... on Page {
              slug
              title
            }
          }
        }
        items {
          title
          path
          related {
          attributes {
            ... on Page {
                slug
                title
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
      items {
        title
        path
      }
    }
  }
`