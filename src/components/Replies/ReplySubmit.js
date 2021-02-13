import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { postReply, postTweetAttachment } from '../../api/apiCall';
import { useApiProgress } from '../../Shared/ApiProgress';

import ButtonWithProg from '../ButtonWithProg';
import DefaultProfileImage from '../DefaultProfileImage';
import InputComp from '../InputComp';
import ImageShare from '../Nav/icons/ImageShare';
import ListOutlinedIcon from '../Nav/icons/ListOutlinedIcon';
import ProfileOutlinedIcon from '../Nav/icons/ProfileOutlinedIcon';
import UploadImage from '../UploadImage';

const ReplySubmit = (props) => {
    const [replyMessage, setReplyMessage] = useState("");
    const { image } = useSelector((store) => ({
      image: store.image,
    }));

    const{id}=props;
    const [focused, setFocused] = useState(false);
    const [errors, SetErrors] = useState({});
    const [newImage, SetNewImage] = useState();
  
    const [attachmentId, setAttachmentId] = useState();
   
    useEffect(() => {
      if (!focused) {
        setReplyMessage("");
        SetErrors({});
        SetNewImage();
        setAttachmentId();
      
      }
    }, [focused]);
    useEffect(() => {
      SetErrors({});
    }, [replyMessage]);
   
    const onClickReply = async () => {
      const body = {
        text: replyMessage,
        attachmentId: attachmentId,
      };
      try {
        await postReply(id,body);
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
    const onChangeReplyFile=(event)=>{
      if(event.target.files.length<1){
        return
      }
      const file=event.target.files[0]
      const fileReader=new FileReader();
      fileReader.onloadend=()=>{
       SetNewImage(fileReader.result);
        uploadFile(file)
      }
  fileReader.readAsDataURL(file);
    }
   
    const pendingUploadFile = useApiProgress("post","/api/1.0/tweet-attachments",true);
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
              onChange={(e) =>setReplyMessage(e.target.value)}
              value={replyMessage}
              onFocus={() => setFocused(true)}
              placeholder={"Your Reply Tweet"}
              type="text"
            />
          </div>
          <div className="invalid-feedback">{errors.content}</div>
          <div className="share">
            <div className="share1">
              {!newImage  && (
                <InputComp
                  icon={<ImageShare />}
                  active
                  id="upload-photo"
                  type="file"
                
                  onChange={onChangeReplyFile}
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
              onClick={onClickReply}
              type="submit"
              text={"Reply"}
              className="ttButton"
              disabled={replyMessage.length===0 && !newImage}
            ></ButtonWithProg>{" "}
              
            
            
          </div>
        </form>
      </div>
    );
};

export default ReplySubmit;