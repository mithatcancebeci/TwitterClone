import React, { useState } from "react";
import twitter from "../assets/twitter.png";
import Modal from "../components/Modal";
import InputComp from "../components/InputComp";
import { MDBIcon } from "mdbreact";
import ButtonWithProg from "../components/ButtonWithProg";
import axios from "axios";
const UserSingUpPage = () => {
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
  const [pendingApiCall,SetpendingApiCall]=useState(true)
  const onClickSignUp =  (event) => {
    event.preventDefault();

  const {username,password,email}=form;
  const body={
    username,
    email,
    password,
  }
  
  axios
    .post("/api/1.0/addUser", body)
    .then((response) => {
      SetpendingApiCall(false)
    })
    .catch((error) => {
      if (error.response.data.validationErrors) {
        SetErrors(error.response.data.validationErrors ) ;
       SetpendingApiCall(false) }
    
    });}
  return (
    <div className="container mt-5 pt-5 mr-auto ">
      <div className="card text-center" style={{ width: "1100px" }}>
        <div className="card-text rounded-start">
         
          <MDBIcon
            fab
            icon="twitter"
            style={{ color: "#03a9f4" }}
            size="2x"
          ></MDBIcon> 
        </div>
        <div className="card-body">
          <h5 className="text-left" style={{fontFamily:"Arial"}}><strong>Create an account</strong></h5>
          <InputComp label="Name" type="text" onChange={onChangeEvent}></InputComp>
          <InputComp label="Email" type="email" onChange={onChangeEvent}></InputComp>
          <InputComp label="Password" type="password" onChange={onChangeEvent}></InputComp>
          <InputComp label="PasswordRepeat" type="password"></InputComp>
          <ButtonWithProg
          pendingApiCall={pendingApiCall}
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
  );
};

export default UserSingUpPage;
