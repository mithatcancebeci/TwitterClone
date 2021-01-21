import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Link} from 'react-router-dom'


const MoreButton = (props) => {
  const [toggle, SetToggle] = useState(false);
  const menuClass = `dropdown-menu${toggle ? " show" : ""}`;
  const {
    control,
    href1,
    href2,
    href3,
    href4,
    href5,
    href6,
    href7,
    href8,
    className1,
    className2,
    className3,className4,className5,className6,className7,className8,
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
    styleCo,styleButton,id
  } = props;
  const OnClickToggle = () => {
    SetToggle(true);
  };
  const onClickOffToggle = () => {
    SetToggle(false);
  };

  return (
    
      <div 
        className={dropNav}
        onDoubleClick={onClickOffToggle}
        onClick={OnClickToggle}

      >
          <div id={id}>
        <MoreHorizIcon 
          type="button" 
          id="dropdownMenuButton"
          data-toggle="dropdown"
          className="outline"
          aria-haspopup="true"
          style={styleButton}

        ></MoreHorizIcon><strong className="pl-3" style={styleCo}>{text}</strong>
</div>

        <div className={menuClass}  id="a" style={{borderRadius:"5px"}}aria-labelledby="dropdownMenuButton">
          {control === "4" && (
            <>
              <Link className="dropdown-item" to={href1}>
                <i className={className1}></i> <span >{text1}</span>
              </Link>
              <Link className="dropdown-item" to={href2}>
                <i className={className2}></i> <span>{text2}</span>
              </Link>
              <Link className="dropdown-item" to={href3}>
                <i className={className3}></i> <span>{text3}</span>
              </Link>
              <Link className="dropdown-item" to={href4}>
                <i   className={className4}></i> <span>{text4}</span>
              </Link>
            </>
          )}
          {control === "8" && (
            <>
              <Link className="dropdown-item" to={href1}>
                <i  className={className1}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text1}</span>
              </Link>
              <Link className="dropdown-item" to={href2}>
                <i  className={className2}></i> <span className="overflow-auto ml-3" style={{fontSize:"14px"}}>{text2}</span>
              </Link>
              <Link className="dropdown-item" to={href3}>
                <i className={className3}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text3}</span>
              </Link>
              <Link className="dropdown-item" to={href4}>
                <i  className={className4}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text4}</span>
              </Link>
              <hr className="dropdown-divider overflow-auto"></hr>
              <Link className="dropdown-item" to={href5}>
                <i  className={className5}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text5}</span>
              </Link>
              <Link className="dropdown-item" to={href6}>
                <i   className={className6}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text6}</span>
              </Link>
              <Link className="dropdown-item" to={href7}>
                <i  className={className7}></i> <span className="overflow-auto ml-1" style={{fontSize:"14px"}}>{text7}</span>
              </Link>
              <Link className="dropdown-item" to={href8}>
                <i className={className8}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text8}</span>
              </Link>
            </>
          )}
          {control === "7" && (
             <>
             <Link className="dropdown-item" to={href1}>
               <i  className={className1}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text1}</span>
             </Link>
             <Link className="dropdown-item" to={href2}>
               <i  className={className2}></i> <span className="overflow-auto ml-3" style={{fontSize:"14px"}}>{text2}</span>
             </Link>
             <Link className="dropdown-item" to={href3}>
               <i className={className3}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text3}</span>
             </Link>
             <Link className="dropdown-item" to={href4}>
               <i  className={className4}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text4}</span>
             </Link>
             <hr className="dropdown-divider overflow-auto"></hr>
             <Link className="dropdown-item" to={href5}>
               <i  className={className5}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text5}</span>
             </Link>
             <Link className="dropdown-item" to={href6}>
               <i   className={className6}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text6}</span>
             </Link>
             <Link className="dropdown-item" to={href7}>
               <i  className={className7}></i> <span className="overflow-auto ml-1" style={{fontSize:"14px"}}>{text7}</span>
             </Link>
            
           </>
          )}
          {control === "2" && (
            <>
               <Link className="dropdown-item" to={href1}>
               <i  className={className1}></i> <span className="overflow-auto ml-2" style={{fontSize:"14px"}}>{text1}</span>
             </Link>
             <Link className="dropdown-item" to={href2}>
               <i  className={className2}></i> <span className="overflow-auto ml-3" style={{fontSize:"14px"}}>{text2}</span>
             </Link>
            </>
          )}
        </div>
      </div>
  
  );
};

export default MoreButton;
