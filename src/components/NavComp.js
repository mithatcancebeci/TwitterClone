import React from "react";
import { Link } from "react-router-dom";




import { MDBIcon } from "mdbreact";

const NavComp = (props) => {
  const { text,onClick,className,icon,fab,spinsize,size} = props;

  return (
    <div className="container">
    <li className="nav-item">
      <Link className={className||"d-flex-auto btn rounded-pill shadow-none "}  onClick={onClick} >
        <MDBIcon fab={fab} icon={icon} style={{color:"#03a9f4"}} size={size}  spin={spinsize}></MDBIcon>
        <span
          className="pl-3"
          style={{
            fontSize: 17,
            textTransform: "initial",
            color: "#000",
            fontWeight: "bolder",
            fontFamily:"Arial"
          }}
        >
          {text}
        </span>
      </Link>
    </li></div>
  );
};

export default NavComp;
