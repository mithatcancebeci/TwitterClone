import { MDBBtn, MDBIcon, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdbreact";
import React from "react";
import {Link} from 'react-router-dom'
import volone1 from '../assets/volone1.jpg.jpg'

const Popover = (props) => {

  const {src,name,username}=props
  return (
    <div >
      <div style={{ display: "flex" }} className="m-5 p-5">
        <MDBPopover placement="top" popover clickable id="popper1">
          <button className="btn pl-3 d-flex align-items-start text-capitalize shadow-none">
            <img
              className="image-fit rounded-circle"
              width="48px"
              height="48px"
              src={src}
              alt=""
            ></img>
            <div>
                 <strong className="pl-3" style={{fontSize:"17px"}}>{name}</strong>
                 <br></br>
           <span className="pl-3" style={{fontSize:"16px",color:"GrayText",fontFamily:"sans-serif"}}>{username}</span></div>
        </button>
          
            <MDBPopoverBody >
                <div className="d-flex align-items-start text-capitalize "><img
                className="image-fit rounded-circle"
                width="52px"
                height="52px"
                src={src}
                alt=""
              ></img>
            <div>
              <strong className="pl-3" style={{fontSize:"17px", color:"#000"}}>{name}</strong>
                 <br></br>
           <span className="pl-3" style={{fontSize:"16px",color:"GrayText",fontFamily:"sans-serif"}}>{username}</span>
              </div></div>
              <hr className="dropdown-divider"></hr>
            
            <Link > <span style={{fontSize:"14px",color:"#000"}}> Add an existing account</span>
            </Link>
            <hr className="dropdown-divider"></hr>
            <Link><span style={{fontSize:"14px",color:"#000"}}> Log Out {username}</span>
            </Link>
            </MDBPopoverBody>
         
        </MDBPopover>
      </div>
    </div>
  );
};

export default Popover;
