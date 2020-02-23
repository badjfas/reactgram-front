import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";
import { Link } from "react-router-dom";

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
const UserCard = ({ userName, isFollowing, url, isSelf }) => (
  <Card>
    <EAvatar url={url} size={"md"} />
    <ELink to={`/${userName}`}>
      <FatText text={userName}></FatText>
    </ELink>
    {!isSelf && <Button text={isFollowing ? "언팔로우" : "팔로우"} />}
  </Card>
);

export default UserCard;
