import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReplyModal from "../Modal/ReplyModal";
import DefaultProfileImage from "../DefaultProfileImage";
import LikeIcon from "../Nav/icons/LikeIcon";
import ReplyIcon from "../Nav/icons/ReplyIcon";
import ReTweet from "../Nav/icons/ReTweet";
import ShareIcon from "../Nav/icons/ShareIcon";
import TweetSubmit from "./TweetSubmit";



const TweetView = (props) => {
    const { tweet} = props;
    const {
    user,
    reTweet,
    content,
    timestamp,
    tlike,
    id,
    replies_count,
    fileAttachment,
  } = tweet;
  const { username, displayName, image } = user;
 const [modalVisible, setModalVisible] = useState(false);
 
 let xp;  

  return (
    <div>
      <div className="card">
        <div className="d-flex">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
            image={image}
          />
          <div className="flex-fill m-auto pl-2">
            <Link to={`user/${username}`} className="text-dark">
              <h6>
                <strong>{displayName}</strong>
                <span
                  style={{
                    color: "#5b7083",
                    fontSize: "13px",
                    paddingLeft: "3px",
                  }}
                >
                  @{username}{" "}
                </span>
              </h6>
            </Link>
            <div>
              <Link to={`tweet/${id}`} className="oneTweet"> {content} </Link>
             
             </div>
            {fileAttachment && (
              <div className="files">
                {fileAttachment.fileType.startsWith("image") && (
                  <img
                    className="file-attachments"
                    src={"images/attachments/" + fileAttachment.name}
                    alt={content}
                  ></img>
                )}
                {!fileAttachment.fileType.startsWith("image") && (
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
               
               <ReplyIcon badge={replies_count}/>
                  {modalVisible && (
                 
                <div>
                  {fileAttachment?<ReplyModal
                      have={true}
                      tUsername={username}
                      tDisplayName={displayName}
                      replyProps={content}
                      attachmentProps={fileAttachment.name}
                      visible={true}
                      contentProps={<TweetSubmit id={id} tR={false}/>} 
                    ></ReplyModal>:<ReplyModal replyProps={content}   tUsername={username}
                    tDisplayName={displayName}   have={false} visible={true} contentProps={<TweetSubmit id={id} tR={false}/>}/>}
                 </div>
              
                 
                  )}
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
            
            </div> 
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetView;
