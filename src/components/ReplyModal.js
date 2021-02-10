import React, { useEffect, useState } from "react";

import './Modal.css'
import CloseIcon from "./Nav/icons/CloseIcon";
const ReplyModal = (props) => {
  
  
    const {
  visible, contentProps,replyProps,text,onClicked
     } = props;
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
             <span style={{cursor:"pointer"}} onClick={onClicked}><CloseIcon className="icon"/></span>
             <span>{text}</span>
            </div>
            <div className="modal-body">
            {replyProps}
             {contentProps}
                 </div>
          
              
             
              <div>
    
              </div>
             
            </div>
                     </div>
        </div>
      </div>
    
  );
};

export default ReplyModal;
