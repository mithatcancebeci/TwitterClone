import { MDBInput } from "mdbreact";
import React from 'react';


const InputComp = (props) => {
    const{type,onChange,error,label,className,size,style}=props
 

    if(error!==undefined){
        className+="is-invalid"
    }
    return (
    <div>
     
           <MDBInput className={className||"form-control"} style={style} label={label} type={type} onChange={onChange} outline  size={size}  />
            <div className="invalid-feedback">{props.error}</div>
     </div>
    );
};

export default InputComp;