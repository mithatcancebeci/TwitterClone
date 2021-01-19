
import axios from "axios";
import React, { useEffect, useState } from "react";
import { login } from "../api/apiCall";
import twitter from "../assets/twitter.png";
import ButtonWithProg from "../components/ButtonWithProg";
import InputComp from "../components/InputComp";
const LoginPage = (props) => {
  const[username,setUsername]=useState();
  const[password,SetPassword]=useState();
  const[error,SetError]=useState(undefined);
  
  
 
  useEffect(()=>{

    SetError(undefined)
  },[username,password])

  const onClickLogin= async (event)=>{
    event.preventDefault();
  const cred={username,password}
  try {
    const response= await login(cred);
    props.history.push("/")
  } catch (apiError) {
   SetError( apiError.response.data.message)
  }

   
   
  }
 
  const btnEnabled=username&&password;
  return (
    <div className="container">
  <div className="row">
    <div className="col-5">
    <img src={twitter} alt="" width="300px "></img>
    </div>
    <div></div>
    <div className="col">
    <InputComp
            
            label="Email"
            type="email"
            onChange={event=>setUsername(event.target.value)}
           error={error}
          ></InputComp>
    </div>
    <div className="col">
    <InputComp label="Password"  type="password"  onChange={(event)=>SetPassword(event.target.value)}></InputComp>
    
    </div>
    <div className="col pt-3">
      <ButtonWithProg  text="Login"  className="btn btn-outline rounded-pill shadow-lg"
              icon="signature"
              size="1x"
              color="#03a9f4"
              style={{ width: "145px", height: "45px"}}
              onClick={onClickLogin} disabled={!btnEnabled}></ButtonWithProg>
 
    </div>
  </div>
</div>
  );
};

export default LoginPage;
