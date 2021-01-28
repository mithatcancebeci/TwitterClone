import React, { useState } from "react";
import { postTweet } from "../../api/apiCall";
import "./Tweet.css";
import DefaultProfileImage from "../DefaultProfileImage";
import ButtonWithProg from "../ButtonWithProg";
const TweetSubmit = () => {
  const [tweet, setTweet] = useState("");
  const onClickTweet = async () => {
    const body = {
      message: tweet,
    };
    try {
      const response = await postTweet(body);
    } catch (e) {}
  };
  return (
    <div className="tweetSubmit">
      <form>
        <div className="tweetSubmitArea">
          <DefaultProfileImage width="48" height="48" className="rounded-circle" />
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            placeholder="What's happening?"
            type="text"
          />
        </div>
            <div className="tweetButtons">
              
                
                  <ButtonWithProg
          onClick={onClickTweet}
          type="submit"
          text="Tweet"
          className="ttButton"
        ></ButtonWithProg>
            </div>
      
      </form>
    </div>
  );
};

export default TweetSubmit;
