import React from "react";
import Button from "../Button";

export default ({ isFollowing, onClick }) => (
  <Button onClick={onClick} text={isFollowing ? "언팔로우" : "팔로우"} />
);