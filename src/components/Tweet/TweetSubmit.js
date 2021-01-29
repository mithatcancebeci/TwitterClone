import React, { useEffect, useState } from "react";
import { postTweet, postTweetAttachment } from "../../api/apiCall";
import "./Tweet.css";
import DefaultProfileImage from "../DefaultProfileImage";
import ButtonWithProg from "../ButtonWithProg";
import ImageShare from "../Nav/icons/ImageShare";
import InputComp from "../InputComp";
import Gif from "../Nav/icons/Gif";
import { useSelector } from "react-redux";
import UploadImage from "../UploadImage";
import { useApiProgress } from "../../Shared/ApiProgress";

const TweetSubmit = () => {
  const [tweet, setTweet] = useState("");
  const {image}=useSelector((store)=>({
    image:store.image,
  }))
  const[focused,setFocused]=useState(false)
  const[errors,SetErrors]=useState({});
  const[newImage,SetNewImage]=useState();
  const[attachmentId,setAttachmentId]=useState();
  useEffect(()=>{
    if(!focused){
      setTweet("");
       SetErrors({});
      SetNewImage();
      setAttachmentId();
    }

  },[focused])
  useEffect(() => {
    SetErrors({});
  }, [tweet]);
  const onClickTweet = async () => {
    const body = {
      message: tweet,
      attachmentId: attachmentId,
    };
    try {
      const response = await postTweet(body);
      setFocused(false);
    } catch (e) {
      if(e.response.data.validationErrors){
        SetErrors(e.response.data.validationErrors)
      }
    }
  };
  const uploadFile = async (file) => {
    const attachment = new FormData();
    attachment.append("file", file);
    const response=await postTweetAttachment(attachment);
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
  const pendingUploadFile=useApiProgress('post','/api/1.0/tweet-attachments',true)
  return (
    <div className="tweetSubmit">
      <form>
        <div className="tweetSubmitArea">
          <DefaultProfileImage
            width="48"
            height="48"
            className="rounded-circle"
          />
          <textarea
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            onFocus={() => setFocused(true)}
            placeholder="What's happening?"
            type="text"
          />
           <div className="invalid-feedback">{errors.content}</div>
        </div>

<div className="share">
{!newImage &&<InputComp
            icon={<ImageShare />}
            active
            id="upload-photo"
            type="file"
            name="photo"
            OnChange={onChangeFile}
          />}
          {newImage && <UploadImage image={newImage} uploading={pendingUploadFile}/>}
    <Gif/>
    
            <ButtonWithProg
              onClick={onClickTweet}
              type="submit"
              text="Tweet"
              className="ttButton "
            ></ButtonWithProg>
          
</div>
    
         

  

       
      </form>
    </div>
  );
};

export default TweetSubmit;
