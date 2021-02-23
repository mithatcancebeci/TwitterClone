import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { postReply, postReplyAttachment, postTweetAttachment } from '../../api/apiCall';
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
    const [replyImage, SetReplyImage] = useState();
  
   
    useEffect(() => {
      if (!focused) {
        setReplyMessage("");
        SetErrors({});
        SetReplyImage();

      
      }
    }, [focused]);
    useEffect(() => {
      SetErrors({});
    }, [replyMessage]);
   
    const onClickReply = async () => {
      const body = {
        text: replyMessage,
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
          
      <ButtonWithProg
              onClick={onClickReply}
              type="submit"
              text={"Reply"}
              className="ttButton"
              disabled={replyMessage.length===0 && !replyImage}
            ></ButtonWithProg>{" "}
              
            
            
          </div>
        </form>
      </div>
    );
};

export default ReplySubmit;