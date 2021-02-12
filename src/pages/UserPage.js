import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../api/apiCall';

import DefaultProfileImage from '../components/DefaultProfileImage';
import Header from '../components/HeaderCard/Header';
import Stars from '../components/Nav/icons/Stars';
import ProfileCard from '../components/ProfileCard';
import TweetFeed from '../components/Tweet/TweetFeed';
import { useApiProgress } from '../Shared/ApiProgress';

const UserPage = (props) => {
  const [user,setUser]=useState({})
   const {username}=useParams();
   console.log("username" +username)
   const pendingApiCall = useApiProgress('get', "/api/1.0/user/" + username, true);
   useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getUser(username);
        setUser(response.data);
      } catch (error) {
      
      }
    };
    loadUser();
  }, [username]);

    return (
      <div>
        <Header icon={<Stars/>}text={username}></Header>
        <ProfileCard username={username} displayName={user.displayName}/>
       
        
      </div>


    );
};

export default UserPage;
