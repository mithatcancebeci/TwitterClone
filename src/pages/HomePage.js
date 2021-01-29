import React from 'react';
import Card from '../components/Card'
import Stars from '../components/Nav/icons/Stars';
import TweetFeed from '../components/Tweet/TweetFeed';
import TweetSubmit from '../components/Tweet/TweetSubmit';
import TweetView from '../components/Tweet/TweetView';
import WhoToFollow from '../components/WhoToFollow';

const HomePage = () => {
  return (
    <div>
   <Card icon1={<Stars/>} text="Home"/>
   <TweetSubmit/>
   
 <TweetFeed/>
   </div>
  
  );
};

export default HomePage;