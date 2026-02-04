import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
  NavigationQueryFragment,
} from "./fragments";

export const GET_LOCATIONS_DATA = gql`
  ${GeneralInfoFragment}
  ${LocationFragment}
  ${TeamMemberFragment}
  ${NavigationQueryFragment}
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
    locations (sort: "displayPriority") {
      ...LocationFragment
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    ...NavigationQueryFragment
  }
`;
