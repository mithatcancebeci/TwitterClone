import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreIcon from "./Nav/icons/MoreIcon";

const MoreButton = (props) => {
  const [toggle, SetToggle] = useState(false);
  const menuClass = `dropdown-menu${toggle ? " show" : ""}`;
  const {
    control,href1,href2,href3,href4,href5,href6,href7,href8,
    icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,
    text5,text6,text7,text8,text1,text2,text3,text4, icon,
  } = props;

  return (
    <div
      className="dropup"
      onDoubleClick={() => {
        SetToggle(false);
      }}
      onClick={() => {
        SetToggle(true);
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        {" "}
        {icon}
      </span>

      <div className={menuClass} id="a" aria-labelledby="dropdownMenuButton">
        {control === "4" && (
          <>
            {" "}
            <Link className="dropdown-item" to={href1}>
              {icon1} <span>{text1}</span>
            </Link>
            <Link className="dropdown-item" to={href2}>
              {icon2}
              <span>{text2}</span>
            </Link>
            <Link className="dropdown-item" to={href3}>
              {icon3}
              <span>{text3}</span>
            </Link>
            <Link className="dropdown-item" to={href4}>
              {icon4}
              <span>{text4}</span>
            </Link>
          </>
        )}

        {control === "8" && (
          <>
            <Link className="dropdown-item" to={href1}>
              {icon1} <span>{text1}</span>
            </Link>
            <Link className="dropdown-item" to={href2}>
              {icon2}
              <span>{text2}</span>
            </Link>
            <Link className="dropdown-item" to={href3}>
              {icon3}
              <span>{text3}</span>
            </Link>
            <Link className="dropdown-item" to={href4}>
              {icon4}
              <span>{text4}</span>
            </Link>
            <Link className="dropdown-item" to={href5}>
              {icon5} <span>{text5}</span>
            </Link>
            <Link className="dropdown-item" to={href6}>
              {icon6}
              <span>{text6}</span>
            </Link>
            <Link className="dropdown-item" to={href7}>
              {icon7}
              <span>{text7}</span>
            </Link>
            <Link className="dropdown-item" to={href8}>
              {icon8}
              <span>{text8}</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MoreButton;
