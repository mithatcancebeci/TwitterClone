import React from 'react';
import Header from '../components/HeaderCard/Header';
import MessageIcon from '../components/Nav/icons/MessageIcon';
import TweetFeed from '../components/Tweet/TweetFeed';
import WhoToFollow from '../components/WhoToFollow';

const MessagePage = () => {
    return (
        <div>
           <Header text="Messages" icon1={<MessageIcon active={true} className="icon"></MessageIcon>}></Header>
           <WhoToFollow/>
        </div>
    );
};

export default MessagePage;