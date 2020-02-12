import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Container =styled.input`
    border:0;
    border-radius:${props=>props.theme.borderRadius};
    background-color:${props=>props.theme.bgColor};
    border:${props=>props.theme.boxBorder};
    height:40px;
    padding: 9px 0px 7px 8px;
`;

const Input = ({placeholder,required = true,value,onChange}) => 
        <Container placeholder={placeholder} required={required} value={value} onChange={onChange}/>;

Input.propTypes = {
    placeholder:PropTypes.string.isRequired,
    required:PropTypes.bool,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Input;