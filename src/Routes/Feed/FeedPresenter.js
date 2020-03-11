import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Post from "../../Components/Post";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const FeedPresenter = ({loading,data}) => {
    console.log(data);
    if(loading===true){
        return <Loader/>
    }else if(data&&data.seeFeed){
        return (
            <Wrapper>
            {data.seeFeed.map(post=>(
                <Post key={post.id}
                id={post.id}
                user={post.user}
                files={post.files}
                likeCount={post.likeCount}
                isLiked={post.isLiked}
                comments={post.comments}
                createdAt={post.createdAt}
                location={post.location}
                caption={post.caption}/>
            ))}
            </Wrapper>
        )
    }
};

export default FeedPresenter;