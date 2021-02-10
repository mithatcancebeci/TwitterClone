import React, { useEffect, useState } from "react";
import {  postReply, postTweet, postTweetAttachment } from "../../api/apiCall";
import "./Tweet.css";
import DefaultProfileImage from "../DefaultProfileImage";
import ButtonWithProg from "../ButtonWithProg";
import ImageShare from "../Nav/icons/ImageShare";
import InputComp from "../InputComp";
import { useSelector } from "react-redux";
import UploadImage from "../UploadImage";
import { useApiProgress } from "../../Shared/ApiProgress";
import ProfileOutlinedIcon from "../Nav/icons/ProfileOutlinedIcon";
import ListOutlinedIcon from "../Nav/icons/ListOutlinedIcon";

const TweetSubmit = (props) => {
  const [tweetMessage, setTweet] = useState("");
  const { image } = useSelector((store) => ({
    image: store.image,
  }));
  const{tR}=props;

  const [focused, setFocused] = useState(false);
  const [errors, SetErrors] = useState({});
  const [newImage, SetNewImage] = useState();
  const [attachmentId, setAttachmentId] = useState();

  useEffect(() => {
    if (!focused) {
      setTweet("");
      SetErrors({});
      SetNewImage();
      setAttachmentId();
    
    }
  }, [focused]);
  useEffect(() => {
    SetErrors({});
  }, [tweetMessage]);
  const onClickTweet = async () => {
    const body = {
      content: tweetMessage,
      attachmentId: attachmentId,
    };
    try {
      await postTweet(body);
      setFocused(false);
    } catch (e) {
      if (e.response.data.validationErrors) {
        SetErrors(e.response.data.validationErrors);
      }
    }
  };
  const onClickReply = async () => {
    const body = {
      text: tweetMessage,
      attachmentId: attachmentId,
    };
    try {
      await postReply(1,body);
      setFocused(false);
    } catch (e) {
      if (e.response.data.validationErrors) {
        SetErrors(e.response.data.validationErrors);
      }
    }
  };
    const uploadFile = async (file) => {
    const attachment = new FormData();
    attachment.append("file", file);
    const response = await postTweetAttachment(attachment);
    setAttachmentId(response.data.id);
  };
  const onChangeFile = (event) => {
    if (event.target.files.length < 1) {
      return;
    }
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      SetNewImage(fileReader.result);
      uploadFile(file);
    };
    fileReader.readAsDataURL(file);
  };
  const pendingUploadFile = useApiProgress(
    "post",
    "/api/1.0/tweet-attachments",
    true
  );
  return (
    <div className="tweetSubmit">
      <form>
        <div className="tweetSubmitArea">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
            image={image}
          />

          <textarea
            onChange={(e) =>setTweet(e.target.value)}
            value={tweetMessage}
            onFocus={() => setFocused(true)}
            placeholder={tR?"What's Happening?":"Your Reply Tweet"}
            type="text"
          />
        </div>
        <div className="invalid-feedback">{errors.content}</div>
        <div className="share">
          <div className="share1">
            {!newImage && (
              <InputComp
                icon={<ImageShare />}
                active
                id="upload-photo"
                type="file"
              
                onChange={onChangeFile}
              ></InputComp>
            )}
            {newImage && (
              <UploadImage
                image={newImage}
                uploading={pendingUploadFile}
                icon1={<ProfileOutlinedIcon />}
                icon={<ListOutlinedIcon />}
              ></UploadImage>
            )}
          </div>
    <ButtonWithProg
            onClick={tR ? onClickTweet : onClickReply}
            type="submit"
            text={tR?"Tweet":"Reply"}
            className="ttButton"
            disabled={tweetMessage.length===0 && !newImage}
          ></ButtonWithProg>{" "}
            
          
          
        </div>
      </form>
    </div>
  );
};

export default TweetSubmit;

