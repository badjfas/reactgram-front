import {gql} from "apollo-boost";

export const  SEARCH =gql`
query search($term:String!){
    searchPost(term:$term){
       files{
           Url
       }
       likeCount
    },
    saerchUser(term:$term){
        id
        avatar
        userName
        isFollowing
        isSelf
    }
}
`;
