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
  const { id, logOutClick, username, displayName, icon, className } = props;

  return (
    <div className={className}>
      <div className="dropup">
        <button
          id="dropdownMenuButton"
          data-toggle="dropdown"
          onDoubleClick={onClickOffToggle}
          onClick={OnClickToggle}
        >
          <img
            className=" image-fit rounded-circle"
            height="48px"
            width="48px"
            src={volone1}
            alt=""
          ></img>
          {displayName} <br></br> {username} <span>{icon}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePopover;
