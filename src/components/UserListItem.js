import React from "react";

import {Link} from 'react-router-dom'

import DefaultProfileImage from "./DefaultProfileImage";
const UserListItem = (props) => {
  const { user } = props;
  const{username,displayName,image}=user;
 
  return (
    
    <Link to={`/user/${username}`} className="list-group-item list-group-item-action" style={{backgroundColor:"#white",borderBlockColor:"#ebeef0"}}>
          
        <DefaultProfileImage
        
          className="rounded-circle"
          width="36px"
          height="36px"
          alt={`${username} profile`}
          image={image}
        ></DefaultProfileImage>
     
    
       <span className="d-flex-auto pl-1"style={{font:"inherit",fontWeight:"bolder"}}> <span>{displayName}</span></span><span style={{paddingLeft:"2px"}}>@{username}</span>
       <br></br>
       <span style={{paddingLeft:"45px",cursor:"pointer"}}>textMessage</span>
     
     
    </Link>
    
  );
    }
  export default UserListItem;