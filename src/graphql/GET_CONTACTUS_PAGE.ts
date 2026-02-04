import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
  NavigationQueryFragment,
} from "./fragments";

export const GET_CONTACTUS_PAGE = gql`
  ${GeneralInfoFragment}
  ${LocationFragment}
  ${TeamMemberFragment}
  ${NavigationQueryFragment}
  query GET_CONTACTUS_PAGE {
    contactus {
      title
      seo {
        metaTitle
        metaDescription
        canonicalURL
      }
    }
    locations (sort: "displayPriority") {
      ...LocationFragment
    }
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    generalinfo {
      ...GeneralInfoFragment
    }
    ...NavigationQueryFragment
  }
`;
