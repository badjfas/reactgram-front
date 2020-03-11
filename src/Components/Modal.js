import React, { useState, Children } from "react"
import ReactModal from "react-modal";
import styled from "styled-components";
import { HeartFill, CommentFill } from "./Icons";
const Overlay = styled.div`
    background-color:rgba(0,0,0,0.6);
    width:100%;
    height:100%;
    justify-content:center;
    display:flex;
    align-items:center;
    opacity:0;
    transition:opacity 0.3s linear;
    svg{
        fill:white;
    }
`;

const Container = styled.div`
justify-content:center;
display:flex;
align-items:center;
width:100%;
height:100%;
    background-image:url(${props=>props.bg});
    cursor:pointer;
    &:hover{
        ${Overlay}{
            opacity:1;
        }
    }
`;

const Number = styled.div`
    color:white;
    display:flex;
    align-items:center;
    &:first-child{
        margin-right:20px;
    }
`;

const NumberText = styled.span`
    margin-left:10px;
    font-size:16px;
`;

const customStyles =styled.div`
    height:50px;
`;

const ButtonModal = styled.div`
justify-content:center;
display:flex;
align-items:center;
width:100%;
height:100%;
    background-image:url(${props=>props.bg});
    cursor:pointer;
    &:hover{
        ${Overlay}{
            opacity:1;
        }
    }

`;


const File = styled.div`
  width:300px;
  height:300px;
  display:flex;
  background-image:url(${props => props.bg});
  background-size:cover;
  background-position:center;
`;


 const Modal = ({file,id,likeCount,commentCount,files,currentItem}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal = () => {
      
        setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <Container>
        <ButtonModal onClick={openModal} bg={file.Url} key={id}>
          <Overlay>
            <Number>
              <HeartFill />
              <NumberText>{likeCount}</NumberText>
            </Number>
            <Number>
              <CommentFill />
              <NumberText>{commentCount}</NumberText>
            </Number>
          </Overlay>
        </ButtonModal>
        <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
                <File key={file.id} id={file.id} bg={file.Url} />
            </ReactModal>
      </Container>

    );
}

export default Modal;

