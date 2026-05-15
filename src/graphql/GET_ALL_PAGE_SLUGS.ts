import { gql } from "@apollo/client";

export const GET_ALL_PAGE_SLUGS = gql`
  query GET_ALL_PAGE_SLUGS {
    pages(pagination: { limit: 1000 }) {
      url
    }
  }
`;
