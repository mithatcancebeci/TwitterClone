import React, { useEffect, useState } from 'react';
import {useApiProgress} from '../Shared/ApiProgress'
import {getUsers} from '../api/apiCall'
import UserListItem from './UserListItem';
const WhoToFollow = () => {
    const[page,SetPage]=useState({
        content:[],size:3,currentPage:0
    })
    const[loadFailure,SetLoadFailure]=useState()
    const pendingApiCall=useApiProgress("get","/api/1.0/getUsers?page",true);
    const {content:users}=page;
    const loadUsers=(page)=>{
        SetLoadFailure(false);
        getUsers(page).then((response)=>{
            SetPage(response.data)
        }).catch((error)=>{
SetLoadFailure(true);
        })

    }
    

    useEffect(()=>{
   loadUsers()
    },[])
    return (
        <div className="card">
            <h3 className="card-header text-left" >Who to follow</h3>
            <div className="list-group-fish text-left">
                {users.map((user)=>(
<UserListItem key={user.username} user={user}></UserListItem>
                ))}
            </div>
        </div>
   );
};

export default WhoToFollow;