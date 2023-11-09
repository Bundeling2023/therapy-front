import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query GET_PAGES  {
    pages: pages(pagination: { start: 0, limit: 100 }) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }
`;
