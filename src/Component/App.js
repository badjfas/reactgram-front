import React from 'react';
import {gql} from "apollo-boost";
import {ThemeProvider} from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import Router from './Router';
import {useQuery} from 'react-apollo-hooks';

const QUERY = gql`
  {
    isLogin @client
  }
  `;

export default () => {

  const { data : {isLogin} } = useQuery(QUERY);

  return (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles/>
      <Router isLogin={isLogin}/>
    </>
  </ThemeProvider>
  )};