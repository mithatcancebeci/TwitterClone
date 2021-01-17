import React, { useState } from "react";
import twitter from "../assets/twitter.png";
import Modal from "../components/Modal";
import InputComp from "../components/InputComp";
import {  MDBIcon } from 'mdbreact';
import ButtonWithProg from "../components/ButtonWithProg";
import { signup,  } from "../api/apiCall";
const UserSingUpPage = (props) => {
  const [form, SetForm] = useState({
    username: null,
    password: null,
    email: null,
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
  const [pendingApiCall, SetpendingApiCall] = useState(false);
  const onClickSignUp = async (event) => {
    event.preventDefault();

    const { username, password, email } = form;
    const body = {
      username,
      email,
      password,
    };
    SetpendingApiCall(true);

    try {
      const response = await signup(body);
    } catch (e) {
      console.log(e.response.data);
      if (e.response.data.validationErrors)
        SetErrors(e.response.data.validationErrors);
    }
    SetpendingApiCall(false);
  };
  const {
    username: usernameError,
    password: passwordError,
    email: emailError,
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
          <MDBIcon
            fab
            className="pt-3"
            icon="twitter"
            style={{ color: "#1da1f2" }}
            size="lg"
          ></MDBIcon>
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
            name="email"
            label="Email"
            type="email"
            onChange={onChangeEvent}
            error={emailError}
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
              disabled={pendingApiCall}
              className="btn  rounded-pill pl-3 "
              icon="signature"
              size="1x"
              style={{ width: "150px", height: "60px" }}
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
