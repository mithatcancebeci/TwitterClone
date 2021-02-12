import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { getReply, oneTweet } from '../api/apiCall';
import DefaultProfileImage from '../components/DefaultProfileImage';

import Header from '../components/HeaderCard/Header'
import ReplyModal from '../components/Modal/ReplyModal';
import LikeIcon from '../components/Nav/icons/LikeIcon';
import ReplyIcon from '../components/Nav/icons/ReplyIcon';
import ReTweet from '../components/Nav/icons/ReTweet';
import ShareIcon from '../components/Nav/icons/ShareIcon';
import Stars from '../components/Nav/icons/Stars';
import TweetSubmit from '../components/Tweet/TweetSubmit';
const Tweets = (props) => {
  
    const [tweets,setTweets]=useState({})
    const [loaded,setloaded]=useState(false);
    const [modalVisible,setModalVisible]=useState(false)
    const id=props.match.params.id

   console.log("burdayız"+tweets)
    useEffect(()=>{
        const loadOneTweet=async()=>{
          const response= await oneTweet(id);
       
         setTweets(response.data)
       
        setloaded(true)
        }
        loadOneTweet();
    },[id])

    return (
       <div>
            <Header icon={<Stars/>}text="Tweets"/>
     
           
       {loaded && <>
      <div className="card">
        <div className="d-flex">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
            
          />
          <div className="flex-fill m-auto pl-2">
            <Link to={`user/${tweets.user.username}`} className="text-dark">
              <h6>
                <strong>{tweets.user.displayName}</strong>
                <span
                  style={{
                    color: "#5b7083",
                    fontSize: "13px",
                    paddingLeft: "3px",
                  }}
                >
                  @{tweets.user.username}{" "}
                </span>
              </h6>
            </Link>
            <div>
             {tweets.content} 
             
             </div>
            {tweets.fileAttachment && (
              <div className="files">
                {tweets.fileAttachment.fileType.startsWith("image") && (
                  <img
                    className="file-attachments"
                    src={"images/attachments/" + tweets.fileAttachment.name}
                    alt={tweets.content}
                  ></img>
                )}
                {!tweets.fileAttachment.fileType.startsWith("image") && (
                  <strong>Unkown Property</strong>
                )}
              </div>
            )}
            <div className="beat">
              <div>
              <span
                        onClick={()=>{
                         setModalVisible(true)
                                                
                        }}          >
               
               <ReplyIcon badge={tweets.replies_count}/>
      
              
                 
                
                </span>
                </div>
              <div>
                <ReTweet />
              </div>

              <div>
                <LikeIcon />
              </div>
              <div>
               <span><ShareIcon />
              
                </span>
          

              </div>
            
            </div>     {tweets.replies.map((replies)=>{
                return <div key={replies.id}>
                  <div className="card">
        <div className="d-flex">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
            
          />  <div className="flex-fill m-auto pl-2">
          <Link to={`user/${replies.user.username}`} className="text-dark">
            <h6>
              <strong>{replies.user.displayName}</strong>
              <span
                style={{
                  color: "#5b7083",
                  fontSize: "13px",
                  paddingLeft: "3px",
                }}
              >
                @{replies.user.username}{" "}
              </span>
            </h6>
          </Link>
          <div>
             {replies.text} 
             
             </div>
             {replies.fileAttachment && (
              <div className="files">
                {replies.fileAttachment.fileType.startsWith("image") && (
                  <img
                    className="file-attachments"
                    src={"images/attachments/" + replies.fileAttachment.name}
                    alt={replies.text}
                  ></img>
                )}
                {!replies.fileAttachment.fileType.startsWith("image") && (
                  <strong>Unkown Property</strong>
                )}
              </div>
            )}
              <div className="beat">
              <div>
              <div>
              <span
                        onClick={()=>{
                         setModalVisible(true)
                                                
                        }}          >
               
               <ReplyIcon badge={tweets.replies_count}/>
              
                </span>
                </div>
              </div>
              <div>
                <ReTweet />
              </div>

              <div>
                <LikeIcon />
              </div>
              <div>
               <span><ShareIcon />
              
                </span>
          

              </div>
            
            </div> 
          </div>
          </div>
          </div>
                </div>
})} 

           
          </div>
        </div>
      </div> </>}
    </div> 
     
    );
};

export default Tweets;