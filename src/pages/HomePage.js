import React from 'react';
import Header from '../components/Header'
import Stars from '../components/Nav/icons/Stars';
import TweetFeed from '../components/Tweet/TweetFeed';
import TweetSubmit from '../components/Tweet/TweetSubmit';


const HomePage = () => {
  return (
    <div>
   <Header icon1={<Stars/>} text="Home"/>
   <TweetSubmit text="Tweet" placeholder="What's Happening?"/>
   <TweetFeed/>
   </div>
  
  );
};

export default HomePage;