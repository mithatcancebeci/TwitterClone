
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../api/apiCall";
import twitter from "../assets/twitter.png";
import ButtonWithProg from "../components/ButtonWithProg";
import InputComp from "../components/InputComp";
import { loginHandler } from "../redux/authAction";
import { useApiProgress } from "../Shared/ApiProgress";
const LoginPage = (props) => {
  const[username,setUsername]=useState();
  const[password,SetPassword]=useState();
  const[error,SetError]=useState(undefined);
  const pendingApiCall=useApiProgress('post','/api/1.0/auth',true)
  const dispatch=useDispatch();
 
  useEffect(()=>{

    SetError(undefined)
  },[username,password])

  const  onClickLogin = async (event) => {
    event.preventDefault();
  
    const creds = {
      username,
      password,
    };
    const{history}=props
    const { push } = history;
    SetError(undefined);
    try {
    await dispatch(loginHandler(creds))
      push("/");
    } catch (apiError) {
      SetError(apiError.response.data.message)
      
      };
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
      <ButtonWithProg  
              text="Login" pendingApiCall={pendingApiCall}  className="btn-md  rounded-pill outlined shadow-none  "
              onClick={onClickLogin} disabled={pendingApiCall||!btnEnabled}></ButtonWithProg>
 
    </div>
  </div>
</div>
  );
};

export default LoginPage;
