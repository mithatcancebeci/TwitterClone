import React, { useEffect, useState } from 'react';
import {getReplies} from '../../api/apiCall'
import ReplyView from './ReplyView';

const ReplyFeed = (props) => {
   const [RepliesPage,setRepliesPage]=useState({
       content:[],
       number:0,
       last:true
   })
   const{username}=props
   const {id}=props;
   const {content}=RepliesPage
   
    useEffect(()=>{
        const getReply = async (page) => {
            try {
              const response = await getReplies(username,id,page);
              setRepliesPage((previousRepliesPage) => ({
                ...response.data,
                content: [...previousRepliesPage.content, ...response.data.content],
              }));
            } catch (error) {}
          };
      
  
     getReply();
  
    },[username]);
    return (
        <div>
            {content.map((reply) => {
        return <ReplyView key={reply.id} reply={reply}></ReplyView>;
      })} 
        </div>
    );
};

export default ReplyFeed;