import React,{useState} from "react";
import styled from "styled-components";
import Input from "../Component/Input";
import Button from "../Component/Button";
import useInput from "../Hooks/useInput";
const Wrapper = styled.div`
    height:80vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Box = styled.div`
    ${props=>props.theme.whiteBox};
    border-radius:0px;
    width:100%;
    max-width:350px;
`;

const StateChanger =styled(Box)`
    text-align:center;
    padding:20px 0px;
`;

const Link = styled.span`
    color:${props=>props.theme.blueColor};
    cursor:pointer;
`;

const Form = styled(Box)`
    padding:40px;
    padding-bottom:30px;
    margin-bottom:15px;
    form{
        width:100%;
        input{ 
            width:100%;
            &:not(:last-child){
                margin-bottom:10px;
            }
        }
        button{
            margin-top:10px;    
        }
    }
`;

export default () => {
    const [action,setAction]=useState("login"); 
    const email=useInput("");
    const password=useInput("");
    console.log(email,password);
    return (
     <Wrapper>
         <Form>
             {action === "login" 
             ?<form>
                <Input placeholder={"이메일"} {...email}/>
                <Input placeholder={"비밀번호"} {...password}/>
                <Button text={"로그인"}/>
             </form> 
             :<form>
                <Input placeholder={"성"}/>
                <Input placeholder={"이름"}/>
                <Input placeholder={"이메일"}/>
                <Input placeholder={"별칭"}/>
                <Input placeholder={"비밀번호"}/>
             <Button text={"가입"}/>
              </form>  }
         </Form>

         

         <StateChanger>
          {action === "login" 
          ? <Box>계정이 없으신가요 ? <Link onClick={()=>setAction("signUp")}>가입</Link></Box> 
          : <Box>계정이 있으신가요? <Link onClick={()=>setAction("login")}>로그인</Link></Box>}
        </StateChanger>
    </Wrapper>
    );
};