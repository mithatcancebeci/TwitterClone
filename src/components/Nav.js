import React, { useState } from "react";
import ButtonWithProg from "./ButtonWithProg";
import NavComp from "./NavComp";

const Nav = (props) => {
  const  size="2x"
  return (
    <div className="container ">
      <div className="d-flex-auto ">
        <div className="nav flex-column nav-pills ">
          <NavComp
            icon="twitter"
            fab="fab"
            size={size}
            onClick={() => console.log("tıklandı")}
          ></NavComp>
          <NavComp text="Home" icon="home" size={size}></NavComp>
          <NavComp text="Explore" icon="hashtag" size={size}></NavComp>{" "}
          <NavComp text="Notifications" icon="bell" size={size}></NavComp>
          <NavComp text="Message" icon="envelope" size={size}></NavComp>
          <NavComp text="BookMarks" icon="bookmark" size={size}></NavComp>
          <NavComp text="List" icon="list-ul" size={size}></NavComp>
          <NavComp text="Profile" icon="user" size={size}></NavComp>
         
          <div className="nav flex-column nav-pills pl-4">
            <ButtonWithProg
              className="btn  rounded-pill pl-3 "
              icon="feather-alt"
              style={{ width: "150px", height: "60px", color: "#03a9f4" }}
              text="Tweet"
            ></ButtonWithProg>
            <div className="shadow-box-example z-depth-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
