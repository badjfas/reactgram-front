import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, Instagram, HeartEmpty, User } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";
const Header = styled.header`
  background-color: white;
  width: 100%;
  border: 0;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    text-align: left;
    margin-right: auto;
  }
  &:last-child {
    text-align: right;
    margin-left: auto;
  }
`;

const SearchInput = styled(Input)`
  text-align: center;
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  width: 80%;
  &::placehorder {
    opacity: 0.8;
    font-weight: 400;
  }
`;

const HeaderLink = styled(Link)`
  margin-left: 3px;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;



export default withRouter(({ history }) => {
  const search = useInput("");
  const { data } = useQuery(ME);
  
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <HeaderLink>
            <Instagram />
          </HeaderLink>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder={"Search"}
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {!(data && data.me) ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={data.me.username}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
