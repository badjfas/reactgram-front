import React from "react";
import styled from "styled-components";
import { HeartFill, CommentFill } from "./Icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Overlay = styled.div`
    background-color:rgba(0,0,0,0.6);
    width:100%;
    height:100%;
    justify-content:center;
    display:flex;
    align-items:center;
    opacity:0;
    transition:opacity 0.3s linear;
    svg{
        fill:white;
    }
`;

const Container = styled.div`
    background-image:url(${props=>props.bg});
    background-size:cover;
    cursor:pointer;
    &:hover{
        ${Overlay}{
            opacity:1;
        }
    }
`;

const Number = styled.div`
    color:white;
    display:flex;
    align-items:center;
    &:first-child{
        margin-right:20px;
    }
`;

const NumberText = styled.span`
    margin-left:10px;
    font-size:16px;
`;

const SquarePost = ({id,likeCount,commentCount,file,onClick,postid,username}) =>  (
    <Container bg={file.Url} key={id} onClick={onClick}>
      <Overlay>
        <Number>
            <HeartFill/>
          <NumberText>{likeCount}</NumberText>
        </Number>
        <Number>
            <CommentFill/>
          <NumberText>{commentCount}</NumberText>
        </Number>
      </Overlay>
    </Container>
);


SquarePost.propTypes = {

  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired
};

export default SquarePost;