import React from "react";
import styled from "styled-components";

const Container =styled.input`
    border:0;
    border-radius:${props=>props.theme.borderRadius};
    background-color:${props=>props.theme.bgColor};
    border:${props=>props.theme.boxBorder};
    height:40px;
    padding: 9px 0px 7px 8px;
`;

const Input = ({placeholder}) => <Container/>;

Input.propTypes = {
    
}

export default Input;