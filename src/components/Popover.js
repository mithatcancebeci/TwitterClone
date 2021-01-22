import { MDBIcon } from 'mdbreact';
import React from 'react';
import { useState } from 'react';
import volone1 from '../assets/volone1.jpg.jpg'
import './Picker.css'
const Picker = (props) => {
  
    const [toggle, SetToggle] = useState(false);
    const menuClass = `dropdown-menu${toggle ? " show" : ""} `;
    const OnClickToggle = () => {
        SetToggle(true);
      };
      const onClickOffToggle = () => {
        SetToggle(false);
      };
      const {id,logOutClick,username,displayName}=props
    return (
        <div 
        className="dropup"
       

      >
          <div id={id}> 
           <button className="btn pl-3 d-flex align-items-start text-capitalize shadow-none "id="dropdownMenuButton"
          data-toggle="dropdown"  onDoubleClick={onClickOffToggle}
        onClick={OnClickToggle}  aria-haspopup="true">
            <img
              className="image-fit rounded-circle"
              width="48px"
              height="48px"
              src={volone1}
              alt=""
            ></img>
         
            <div>
                 <strong className="pl-3" style={{fontSize:"17px"}}>{displayName}</strong> <MDBIcon className="pl-3"   icon="ellipsis-h"></MDBIcon>
                 <br></br>
           <span className="pr-3" style={{fontSize:"16px",color:"GrayText",fontFamily:"sans-serif"}}>{username}</span></div>
        </button> 

    </div> 
    <div className={menuClass} aria-labelledby="dropdownMenuButton" style={{paddingInline:"15px",borderRadius:"33px"}}>
     <li className="dropdown-item">
     <div className="d-flex align-items-start text-capitalize ">
          <img
              className=" image-fit rounded-circle"
              width="48px"
              height="48px"
              src={volone1}
              alt=""
            ></img>
              <div className="text-captalize">
                 <strong className="pl-3" style={{fontSize:"17px"}}>{displayName}</strong><MDBIcon className="pl-3" style={{color:"#1da1f2"}}  icon="check"></MDBIcon>
         <br></br>
           <span className="pl-3" style={{fontSize:"16px",color:"GrayText",fontFamily:"sans-serif"}}>{username}</span> </div>  </div>
        </li> 
          <hr></hr>
          <li>
          <span className="pl-3" style={{fontSize:"15px"}}> Add an existing account</span>
          </li>
          <hr></hr>
          <li>
          <span className="pl-3 text-capitalize" style={{fontSize:"15px",cursor:"pointer"}} onClick={logOutClick}> Log out {username}</span>
          </li>
 </div>
 </div>
    );
};

export default Picker;