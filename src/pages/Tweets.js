import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReply, oneTweet } from '../api/apiCall';

const Tweets = (props) => {
   
    const [tweets,setTweets]=useState({})
    const id=props.match.params.id
    useEffect(()=>{
        const loadOneTweet=async()=>{
        const response= await oneTweet(id);
         setTweets(response.data)

        }
        loadOneTweet();
    },[id])
    return (
        <div>
        {tweets.content}
        </div>
    );
};

export default Tweets;