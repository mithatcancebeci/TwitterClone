import React, { useState } from "react";
import { useSelector } from "react-redux";
import DefaultProfileImage from './DefaultProfileImage'
import CheckIcon from "./MoreButtonIcons/CheckIcon";
import MoreIcon from "./Nav/icons/MoreIcon";

const ProfilePopover = (props) => {
  
  const [toggle, SetToggle] = useState(false);
  const menuClass = `dropdown-menu${toggle ? " show" : ""} `;
  const OnClickToggle = () => {
    SetToggle(!toggle);
  }
  const { image,logOutClick, username, displayName, icon, className ,icon1} = props;

  return (
    <div className={className}>
      <div className="dropup">
        <button
          id="dropdownMenuButton"
          data-toggle="dropdown"
     
          onClick={OnClickToggle}
        >    <DefaultProfileImage
        className=" image-fit rounded-circle"
        height="48px"
        width="48px"
        image={image}
        alt=""
      ></DefaultProfileImage>
        
          <span><strong>{displayName}</strong><br></br>{username}</span>
          <i><MoreIcon></MoreIcon></i>
          
        </button>
        <div className={menuClass} id="a" aria-labelledby="dropdownMenuButton">
          <li >
            <div> <DefaultProfileImage
        className=" image-fit rounded-circle"
        height="48px"
        width="48px"
        image={image}
        alt=""
      ></DefaultProfileImage>
     
          <span><strong>{displayName}</strong> <br></br> <span>{username}</span>  </span>
        <i><CheckIcon></CheckIcon></i>
        </div>
          
          
     
          </li>
          <hr></hr>
          <div className="profilePopover-menu">
        
            <p>Add an existing account</p>
          
          <hr></hr>
          
              <p onClick={logOutClick} style={{cursor:"pointer"}}>Log Out <strong>{username}</strong></p>
          
          </div>
          
       </div>
      </div>
    </div>
  );
};

export default ProfilePopover;
