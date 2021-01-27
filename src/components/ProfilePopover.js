import React, { useState } from "react";
import MoreIcon from "./Nav/icons/MoreIcon";
import volone1 from "../assets/volone1.jpg.jpg";

const ProfilePopover = (props) => {
  const [toggle, SetToggle] = useState(false);
  const menuClass = `dropdown-menu${toggle ? " show" : ""} `;
  const OnClickToggle = () => {
    SetToggle(true);
  };
  const onClickOffToggle = () => {
    SetToggle(false);
  };
  const { id, logOutClick, username, displayName, icon, className ,icon1} = props;

  return (
    <div className={className}>
      <div className="dropup">
        <button
          id="dropdownMenuButton"
          data-toggle="dropdown"
          onDoubleClick={onClickOffToggle}
          onClick={OnClickToggle}
        >    <img
        className=" image-fit rounded-circle"
        height="48px"
        width="48px"
        src={volone1}
        alt=""
      ></img>
        
          <span><strong>{displayName}</strong><br></br>{username}</span>
          <i>{icon}</i>
          
        </button>
        <div className={menuClass} id="a" aria-labelledby="dropdownMenuButton">
          <li >
            <div> <img
        className=" image-fit rounded-circle"
        height="48px"
        width="48px"
        src={volone1}
        alt=""
      ></img>
     
          <span><strong>{displayName}</strong> <br></br> <span>{username}</span>  </span>
        <i>{icon1}</i>
        </div>
          
          
            
          </li>
          <hr></hr>
          <div>
            <p>Add an existing account</p>
          </div>
          <hr></hr>
          <div>
              <p>Log Out {username}</p>
          </div>
       </div>
      </div>
    </div>
  );
};

export default ProfilePopover;
