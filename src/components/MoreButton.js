import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { MDBIcon } from "mdbreact";
import { Link } from "@material-ui/core";

const MoreButton = (props) => {
  const [toggle, SetToggle] = useState(false);
  const menuClass = `dropdown-menu${toggle ? " show" : ""}`;
  const {
    control,far1,far2,far3,far4,far5,far6,far7,far8,
    href1,
    href2,
    href3,
    href4,
    href5,
    href6,
    href7,
    href8,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text,
    dropNav,
    style
  } = props;
  const OnClickToggle = () => {
    SetToggle(true);
  };
  const onClickOffToggle = () => {
    SetToggle(false);
  };

  return (
    <div>
      <div
        className={dropNav}
        onDoubleClick={onClickOffToggle}
        onClick={OnClickToggle}
        
      >
        <MoreHorizIcon
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          className="outline"
          aria-haspopup="true"
          style={{fontSize:"40px"}}
        ></MoreHorizIcon><strong className="pl-3" style={style}>{text}</strong>


        <div className={menuClass}  style={{borderRadius:"5px"}}aria-labelledby="dropdownMenuButton">
          {control === "4" && (
            <>
              <a className="dropdown-item" href={href1}>
                <MDBIcon  far={far1} size="1x" icon={icon1}></MDBIcon> <span >{text1}</span>
              </a>
              <a className="dropdown-item" href={href2}>
                <MDBIcon far={far2} size="1x" icon={icon2}></MDBIcon> <span>{text2}</span>
              </a>
              <a className="dropdown-item" href={href3}>
                <MDBIcon far={far3} size="1x" icon={icon3}></MDBIcon> <span>{text3}</span>
              </a>
              <a className="dropdown-item" href={href4}>
                <MDBIcon  far={far4} size="1x" icon={icon4}></MDBIcon> <span>{text4}</span>
              </a>
            </>
          )}
          {control === "8" && (
            <>
              <a className="dropdown-item" href={href1}>
                <MDBIcon far={far1} size="1x" icon={icon1}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text1}</span>
              </a>
              <a className="dropdown-item" href={href2}>
                <MDBIcon far={far2} size="1x" icon={icon2}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text2}</span>
              </a>
              <a className="dropdown-item" href={href3}>
                <MDBIcon far={far3} size="1x" icon={icon3}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text3}</span>
              </a>
              <a className="dropdown-item" href={href4}>
                <MDBIcon far={far4}size="1x" icon={icon4}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text4}</span>
              </a>
              <a className="dropdown-item" href={href5}>
                <MDBIcon far={far5} size="1x" icon={icon5}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text5}</span>
              </a>
              <a className="dropdown-item" href={href6}>
                <MDBIcon  far={far6}size="1x" icon={icon6}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text6}</span>
              </a>
              <a className="dropdown-item" href={href7}>
                <MDBIcon far={far7} size="1x" icon={icon7}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text7}</span>
              </a>
              <a className="dropdown-item" href={href8}>
                <MDBIcon far={far8}size="1x" icon={icon8}></MDBIcon> <span className="pl-2" style={{fontSize:"14px"}}>{text8}</span>
              </a>
            </>
          )}
          {control === "7" && (
            <>
              <a className="dropdown-item" href={href1}>
                <MDBIcon far={far1}size="1x" icon={icon1}></MDBIcon> <span>{text1}</span>
              </a>
              <a className="dropdown-item" href={href2}>
                <MDBIcon far={far2}size="1x" icon={icon2}></MDBIcon> <span>{text2}</span>
              </a>
              <a className="dropdown-item" href={href3}>
                <MDBIcon far={far3}size="1x" icon={icon3}></MDBIcon> <span>{text3}</span>
              </a>
              <a className="dropdown-item" href={href4}>
                <MDBIcon far={far4}size="1x" icon={icon4}></MDBIcon> <span>{text4}</span>
              </a>
              <a className="dropdown-item" href={href5}>
                <MDBIcon far={far5}size="1x" icon={icon5}></MDBIcon> <span>{text5}</span>
              </a>
              <a className="dropdown-item" href={href6}>
                <MDBIcon far={far6} size="1x" icon={icon6}></MDBIcon> <span>{text6}</span>
              </a>
              <a className="dropdown-item" href={href7}>
                <MDBIcon far={far7}size="1x" icon={icon7}></MDBIcon> <span>{text7}</span>
              </a>
            </>
          )}
          {control === "2" && (
            <>
              <a className="dropdown-item" href={href1}>
                <MDBIcon far={far1}size="1x" icon={icon1}></MDBIcon> <span>{text1}</span>
              </a>
              <a className="dropdown-item" href={href2}>
                <MDBIcon far={far2}size="1x" icon={icon2}></MDBIcon> <span>{text2}</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreButton;
