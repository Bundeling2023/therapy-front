import { gql } from "@apollo/client";

// Single type: General Info
export const GeneralInfoFragment = gql`
  fragment GeneralInfoFragment on Generalinfo {
    contactsInfo {
      email
      phone
      mainAddress
    }
    socialLinks {
      facebook
      youtube
      instagram
      tiktok
    }
    privacyPolicyPage {
      url
    }
    termsAndConditionsPage {
      url
    }
  }
`;

// Collection: Team members
export const TeamMemberFragment = gql`
  fragment TeamMemberFragment on Team {
    name
    email
    phone
    desc
    url
    displayPriority
    bigRegistrationNumber
    img {
      url
    }
  }
`;

// Collection: Locations
export const LocationFragment = gql`
  fragment LocationFragment on Location {
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
      url
    }
  }
`;

// Collection: Pages
export const PageFragment = gql`
  fragment PageFragment on Page {
    title
    url
    publishedAt
    seo {
      metaTitle
      metaDescription
      canonicalURL
    }
  }
`;

// SEO metadata
export const SeoFragment = gql`
  fragment SeoFragment on ComponentSharedSeo {
    metaTitle
    metaDescription
    canonicalURL
  }
`;

export const NavigationQueryFragment = gql`
  fragment NavigationItemFragment on NavigationItem {
    id
    title
    path
    related {
      ... on Locatie {
        urlAlias: url
        publishedAt
      }
      ... on Teampage {
        urlAlias: url
        publishedAt
      }
      ... on Page {
        url
        publishedAt
      }
    }
  }

  fragment NavigationQueryFragment on Query {
    header: renderNavigation(navigationIdOrSlug: "header", type: TREE, menuOnly: false) {
      ...NavigationItemFragment
      items {
        ...NavigationItemFragment
        items {
          ...NavigationItemFragment
          items {
            ...NavigationItemFragment
          }
        }
      }
    }
    footer: renderNavigation(navigationIdOrSlug: "footer", type: TREE, menuOnly: false) {
      ...NavigationItemFragment
      items {
        ...NavigationItemFragment
      }
    }
  }
`;
