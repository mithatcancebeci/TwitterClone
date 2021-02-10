import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ButtonWithProg from "./ButtonWithProg";
import DefaultBackgroundImage from "./DefaultBackgroundImage/DefaultBackgroundImage";
import DefaultProfileImage from "./DefaultProfileImage";
import { updateUser } from "../api/apiCall";
import "./ProfileCard.css";
import ReplyModal from "./ReplyModal";
import { updateSuccess } from "../redux/authAction";
import Stars from "./Nav/icons/Stars";
import EditModal from "./EditModal";
const ProfileCard = (props) => {
  const {displayName,username}=props;
  const [inEditMode, SetEditMode] = useState(false);
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
        <div className="T-weet">
          <span>Tweets</span>
        </div>
        <div className="R-tweet">
          <span>Tweet & Replies</span>
        </div>
        <div className="T-media">
          <span>Media</span>
        </div>
        <div className="T-Like">
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
