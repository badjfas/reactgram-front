import React from "react";
import FatText from "../../Components/FatText";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost"
const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const Section = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,160px);
    grid-template-rows:160px;
    gird-auto-rows:160px;
    margin-bottom:55px;
`;

const ESection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  gird-auto-rows: 200px;
`;


 const SearchPresenter =  ({ searchTerm, loading, data }) => {
    if (searchTerm === undefined) {
        return (
          <Wrapper>
            <FatText text="Search for something" />
          </Wrapper>
        );
      } else if (loading === true) {
        return (
          <Wrapper>
            <Loader />
          </Wrapper>
        );
      } else if (data && data.saerchUser && data.searchPost) {
        console.log( data.saerchUser);
        console.log( data.searchPost);

        return (
          <Wrapper>
            <Section>
              {data.saerchUser.length === 0 ? (
                <FatText text="No Users Found" />
              ) : (
                data.saerchUser.map(user => (
                  <UserCard
                    key={user.id}
                    userName={user.userName}
                    isFollowing={user.isFollowing}
                    url={user.avatar}
                    isSelf={user.isSelf}
                    id={user.id}
                  />
                ))
              )}
            </Section>
            <ESection>
              {data.searchPost.length === 0 ? (
                <FatText text="No Posts Found" />
              ) : (
                data.searchPost.map(post => <SquarePost key ={post.id} likeCount={post.likeCount} commentCount={post.commentCount} file={post.files[0]}/>)
              )}
            </ESection>
          </Wrapper>
        );
      }
    };
    
    export default SearchPresenter;
