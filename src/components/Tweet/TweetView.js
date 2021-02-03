import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postLike } from "../../api/apiCall";
import ReplyModal from '../ReplyModal'
import DefaultProfileImage from "../DefaultProfileImage";
import LikeIcon from "../Nav/icons/LikeIcon";
import MoreIcon from "../Nav/icons/MoreIcon";
import ReplyIcon from "../Nav/icons/ReplyIcon";
import ReTweet from "../Nav/icons/ReTweet";
import ShareIcon from "../Nav/icons/ShareIcon";
import Stars from "../Nav/icons/Stars";
import ProfilePopover from "../ProfilePopover";
import TweetSubmit from "./TweetSubmit";

const TweetView = (props) => {
  const loggedInUser=useSelector((store)=>store.username);
 const {tweet} =props;
  const { user, reTweet,content, timestamp,tlike,id,fileAttachment
   } = tweet;
  const { username, displayName,image} = user;
  const ownedByloggedInUser = loggedInUser === username;
  const [toggle,setToggle]=useState(true);  

  const [modalVisible,setModalVisible]=useState(false)
 
    const addLike=async()=>{

  const body={
    
    tlike:toggle?1:-1
    
  }
  
  await postLike(id,body);
  console.log("giriyor")
}



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
            <div>{content}</div>
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
              <div >
                <span onClick={()=>{setModalVisible(!modalVisible)}}><ReplyIcon/>{modalVisible&&<ReplyModal visible={true} icon={<Stars/>} replyProps={<TweetSubmit text="Reply" placeholder="Tweet Your Reply"/>} ></ReplyModal>}</span> 
              </div>
              <div>
                <ReTweet />
              </div>

              <div>
                <LikeIcon />
              </div>
              <div  > 
              <span style={{cursor:"pointer"}} onClick={(e)=>{
               e.stopPropagation();
                addLike()
                setToggle(!toggle)
              }} ><ShareIcon />{tlike}</span>
              </div>
              
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetView;
