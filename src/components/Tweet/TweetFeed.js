import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTweet } from '../../api/apiCall';
import DefaultProfileImage from '../DefaultProfileImage';
import MoreIcon from '../Nav/icons/MoreIcon';

const TweetFeed = (props) => {
    const [tweetPage,setTweetPage]=useState({
        message:[],
        last:true,
        number:0,
    })
    const {username}=useParams();
    const{displayName}=props;
    useEffect(()=>{
        const loadTweet= async (page)=>{
          try {
           const response=await getTweet(page);
          } catch (e) {
          
          }
             
           
        
        }
    },[username])

    const {message}=tweetPage;
    return (
        <div>
            <div className="card">
<div className="card-body"> <DefaultProfileImage  width="48" height="48" className="rounded-circle
"/>
<div className="head">
    <strong>{displayName}</strong>@{username}
</div>
{message.map((tweet)=>{
    return <div  key={tweet.id} tweet={tweet} >
        
        
    </div>})}
    <span><MoreIcon></MoreIcon></span>

</div>


                       
            </div>
        </div>
    );
};

export default TweetFeed;