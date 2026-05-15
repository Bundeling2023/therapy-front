import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
} from "./fragments";

export const GET_TEAMPAGE_DATA = gql`
  ${GeneralInfoFragment}
  ${TeamMemberFragment}
  query GET_TEAMPAGE_DATA {
    teampage {
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
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    locations(sort: "displayPriority", pagination: { limit: 100 }) {
      title
      url
    }
  }
`;
