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

// Navigation structure
export const NavigationItemFragment = gql`
  fragment NavigationItemFragment on NavigationItem {
    title
    path
    related {
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
`;
