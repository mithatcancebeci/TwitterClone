import React from "react";
import ButtonWithProg from "./ButtonWithProg";

const Modal = (props) => {
  const { visible, onClickCancel, message, onClickOk, pendingApiCall,title,okButton } = props;
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
              <h5 className="modal-title">{title}</h5>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div class="modal-footer">
              <button
                disabled={pendingApiCall}
                onClick={onClickCancel}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <ButtonWithProg
                onClick={onClickOk}
                className="btn btn-danger"
                pendingApiCall={pendingApiCall}
                disable={pendingApiCall}
                text={okButton}
                
              ></ButtonWithProg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
