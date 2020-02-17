//libs
import React from 'react';
import {gql} from "apollo-boost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, {ThemeProvider} from 'styled-components';
import {useQuery} from 'react-apollo-hooks';
import {HashRouter as Router} from "react-router-dom";
//files
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import Footer from './Footer';
import Header from './Header';

const Wrapper =styled.div`
  margin: 30px auto 0;
  max-width: ${props=>props.theme.maxWidth};
  width: 100%;
`;

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
   <Router>
    <Header/>
      <Wrapper>
        <Router isLogin={isLogin}/>
        <Footer/>
      </Wrapper>
       </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
    </>
  </ThemeProvider>
  
  )};