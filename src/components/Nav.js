import React, { useCallback, useState } from "react";
import ButtonWithProg from "./ButtonWithProg";
import TwitterIcon from '@material-ui/icons/Twitter';
import { blue } from "@material-ui/core/colors";
import HomeIcon from '@material-ui/icons/Home'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import EmailIcon from '@material-ui/icons/Email';
import { TramOutlined } from "@material-ui/icons";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
const Nav = (props) => {
  const [form,SetForm]=useState({
    home:false,
    message:false,
  })

  const onClickEvent=(event)=>
{ event.preventDefault();
  console.log(event.target.id)
  const { name, value } = event.target;
  
  const formCopy = { ...form };
  formCopy[name] = value;
  SetForm((previousForm) => ({ ...previousForm, [name]: value }));
 

 
}
 
  return (
    <div>
     
    <Link   onClick={onClickEvent}>{form.home?<HomeIcon  fontSize="large" ></HomeIcon>:<HomeOutlinedIcon></HomeOutlinedIcon>}<i name="home">Home</i></Link>
    <Link onClick={onClickEvent} >{form.message?<EmailIcon></EmailIcon>:<EmailOutlinedIcon></EmailOutlinedIcon>}<i id="message">Message</i></Link>
    </div>
 
  );
};

export default Nav;
