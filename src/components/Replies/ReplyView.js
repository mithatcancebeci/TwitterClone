import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultProfileImage from '../DefaultProfileImage';
import ReplyModal from '../Modal/ReplyModal';
import LikeIcon from '../Nav/icons/LikeIcon';
import ReplyIcon from '../Nav/icons/ReplyIcon';
import ReTweet from '../Nav/icons/ReTweet';
import ShareIcon from '../Nav/icons/ShareIcon';


const ReplyView = (props) => {
    const{reply}=props;
const{id,text,user,fileVM,tweet}=reply;
const[modalVisible,setModalVisible]=useState(false);
    return (
        <div>
            <div>
        <div className="card">
          <div className="d-flex">
            <DefaultProfileImage
              width="48"
              height="48"
              className="rounded-circle"
             
            />
            <div className="flex-fill m-auto pl-2">
              <Link to={`/user/${tweet.user.username}`} className="text-dark">
                <h6>
                  <strong>{tweet.user.displayName}</strong>
                  <span
                    style={{
                      color: "#5b7083",
                      fontSize: "13px",
                      paddingLeft: "3px",
                    }}
                  >
                    @{reply.tweet.user.username}{" "}
                  </span>
                </h6>
              </Link>
              <div>
                <Link to={`/tweet/${tweet.id}`}  className="oneTweet"> {tweet.content} </Link>
              
              </div>
              {tweet.fileAttachment && (
                <div className="files">
                  {tweet.fileAttachment.fileType.startsWith("image") && (
                    <img
                      className="file-attachments"
                      src={"images/attachments/" + tweet.fileAttachment.name}
                      alt={tweet.content}
                    ></img>
                  )}
                  {!tweet.fileAttachment.fileType.startsWith("image") && (
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
                
                <ReplyIcon badge={tweet.replies_count}/>
                    {modalVisible && (
                  
                  <div>
                    {tweet.fileAttachment?<ReplyModal
                        have={true}
                        
                        tUsername={tweet.user.username}
                        tDisplayName={tweet.user.displayName}
                        replyProps={tweet.content}
                        attachmentProps={tweet.fileAttachment.name}
                        visible={true}
                         
                      ></ReplyModal>:<ReplyModal replyProps={tweet.content}   tUsername={tweet.user.username}
                      tDisplayName={tweet.user.displayName}   have={false} visible={true}/>}
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
        </div>
    );
};

export default ReplyView;