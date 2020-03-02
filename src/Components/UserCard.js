import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import PropTypes from "prop-types"
const Card = styled.div`
  ${props => props.theme.whiteBox};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;
const ELink= styled(Link)`
    color:inherit;
    margin-bottom:10px;
`;
const UserCard = ({id, userName, isFollowing, url, isSelf }) => (
  <Card>
    <EAvatar url={url} size={"md"} />
    <ELink to={`/${userName}`}>
      <FatText text={userName}></FatText>
    </ELink>
    {!isSelf&&<FollowButton  id={id} isFollowing={isFollowing}/>}
  </Card>
);
UserCard.propTypes = {
  id:PropTypes.string.isRequired
  
}
export default UserCard;
