//libs
import React from 'react';
import {gql} from "apollo-boost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, {ThemeProvider} from 'styled-components';
//files
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import Router from './Router';
import {useQuery} from 'react-apollo-hooks';
import Footer from './Footer';
const Wrapper =styled.div`
margin: 30px auto 0;
max-width: 935px;
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
     <Wrapper>
    <>
      <GlobalStyles/>
      <Router isLogin={isLogin}/>
    </>
   
      <Footer/>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
    </Wrapper>
    

  </ThemeProvider>
  
  )};