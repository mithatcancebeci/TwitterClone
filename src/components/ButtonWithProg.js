import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
const ButtonWithProg = (props) => {
  const {className}=props;
  return (
    <div>
      <HomeIcon></HomeIcon><button className="btn btn-primary" style={{padding:2,margin:1,marginBottom:25,marginLeft:-4}}></button>
          </div>
  );
};

export default ButtonWithProg;
