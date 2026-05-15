import { gql } from "@apollo/client";
import { GeneralInfoFragment } from "./fragments";

export const GET_CONTACTUS_PAGE = gql`
  ${GeneralInfoFragment}
  query GET_CONTACTUS_PAGE {
    contactus {
      title
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
    locations(sort: "displayPriority", pagination: { limit: 100 }) {
      title
      url
      onlyForKids
    }
    teams(sort: "displayPriority", pagination: { limit: 100 }) {
      name
      url
    }
    generalinfo {
      ...GeneralInfoFragment
    }
  }
`;
