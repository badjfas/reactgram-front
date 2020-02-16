import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_USER= gql`
    mutation createAccount(
    $userName: String!
    $email: String!
    $firstName: String
    $lastName: String
    $bio: String){
        createAccount(
            userName: $userName
            email: $email
            firstName: $firstName
            lastName: $lastName
            bio: $bio)
    }
`;