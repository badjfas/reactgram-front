import React from "react";
import {withRouter} from "react-router-dom"
import styled from "styled-components";
const Wrapper = styled.div`
    height:50vh;
`;

export default withRouter(({location:{search}}) => {
   const searchTerm = search.split("=")[1];
   if(searchTerm === undefined){
       console.log("no Search");}
    return (
    <Wrapper>
        {searchTerm===undefined }
    </Wrapper>);
});
