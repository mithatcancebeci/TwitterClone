import React from 'react';
import Chat from '../components/Chat';
import Header from '../components/HeaderCard/Header';
import MessageIcon from '../components/Nav/icons/MessageIcon';
import WebSocketDemo from '../components/WebSocketDemo';





import WhoToFollow from '../components/WhoToFollow';

const MessagePage = () => {
    return (
        <div >  <div className="row align-items-start">
        <div className="col">
   <Header text="Messages" icon1={<MessageIcon active={true} className="icon"></MessageIcon>}></Header>
        <WhoToFollow/>
        </div>
        <div className="col">
        <WebSocketDemo/>
        </div>
        <div className="col">
      
        </div>
      </div>
      
        
             
               
          
        
   
        </div> );
};

export default MessagePage;