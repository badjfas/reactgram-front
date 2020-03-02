import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import PropTypes from "prop-types";

import FollowButtonPresenter from "./FollowButtonPresenter";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";

const FollowButtonContainer =   ({isFollowing,id}) => {
    const [isFollowingState,setIsFollowing] = useState(isFollowing);
    const [followMutation] = useMutation(FOLLOW,{variables:{id}});
    const [unfollowMutation] = useMutation(UNFOLLOW,{variables:{id}});
   
    const onClick = () => {
        if(isFollowingState === true){
            setIsFollowing(false);
            unfollowMutation();
            console.log(isFollowing);
        }else{
            setIsFollowing(true);
            followMutation();
            console.log(isFollowing);
        }
     };

    return  <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingState}/>

} ;

FollowButtonContainer.propTypes= {
    isFollowing:PropTypes.bool.isRequired,
    id:PropTypes.string.isRequired
}

export default FollowButtonContainer;