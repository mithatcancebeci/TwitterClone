import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTweet } from "../../api/apiCall";
import { useApiProgress } from "../../Shared/ApiProgress";
import TweetView from "./TweetView";

const TweetFeed = (props) => {
  const [tweetPage, setTweetPage] = useState({
    content: [],
    number: 0,
    last: true,
  });
  const {username}=useParams();
  
  console.log("username",username) 
   const { content } = tweetPage;
  const path= username? `/api/1.0/user/${username}/tweets?page=`: '/api/1.0/tweets?page='
  const initialTweetLoad=useApiProgress('get',path);

  useEffect(() => {
    const loadTweet = async (page) => {
      try {
        const response = await getTweet(username,page);
        setTweetPage((previousTweetPage) => ({
          ...response.data,
          content: [...previousTweetPage.content, ...response.data.content],
        }));
      } catch (error) {}
    };

   loadTweet();

  },[username]);
if(content.length===0){
  return <div className="alert alert-secondary text-center">{initialTweetLoad? "Alarm":"There are no tweets"}</div>
}
  return (
    <div>
      {content.map((tweet) => {
        return <TweetView key={tweet.id} tweet={tweet} />;
      })}
    </div>
  );
};

export default TweetFeed;
