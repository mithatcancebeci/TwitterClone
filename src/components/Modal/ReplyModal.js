import React from "react";
import './Modal.css'
import CloseIcon from "../Nav/icons/CloseIcon";
import { Link } from "react-router-dom";
import DefaultProfileImage from "../DefaultProfileImage";

const ReplyModal = (props) => {
  
  
    const {
  visible, contentProps,replyProps,text,onClicked,have,tUsername,tDisplayName,
    attachmentProps,have2} = props;
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
              <div className="replyProps">
                <div>
                <div className="defaultImagePage">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
          
          />
          <div className="flex-fill m-auto pl-2">
            <Link to={`user/${tUsername}`} className="text-dark">
              <h6>
                <strong>{tDisplayName}</strong>
                <span
                  style={{
                    color: "#5b7083",
                    fontSize: "13px",
                    paddingLeft: "3px",
                  }}
                >
                 @{tUsername}{" "}
                </span>
              </h6>
            </Link> {replyProps}<div>
              <span>Replying to <span style={{color:"#3da1f2"}}>@{tUsername}</span></span>
            </div> 
            </div>
            </div>
                </div>
               
              </div>
            
            {have &&   <div>
          <img
                    className="fileAttachmentReply"
                    src={"images/attachments/" + attachmentProps}
                    alt=""
                  ></img>
            </div> }
           
            
              <div className="contentProps">
{              contentProps
}              </div>
             
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
