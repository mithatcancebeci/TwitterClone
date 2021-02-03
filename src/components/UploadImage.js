import React from 'react';
import './UploadImage.css'
const UploadImage = (props) => {
  const {image,uploading,icon,icon1}=props;
    return (
        <div >
          <div className="text-center">
             <img className="attachments" src={image} alt="tweet-attachment"></img>
        
          </div> 
          <div className="tagPeople">
            
               <i>{icon1}</i> <span> Tag People</span>  
            
          
             <i>{icon}</i> <span> Add Description</span>  
            
          
          </div>
              
            <div className="overlay" style={{ opacity: uploading ? 1 : 0 }}>
      <div className="d-flex justify-content-center h-100">
        <div className="spinner-border text-light m-auto">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default UploadImage;