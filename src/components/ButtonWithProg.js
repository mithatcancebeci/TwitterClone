import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { MDBIcon } from "mdbreact";

const ButtonWithProg = (props) => {
  const {
    pendingApiCall,
    disabled,
    onClick,
    text,
    className,
    style,
    icon,
    fab,
    spinsize,
    
  } = props;
  const [white, SetWhite] = useState("false");
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {white ? (
        <MDBIcon
          fab={fab}
          icon={icon}
          style={{ color: "#03a9f4" }}
          size="2x"
          spin={spinsize}
        ></MDBIcon>
      ) : (
        <MDBIcon
          fab={fab}
          icon={icon}
          style={{ color: "#03a9f4" }}
          size="2x"
          spin={spinsize}
        ></MDBIcon>
      )}
      <span
        className="pl-3"
        style={{
          fontSize: 15,
          textTransform: "initial",
          color: "#000",
          fontWeight: "bolder",
          fontFamily: "Arial",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default ButtonWithProg;
