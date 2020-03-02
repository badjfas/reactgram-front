import React from "react";
import {gql} from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";


const GET_USER = gql`
  query seeProfile($userName: String!) {
    seeProfile(userName: $userName) {
      id
      avatar
      userName
      fullName
      isFollowing
      isSelf
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          Url
        }
        likeCount
        commentCount
      }
    }
  }
`;
export const LOG_OUT = gql`
mutation logUserOut{
    logUserOut @client
}
`;

export default withRouter(({match:{params:{username}}}) => {
    const {data,loading} =useQuery(GET_USER,{variables:{userName:username}});
   const logUserOut=useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading}  logUserOut={logUserOut} data={data}/>
});
