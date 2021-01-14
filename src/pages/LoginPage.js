import { blue } from "@material-ui/core/colors";
import { MDBInputGroup, MDBView } from "mdbreact";
import React from "react";
import twitter from "../assets/twitter.png";
import ButtonWithProg from "../components/ButtonWithProg";
import InputComp from "../components/InputComp";
const LoginPage = () => {
  return (
    <div class="container">
  <div class="row">
    <div class="col-8">
    <img src={twitter} alt=""></img>
    </div>
    <div class="col-2">
  <InputComp label="Email-PhoneNumber" type="email" ></InputComp>
    </div>
    <div class="col-2">
      One of three columns
    </div>
  </div>
</div>
  );
};

export default LoginPage;
