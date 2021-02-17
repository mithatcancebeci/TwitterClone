import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultProfileImage from '../DefaultProfileImage';
import ReplyModal from '../Modal/ReplyModal';
import LikeIcon from '../Nav/icons/LikeIcon';
import ReplyIcon from '../Nav/icons/ReplyIcon';
import ReTweet from '../Nav/icons/ReTweet';
import ShareIcon from '../Nav/icons/ShareIcon';
import TweetSubmit from '../Tweet/TweetSubmit';


const ReplyView = (props) => {
    const{reply,page}=props;
const{id,text,user,fileVM,tweet}=reply;
const[modalVisible,setModalVisible]=useState(false);
    return (
        
        <div className="card">
          <div className="d-flex">
            <DefaultProfileImage
              width="48"
              height="48"
              className="rounded-circle"
             
            />
            <div className="flex-fill m-auto pl-2">
              <Link to={page?`/user/${tweet.user.username}`:`/user/${reply.user.username}`} className="text-dark">
                <h6>
                  <strong>{page?tweet.user.displayName:reply.user.displayName}</strong>
                  <span
                    style={{
                      color: "#5b7083",
                      fontSize: "13px",
                      paddingLeft: "3px",
                    }}
                  >
                    @{page?tweet.user.username:reply.user.username}{" "}
                  </span>
                </h6>
              </Link>
              <div>
                <Link to={`/tweet/${tweet.id}`}  className="oneTweet"> {page?tweet.content:reply.text} </Link>
              
              </div>
              {(page?tweet.fileAttachment:reply.fileVM) && (
                <div className="files">
                  {(page?tweet.fileAttachment.fileType:reply.fileVM.fileType).startsWith("image") && (
                    <img
                      className="file-attachments"
                      src={"images/attachments/" + page?tweet.fileAttachment.name:reply.fileVM.name}
                      alt={page?tweet.content:reply.text}
                    ></img>
                  )}
                  {(page?!tweet.fileAttachment.fileType:!reply.fileVM.fileType).startsWith("image") && (
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
                        contentProps={<TweetSubmit id={tweet.id} tR={false}/>}
                         
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
   
    );
};

export default ReplyView;