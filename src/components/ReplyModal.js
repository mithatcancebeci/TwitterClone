import React from "react";
import ButtonWithProg from "./ButtonWithProg";
import './Modal.css'
import Stars from './Nav/icons/Stars'
import TweetFeed from "./Tweet/TweetFeed";
import TweetSubmit from './Tweet/TweetSubmit'
import TweetView from "./Tweet/TweetView";
const Modal = (props) => {


  const {
    visible,contentProps,replyProps,icon
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
             {icon}
              
            </div>
            <div className="modal-body">
             <div>
             {contentProps}
              </div>
             
              <div>
     {replyProps}
              </div>
             
            </div>
                     </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
