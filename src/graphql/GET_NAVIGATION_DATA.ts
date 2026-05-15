import { gql } from "@apollo/client";
import { NavigationQueryFragment } from "./fragments";

export const GET_NAVIGATION_DATA = gql`
  ${NavigationQueryFragment}
  query GET_NAVIGATION_DATA {
    ...NavigationQueryFragment
  }
`;
