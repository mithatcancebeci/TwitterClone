import { MDBInput } from "mdbreact";
import React from 'react';


const InputComp = (props) => {
    const{type,onChange,error,label,className}=props
 

    if(error!==undefined){
        className+="is-invalid"
    }
    return (
    <div>
     
           <MDBInput className={className||"form-control"}  label={label} type={type} onChange={onChange} outline   />
            <div className="invalid-feedback">{props.error}</div>
     </div>
    );
};

export default InputComp;