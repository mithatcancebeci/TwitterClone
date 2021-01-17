import { MDBInput } from "mdbreact";
import React from 'react';


const InputComp = (props) => {
    const{name,type,onChange,error,label,size,style,defaultValue}=props
 
let className="form-control"
    if(error!==undefined){
        className+=" is-invalid"
        
    }   
    return (
 
      <div className="form-group ">
           <MDBInput className={className} style={style} name={name}label={label} type={type} onChange={onChange} outline  size={size} defaultValue={defaultValue} >
            <div className="invalid-feedback"><span>{props.error}</span></div></MDBInput>
            </div>
   
    );
};

export default InputComp;