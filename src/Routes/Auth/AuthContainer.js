import React,{useState} from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOGIN, CREATE_USER } from "./AuthQueries";

export default () => {
    const [action, setAction] = useState("logIn");
    const userName = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const [requestSecret] = useMutation(LOGIN, { variables: { email: email.value } });
    const [createAccount] = useMutation(CREATE_USER,{variables:{
        email:email.value,
        userName:userName.value,
        firstName:firstName.value,
        lastName:lastName.value,
    }})

    const onLogin = e => {
      e.preventDefault();
      if (email !== "") {
        requestSecret();
      }
    };

    const onCreateUser = e => {
      e.preventDefault();
      if (email !== "") {
        createAccount();
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
        onLogin={onLogin}
        onCreateUser={onCreateUser}
      />
    );
  };