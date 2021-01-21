import React from "react";

import {Link} from 'react-router-dom'

import DefaultProfileImage from "./DefaultProfileImage";
const UserListItem = (props) => {
  const { user } = props;
  const{username,displayName,image}=user;
 
  return (
    <Link to={`/user/${username}`} className="list-group-item list-group-item-action">
          
        <DefaultProfileImage
        
          className="rounded"
          width="36px"
          height="36px"
          alt={`${username} profile`}
          image={image}
        ></DefaultProfileImage>
     
    
       <span className="d-flex-auto pl-3"style={{font:"inherit",fontWeight:"bolder"}}> {displayName}</span>
       
       <span className="">{username}</span>
     
     
     
    </Link>
  );
    }
  export default UserListItem;