import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findMessage, getUser, getUsers } from '../api/apiCall';
import DefaultProfileImage from './DefaultProfileImage';
import Header from './HeaderCard/Header';
import WhoToFollow from './WhoToFollow';
import './WebSocketDemo.css'

var stompClient=null;
const WebSocketDemo = () => {
  const {username,displayName,image}=useSelector((store)=>{
    return{
   
      username:store.username,
      displayName:store.displayName,
      image:store.image
    }
   

  });   
  const [user,SetUser]=useState([]);
  const [text,setText]=useState('');
  const [messages, setMessages] = useState([]);
    const connect = () => {
    const Stomp = require("stompjs");
    const stockJsProtocols=["xhr-streaming","xhr-polling"]
    var SockJS = require("sockjs-client");
    
    SockJS = new SockJS("http://localhost:3000/messages",null,{transports:stockJsProtocols});
  
    stompClient = Stomp.over(SockJS);
    stompClient.connect(onConnected
      ,onError);
   
  }; const sendMessage =(msg) => {
    if (msg.trim() !== ""){
        const message = {
        senderName: username,
        recipientName:"user1",
        text: msg,
        
      };
      
      stompClient.send("/app/messages",{},JSON.stringify(message));


      const newMessages = [...messages];
      newMessages.push(message);
      setMessages(newMessages);
   }
  }; 
   const onMessageReceived = (msg) => {
     const users=JSON.parse(msg.body)
      findMessage(users.username,"user1").then((message) => {
        const newMessages = [...messages]
        newMessages.push(message);
        setMessages(newMessages);
      });
    }
    const loadUsers=async()=>{
      const response=await getUsers();
      SetUser(response.data)

    }
  
  const onConnected = () => {
    console.log("connected");
    console.log(username);
  
    stompClient.subscribe(
      "/user/" + username + "/queue/messages",onMessageReceived
    
    );
  };

 console.log(user)
    
      
      
  

  const onError = (err) => {
    console.log(err);
  };
  useEffect(()=>{
    connect();
    loadUsers();
 console.log(messages)
  },[])

 


  return (
    <div>
      <div className="top-head">
        
      
<Link to={`/user/${username}`} className="text-dark" >
          
          <DefaultProfileImage
          
            className="rounded-circle mt-1"
            width="36px"
            height="36px"
            alt={`${username} profile`}
            image={image}
          ></DefaultProfileImage>
       
                           
       
      </Link>  <span style={{fontWeight:600}}>{displayName}</span> <span>@{username}</span>

</div>
<div className="body-head">
{messages.map((msg) => (
              <div className="text-right">
                <p>{msg.text}</p>
                
              </div>
                
))}   <input
              name="user_input"
              size="large"
              placeholder="Write your message..."
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  sendMessage(text);
                  setText("");
                }
              }}
            />

            <button
              icon={<i className="fa fa-paper-plane" aria-hidden="true"></i>}
              onClick={() => {
                sendMessage(text);
                setText("");
              }}
            /> </div>
  </div>
           
          
    
         );
};

export default WebSocketDemo;