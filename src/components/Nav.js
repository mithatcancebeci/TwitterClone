import React, { useState } from "react";
import ButtonWithProg from './ButtonWithProg'
import NavComp from "./NavComp";


const Nav = (props) => {


  return (
    <div className="container ">
      <div className="d-flex-auto ">
        <div className="nav flex-column nav-pills ">
          <NavComp
         
            icon="twitter"
            fab="fab"
            onClick={()=>console.log("tıklandı")}
                 >
        
          </NavComp>
          <NavComp
            text="Home"
            icon="home"
            
          ></NavComp>
          <NavComp
            text="Explore"
            icon="hashtag"
          ></NavComp>{" "}
          <NavComp
            text="Notifications"
            icon="bell"
          ></NavComp>
          <NavComp
            text="Message"
            icon="envelope"
          ></NavComp>
          <NavComp
            text="BookMarks"
            icon="bookmark"
          ></NavComp>
           <NavComp
            text="List"
           icon="list-ul"
          ></NavComp>
           <NavComp
            text="Profile"
            icon="user"
            
          ></NavComp>
           <NavComp
            text="More"
           icon="cog"
           spinsize="2x"
          ></NavComp>
          <div className="nav flex-column nav-pills pl-4">
     <ButtonWithProg className="btn  rounded-pill pl-3 " icon="feather-alt" style={{width:"150px",height:"60px",color:"#03a9f4"}} text="Tweet"></ButtonWithProg>
     <div className="shadow-box-example z-depth-5"></div>

          </div>
       </div>
      </div>
    </div>
  );
};

export default Nav;
