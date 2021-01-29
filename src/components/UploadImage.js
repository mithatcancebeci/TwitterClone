import React from 'react';

const UploadImage = ({image,uploading}) => {
    return (
        <div>
            <img className="img-thumbnail" src={image} alt="tweet-attachment"> </img>
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