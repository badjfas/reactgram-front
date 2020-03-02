import React from "react";
import FatText from "../../Components/FatText";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const Section = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:160px;
    gird-auto-rows:160px;
    margin-bottom:55px;
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
            <Section>
              {data.searchPost.length === 0 ? (
                <FatText text="No Posts Found" />
              ) : (
                data.searchPost.map(post => null)
              )}
            </Section>
          </Wrapper>
        );
      }
    };
    
    export default SearchPresenter;
