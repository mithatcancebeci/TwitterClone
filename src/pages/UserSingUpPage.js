import React, { useState } from "react";
import twitter from "../assets/twitter.png";
import Modal from "../components/Modal";
import InputComp from "../components/InputComp";
import {  MDBIcon } from 'mdbreact';
import ButtonWithProg from "../components/ButtonWithProg";
import { signup,  } from "../api/apiCall";
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
    <div className="container mt-5  pt-5 " style={{ width: "700px" }}>
      <div
        className="card text-center shadow-lg "
        style={{ borderRadius: "20px", width: "600px", height: "597px" }}
      >
        <div className="card-text">
          <i
            
            className="fab fa-twitter"
            
            style={{ color: "#1da1f2" ,fontSize:"30px"}}
           
          ></i>
        </div>
        <div className="card-body">
          <b
            className="text-left"
            style={{ fontFamily: "inherit", fontSize: 23 }}
          >
            <p>Create an account</p>
          </b>

          <InputComp
            name="username"
            label="Name"
            type="text"
            onChange={onChangeEvent}
            error={usernameError}
          ></InputComp>
          <InputComp
            name="displayName"
            label="Display Name"
            type="text"
            onChange={onChangeEvent}
            error={displayNameError}
          ></InputComp>
          <InputComp
            name="password"
            label="Password"
            type="password"
            onChange={onChangeEvent}
            error={passwordError}
          ></InputComp>
          <InputComp
            name="passwordRepeat"
            label="PasswordRepeat"
            type="password"
            onChange={onChangeEvent}
            error={passwordRepeatError}
          ></InputComp>

          
            
          
          <div className="p-5">
            {" "}
            <ButtonWithProg
              disabled={(pendingApiCall,passwordRepeatError!== undefined )}
              className="btn  rounded-pill pl-3 "
             pendingApiCall={pendingApiCall}
              text="SignUp"
              onClick={onClickSignUp}
            ></ButtonWithProg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSingUpPage;
