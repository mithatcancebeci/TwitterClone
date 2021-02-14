import React, { useEffect, useState } from "react";
import ButtonWithProg from "../ButtonWithProg";
import CloseIcon from '../Nav/icons/CloseIcon'
import DefaultBackgroundImage from '../DefaultBackgroundImage/DefaultBackgroundImage'
import './Modal.css'
import DefaultProfileImage from "../DefaultProfileImage";
import InputComp from "../InputComp";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const EditModal = (props) => {
  
const[user,setUser]=useState({})
const[updatedDisplayName,setUpdatedDisplayName]=useState();
const[updatedDescription,setUpdatedDescription]=useState();
const[newImage,setNewImage]=useState();
const[newBackgroundImage,setNewBackgroundImage]=useState();
const[validationErrors,setValidationErrors]=useState({});




  const {visible}=props;

    let className = "modal fade";
    if (visible) {
      className += "show d-block";
    }
  return (
    <div>
      <div className={className} style={{ backgroundColor: "#000000b0" }}>
      <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="info">
                <span><CloseIcon className="icon"/></span> 
                <span> Edit Profile</span>
              </div>           
              <div className="save">
              <ButtonWithProg text="Save"></ButtonWithProg> 
             </div>                         
            </div>
            <div className="modal-body">
            <div className="modalCard">
      <div>
        <DefaultBackgroundImage /> <span><CloseIcon  className="iconGift"/></span>
      </div>
      <div className="modalImage">
        <DefaultProfileImage
          width="132"
          height="132"
          style={{ position: "relative" }}
          className="rounded-circle"
        />{" "}
   
               
              </div>

            <InputComp/>
            <InputComp/>
            <InputComp/>
            <InputComp/>
              </div>
              </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
