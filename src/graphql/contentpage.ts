import { gql } from "@apollo/client";

export const GET_ALL_SLUGS_FOR_CONTENT_PAGES = gql`
query{
    pages{
      data{
        attributes{   
          slug
        }
      }
    }
  }
`;

export const GET_SINGLE_PAGE = gql`
query($slugUrl: String!)
{
  pages(filters: { slug: { eq: $slugUrl }}){
    data{
      attributes{
        title
        content
      }
    }
  }
}
`