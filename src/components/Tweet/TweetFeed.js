import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTweet } from '../../api/apiCall';
import DefaultProfileImage from '../DefaultProfileImage';
import MoreIcon from '../Nav/icons/MoreIcon';
import TweetView from './TweetView';

const TweetFeed = (props) => {
    const [tweetPage,setTweetPage]=useState({

          content:[]
    }
    )
   const username=useParams();
    const { content} = tweetPage;
    useEffect(()=>{
        const loadTweet= async (page)=>{
          try {
         const response= await getTweet(page);
          setTweetPage(response.data)
          } catch (e) {
          
          }
            
           
        
        }
         loadTweet();
    },[username])

    return (
        <div >
{content.map((tweet)=>{
    return <TweetView key={tweet.id} tweet={tweet}/>
})}

</div>


                       
        
    );
};

export default TweetFeed;