
import React, { useState } from "react";
import { login } from "../api/apiCall";
import twitter from "../assets/twitter.png";
import ButtonWithProg from "../components/ButtonWithProg";
import InputComp from "../components/InputComp";
const LoginPage = (props) => {
  const[username,setUsername]=useState();
  const[password,SetPassword]=useState();
  const[error,SetError]=useState();
 const[email,SetEmail]=useState();
 
 
  const onClickLogin=(event)=>{
    event.preventDefault();
  const cred={username,password}
  login(cred);
   
   
  }
 
  return (
    <div className="container">
  <div className="row">
    <div className="col-5">
    <img src={twitter} alt="" width="300px "></img>
    </div>
    <div className="col">
    <InputComp
            name="username"
            label="Email"
            type="text"
            onChange={event=>setUsername(event.target.value)}
          
          ></InputComp>
    </div>
    <div className="col">
    <InputComp label="Password" name="password" type="password"  onChange={(event)=>SetPassword(event.target.value)}></InputComp>
    </div>
    <div className="col pt-3">
      <ButtonWithProg  text="Login"  className="btn btn-outline rounded-pill shadow-lg"
              icon="signature"
              size="1x"
              color="#03a9f4"
              style={{ width: "145px", height: "45px"}}
              onClick={onClickLogin} ></ButtonWithProg>
    </div>
  </div>
</div>
  );
};

export default LoginPage;
