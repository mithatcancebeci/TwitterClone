import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserOfReplies } from '../api/apiCall';

const ReplyFeed = (props) => {
   const [RepliesPage,setRepliesPage]=useState({
       content:[],
       number:0,
       last:true
   })
   const{username}=props;
   const {content}=RepliesPage
   
    useEffect(()=>{
        const getReplies = async (page) => {
            try {
              const response = await getUserOfReplies(username,page);
              setRepliesPage((previousRepliesPage) => ({
                ...response.data,
                content: [...previousRepliesPage.content, ...response.data.content],
              }));
            } catch (error) {}
          };
      
  
     getReplies();
  
    },[username]);
    return (
        <div>
            {content.map((replies) => {
        return <div key={replies.id}>{replies.tweet.user.password}</div>;
      })} 
        </div>
    );
};

export default ReplyFeed;