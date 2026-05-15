import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  LocationFragment,
} from "./fragments";

export const GET_LOCATIONS_DATA = gql`
  ${GeneralInfoFragment}
  ${LocationFragment}
  query GET_LOCATIONS_DATA {
    locatie {
      title
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
    generalinfo {
      ...GeneralInfoFragment
    }
    locations (sort: "displayPriority", pagination: { limit: 100 }) {
      ...LocationFragment
    }
    teams(sort: "displayPriority", pagination: { limit: 100 }) {
      name
      url
    }
  }
`;
