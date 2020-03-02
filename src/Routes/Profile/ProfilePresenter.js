import React from "react";
import {Helmet} from "react-helmet";
import  styled from "styled-components";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

export default  ({data,loading,logUserOut}) => {
if(loading) {
    return <Wrapper><Loader /></Wrapper>;
 }else if(!loading && data && data.seeProfile){
     const {seeProfile:{
       id,
         avatar,
         userName,
         fullName,
         isFollowing,
         isSelf,
         bio,
         followingCount,
         followersCount,
         postsCount,
         posts
     }} = data;
     return (
       <Wrapper>
       <Helmet>
         <title>{userName} | Reactgram</title>
       </Helmet>
         <Header>
           <HeaderColumn>
             <Avatar size="lg" url={avatar} />
           </HeaderColumn>
           <HeaderColumn>
             <span>
             <Username>{userName}</Username>
             {isSelf?<Button onClick={logUserOut} text="로그아웃"/>:  <FollowButton id={id} isFollowing={isFollowing}/>}
             </span>
             <Counts>
               <Count>
                 <FatText text={postsCount} /> 게시물
               </Count>
               <Count>
                 <FatText text={followingCount} /> 팔로잉
               </Count>
               <Count>
                 <FatText text={followersCount} /> 팔로워
               </Count>
             </Counts>
             <FullName text={fullName} />
             <Bio>{bio}</Bio>
           </HeaderColumn>
         </Header>
         <Posts>
            {posts&&posts.map((post => <SquarePost key ={post.id} likeCount={post.likeCount} commentCount={post.commentCount} file={post.files[0]}/>))}
         </Posts>
       </Wrapper>
     );
 }
 return null;
}
