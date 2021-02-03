import React, { useState } from "react";



import { signup,  } from "../api/apiCall";
import ButtonWithProg from "../components/ButtonWithProg";
import InputComp from "../components/InputComp";
import { useApiProgress } from "../Shared/ApiProgress";
const UserSingUpPage = (props) => {
  const [form, SetForm] = useState({
    username: null,
    password: null,
    displayName: null,
    passwordRepeat: null,
  });
  const [errors, SetErrors] = useState({});
  const onChangeEvent = (event) => {
    const { name, value } = event.target;
    const errorsCopy = { ...errors };
    errorsCopy[name] = undefined;
    SetErrors(errorsCopy);
    const formCopy = { ...form };
    formCopy[name] = value;
    SetForm((previousForm) => ({ ...previousForm, [name]: value }));
  };
  const pendingApiCall=useApiProgress('post','/api/1.0/addUser',true);
  const onClickSignUp = async (event) => {
    event.preventDefault();

    const { username, password, displayName } = form;
    const body = {
      username,
      displayName,
      password,
    };
   

    try {
      const response = await signup(body);
    } catch (e) {
      console.log(e.response.data);
      if (e.response.data.validationErrors)
        SetErrors(e.response.data.validationErrors);
    }
  
  };
  const {
    username: usernameError,
    password: passwordError,
    displayName: displayNameError,
  } = errors;
  let passwordRepeatError;
  if (form.password !== form.passwordRepeat) {
    passwordRepeatError = "Password mismatch";
  }

  return (
    <div className="container">
    {" "}
    <form>
      <h5 className="text-center">
        <strong>Sign Up</strong>
      </h5>
      <InputComp
        name="username"
        label="Username"
                error={usernameError}
        onChange={onChangeEvent}
      ></InputComp>
      <InputComp
        name="displayName"
        label="Display Name"
        error={displayNameError}
        onChange={onChangeEvent}
      ></InputComp>
      <InputComp
        name="password"
        label="Password"
        error={passwordError}
        onChange= {onChangeEvent}
        type="password"
      ></InputComp>
      <InputComp
        name="passwordRepeat"
        label="Password Repeat"
        error={passwordRepeatError}
        onChange={onChangeEvent}
        type="password"
      ></InputComp>

      <div className="text-center">
        <ButtonWithProg
          disabled={(pendingApiCall&& form === null)}
          onClick={onClickSignUp}
          pendingApiCall={pendingApiCall}
          text="Sign Up"
        ></ButtonWithProg>
      </div>
    </form>
  </div>
  );
};

export default UserSingUpPage;
