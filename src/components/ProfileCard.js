import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import ButtonWithProg from "./ButtonWithProg";
import DefaultBackgroundImage from "./DefaultBackgroundImage/DefaultBackgroundImage";
import DefaultProfileImage from "./DefaultProfileImage";
import { updateUser } from "../api/apiCall";
import "./ProfileCard.css";
import ReplyModal from "./Modal/ReplyModal";
import { updateSuccess } from "../redux/authAction";
import Stars from "./Nav/icons/Stars";
import EditModal from "./Modal/EditModal"
import TweetFeed from "./Tweet/TweetFeed";
import ReplyFeed from "./Replies/ReplyFeed";
const ProfileCard = (props) => {
  const {displayName,username}=props;
  
  const [inEditMode, SetEditMode] = useState(false);
  const [form,setForm]=useState({
    tweets:false,
    tweetsandReplies:false,
    media:false,
    like:false

  })
  let className="T-weet"
  let className1="T-weet-active"
  return (
    <div className="profileCard">
      <div>
        <DefaultBackgroundImage />
      </div>
      <div className="profileImage">
        <DefaultProfileImage
          width="132"
          height="132"
          style={{ position: "relative" }}
          className="rounded-circle"
        />{" "}
        <ButtonWithProg onClick={() => SetEditMode(true)} text="Edit Profile" />
        {inEditMode && (
          <div>
            <EditModal visible={true} />
          </div>
        )}
      </div>
      <div className="user">
        <div className="userinfo">
          <span>{displayName}</span>
        </div>{" "}
        <div className="userinfo2">
          <span>{username}</span>
        </div>
        <div className="bio">
          <span>Samsun-SDÜ</span>
        </div>
        <div className="local">
          <span>Localation</span>

          <span>www.mithatcancebeci.com</span>

          <span>Birthday</span>
          <div className="followers">Follow Followers</div>
        </div>
      </div>
      <div className="profileCard-footer">
        <div onClick={(previousForm) => {
          setForm({ ...previousForm, tweet: true }); 
        }} >
          <div className={form.tweet?className1:className}>
           <span>Tweets</span>  
            
          </div>
      
           <div>
           
          </div>
         
        </div>
        <div onClick={(previousForm) => {
          setForm({ ...previousForm, tweetsandReplies:true }); 
        }} >
          <div className={form.tweetsandReplies?className1:className}>
             <span>Tweets&Replies</span>
          </div>
         
       
      
        </div>
        <div onClick={(previousForm) => {
          setForm({ ...previousForm, media:true }); 
        }} >
          <div className={form.media?className1:className}>
             <span >Media</span>
          </div>
         
       
      
        </div>
        <div onClick={(previousForm) => {
          setForm({ ...previousForm, like:true }); 
        }} >
          <div className={form.like?className1:className}>
             <span>Likes</span>
          </div>
         
       
      
        </div>
      </div>         
     {form.tweet && <TweetFeed/>}
     {form.tweetsandReplies &&<> <TweetFeed/> <ReplyFeed username={username}/></>}
    </div>
  );
};

export default ProfileCard;
