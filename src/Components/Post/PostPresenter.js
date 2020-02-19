import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartEmpty, HeartFill, Comment } from "../Icons";
import TextareaAutosize from 'react-autosize-textarea';

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const PostHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 15px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
    position:relative;    
    padding-top:100%;
`;

const File = styled.img`
  max-width: 100%;
  width:100%;
  height:100%;
  opacity:${props=>(props.showing?1: 0)};
  position:absolute;
  top:0;
  background-image:ulr(${props=>props.src})
  background-size:cover;
  background-position:center;
  transition:opacity .5s linear;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;
const Timestamp = styled.span`
  font-weight: 300;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin-top: 10px;
  font-size: 12px;
  margin: 10px 0x;
  margin-bottom: 10px;

  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border:none;
  width:100%;
  resize:none;
  font-size:14px;
  font-color:${props=>props.theme.lightGreyColor}
  &:focus{
      outline:none;
  };

`;
export default ({
  user: { userName, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem
}) => (
  <Post>
    <PostHeader>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={userName} />
        <Location>{location}</Location>
      </UserColumn>
    </PostHeader>
    <Files>
      {files &&
        files.map((file,index) => <File key={file.id} id={file.id} src={file.Url}  showing={index===currentItem}/>)}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <HeartFill /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText
        text={likeCount === 1 ? "1 좋아요" : `${likeCount}좋아요`}
      ></FatText>
      <Timestamp>{createdAt}</Timestamp>
      <Textarea  placeholder={"댓글"}{...newComment}/>
    </Meta>
  </Post>
);
