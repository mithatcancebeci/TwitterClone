import { MDBIcon } from "mdbreact";
import React, {  useState } from "react";

const Search = (props) => {
const[colors,setColors]=useState(false);
const onClickColors=(event)=>{
    event.preventDefault();
    setColors(true)
    if(event.target.name!=="search")
    setColors(false)
    console.log(event)
}


  const { placeholder, icon } = props;
  return (
    <div className="input-group mb-3"  onClick={onClickColors} style={{borderLeft:"30px", marginTop:"10px"}}>
      {" "} 
      <p  className="input-group-text" style={{backgroundColor:"white",borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px",borderInlineEnd:"none"}} id="basic-addon1">
        <MDBIcon className="pl-3" icon={icon} style={!colors?{color:"#000"}:{color:"#1da1f2"}}/>
      </p>
      <input
        type="text"
        className="form-control outline-none"
        placeholder={placeholder}
        name="search"
        aria-describedby="basic-addon1"
        style={{borderTopRightRadius:"16px",borderBottomRightRadius:"16px",borderInlineStart:"none"}} 
      />
      
    </div>
  );
};

export default Search;
