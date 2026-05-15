import { gql } from "@apollo/client";

export const GET_LAYOUT_DATA = gql`
  query GET_LAYOUT_DATA {
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
    teams(sort: "displayPriority", pagination: { limit: 100 }) {
      name
      url
    }
    locations(sort: "displayPriority", pagination: { limit: 100 }) {
      title
      url
    }
  }
`;
