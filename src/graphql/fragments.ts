import { gql } from "@apollo/client";

export const GeneralInfoFragment = gql`
  fragment GeneralInfoFragment on GeneralinfoEntityResponse {
    data {
      attributes {
        contactsInfo {
          email
          phone
          mainAddress
        }
        socialLinks {
          facebook
          youtube
          instagram
        }
        privacyPolicyPage {
          data {
            attributes {
              url
            }
          }
        }
        termsAndConditionsPage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
`;
