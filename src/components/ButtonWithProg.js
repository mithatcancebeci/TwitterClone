
import React from 'react';

const ButtonWithProg = (props) => {
  const {className,onClick,pendingApiCall,text,disabled ,style}=props;
  return (
    <div > 
<button className={className}  onClick={onClick}  disabled={disabled} style={style}>
{pendingApiCall&&<span className=" spinner-border spinner-border-sm "></span>}{text}
</button>
          </div>
  );
};

export default ButtonWithProg;
