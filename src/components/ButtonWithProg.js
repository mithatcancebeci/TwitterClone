import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
const ButtonWithProg = (props) => {
  const {className,onClick,pendingApiCall,text,disabled ,style}=props;
  return (
    <div>
<button onClick={onClick} className={className} disabled={disabled}  style={{color:"#000"}}>
{pendingApiCall&&<span className=" spinner-border spinner-border-sm "></span>}{text}
</button>
          </div>
  );
};

export default ButtonWithProg;
