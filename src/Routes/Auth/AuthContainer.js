import React,{useState} from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOGIN, CREATE_USER, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
    const [action, setAction] = useState("logIn");
    const userName = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const secret = useInput("");
    const [requestSecretMutation] = useMutation(LOGIN,
      { 
        variables: { email: email.value },
    });
    const [createAccountMutation] = useMutation(CREATE_USER,{variables:{
        email:email.value,
        userName:userName.value,
        firstName:firstName.value,
        lastName:lastName.value,
    }
  });
    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET,{
      variables:{
        secret:secret.value,
        email:email.value
      }
    });

    const [localLogInMutation] = useMutation(LOCAL_LOG_IN,{
    });

    const onSubmit =async(e) => {
      e.preventDefault();
      if (action === "logIn"){
        if(email.value!==""){
          try{
            const result = await requestSecretMutation();
            const {data:{requestSecret}} = result;
            if(!requestSecret){
              toast.error("You don't have account");
              setAction("signUp");
              setTimeout(()=>setAction("signUp"),2000);
            }else{
              toast.success("check your inbox");
              setAction("confirm")
            }
          }catch {
            toast.error("Can't reqeust sercret ,try again! ");
          }
        }else{
          toast.error("Email is required");
            }
      } else if(action==="signUp"){
        if(email.value !== ""&&
          userName.value !== ""&&
          firstName.value !== ""&&
          lastName.value !== ""){
            try{
             const result = await createAccountMutation();
             const {data: {createAccount}} = result;
             if(!createAccount){
               toast.error("error")
             }else {
               toast.success("Account create , Login now!");
               setTimeout(()=>setAction("logIn"),2000);
             }
            }catch(e) {
              toast.error(e.message);
            }
        } else {
          toast.error("All field are required");
        }
      }else if(action==="confirm"){
      if(secret.value!=="") {
        try{
          const result = await confirmSecretMutation();
          const {data:{confirmSecret:token}} = result;
          console.log(token);
          if(token !=="" &&token !== undefined){
            localLogInMutation({variables:{token}})
          }else {
            throw Error("");
          }
        }catch{
          toast.error("Can't confirm Code... Try again.😒");
        }
      }
     }
    };

    return (
      <AuthPresenter
        setAction={setAction}
        action={action}
        userName={userName}
        firstName={firstName}
        lastName={lastName}
        email={email}
        secret={secret}
        onSubmit={onSubmit}
      />
    );
  };