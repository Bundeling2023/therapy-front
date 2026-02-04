import { gql } from "@apollo/client";
import {
  GeneralInfoFragment,
  TeamMemberFragment,
  LocationFragment,
  NavigationQueryFragment,
} from "./fragments";

export const GET_HOMEPAGE_DATA = gql`
  ${GeneralInfoFragment}
  ${TeamMemberFragment}
  ${LocationFragment}
  ${NavigationQueryFragment}
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
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
      ...TeamMemberFragment
    }
    locations (sort: "displayPriority") {
      ...LocationFragment
    }
    generalinfo {
      ...GeneralInfoFragment
    }
    ...NavigationQueryFragment
  }
`;

