import React from 'react';


const ButtonWithProg = (props) => {
  const { className,onClick,pendingApiCall,text,disabled}=props;
  return (
    <div className={className}>  
<button  onClick={onClick}  disabled={disabled} >
{pendingApiCall&&<span className=" spinner-border spinner-border-sm "></span>}<strong>{text}</strong>
</button>
          </div>
  );
};

export default ButtonWithProg;
