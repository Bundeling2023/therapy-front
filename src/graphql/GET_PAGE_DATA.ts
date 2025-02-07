import { gql } from "@apollo/client";
import { GeneralInfoFragment } from "./fragments";

export const GET_PAGE_DATA = gql`
  ${GeneralInfoFragment}
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
          specialisations (pagination: { limit: 100 }) {
            data {
              attributes {
                Name
                teamMembers (pagination: { limit: 100 }) {
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
      ...GeneralInfoFragment
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
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
