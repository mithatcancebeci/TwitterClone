import React from 'react';
import Header from '../components/HeaderCard/Header'
import Stars from '../components/Nav/icons/Stars';

import TweetFeed from '../components/Tweet/TweetFeed';
import TweetSubmit from '../components/Tweet/TweetSubmit';
import Tweets from './Tweets';


const HomePage = () => {
   return (
    <div>
   <Header icon1={<Stars/>} text="Home"/>
   <TweetSubmit tR={true} text="Tweet" placeholder="What's Happening?"/>

   <TweetFeed/>
   
   </div>
  
  );
};

export default HomePage;