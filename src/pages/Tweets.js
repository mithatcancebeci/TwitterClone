import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

import { oneTweet } from '../api/apiCall';
import DefaultProfileImage from '../components/DefaultProfileImage';

import Header from '../components/HeaderCard/Header'

import LikeIcon from '../components/Nav/icons/LikeIcon';
import ReplyIcon from '../components/Nav/icons/ReplyIcon';
import ReTweet from '../components/Nav/icons/ReTweet';
import ShareIcon from '../components/Nav/icons/ShareIcon';
import Stars from '../components/Nav/icons/Stars';
import ReplyFeed from '../components/Replies/ReplyFeed';
import ReplyView from '../components/Replies/ReplyView';
const Tweets = (props) => {

    const [tweets,setTweets]=useState({})
    const [loaded,setloaded]=useState(false);
    const [modalVisible,setModalVisible]=useState(false)
    const id=props.match.params.id

   console.log("burdayız"+tweets)
    useEffect(()=>{
        const loadOneTweet=async(page)=>{
          const response= await oneTweet(id,page);
       
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
            <Link to={`/user/${tweets.user.username}`} className="text-dark">
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
          <ReplyFeed id={id}/>
              </div>
           
            </div>   
          </div>
        </div>
      </div> </>}
    </div> 
     
    );
};

export default Tweets;