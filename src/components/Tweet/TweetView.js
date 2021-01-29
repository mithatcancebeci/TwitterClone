import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultProfileImage from "../DefaultProfileImage";
import LikeIcon from "../Nav/icons/LikeIcon";
import MoreIcon from "../Nav/icons/MoreIcon";
import ReplyIcon from "../Nav/icons/ReplyIcon";
import ReTweet from "../Nav/icons/ReTweet";
import ShareIcon from "../Nav/icons/ShareIcon";
import Stars from "../Nav/icons/Stars";
import ProfilePopover from "../ProfilePopover";

const TweetView = (props) => {
  // const loggedInUser=useSelector((store)=>store.username,store.displayName);
  const { tweet } = props;
  const { userVM, message, timestamp, id } = tweet;
  const { username, displayName } = userVM;

  return (
    <div>
      <div className="card">
        <div className="d-flex">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
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
            <div>{tweet.message}</div>

            <div className="beat">
              <div>
                <ReplyIcon />
              </div>
              <div>
                <ReTweet />
              </div>

              <div>
                <LikeIcon />
              </div>
              <div>
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetView;
