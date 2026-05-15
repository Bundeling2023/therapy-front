import { gql } from "@apollo/client";

export const GET_HOMEPAGE_DATA = gql`
  query GET_HOMEPAGE_DATA {
    home {
      mainBanner {
        title
        description
        link
        buttonText
        img {
          url
        }
      }
      services {
        title
        link {
          url
        }
        img {
          url
        }
      }
      modalVideo
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
    teams(sort: "displayPriority", pagination: { limit: 100 }) {
      name
      email
      phone
      url
      img {
        url
      }
    }
    locations(sort: "displayPriority", pagination: { limit: 100 }) {
      title
      coordinates
      url
      phone
      email
      address
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
    }
    generalinfo {
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
  }
`;

