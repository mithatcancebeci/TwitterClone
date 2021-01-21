import React from 'react'
import twitter from '../assets/twitter.png'
const DefaultProfileImage=(props)=>{
    const {image,tempimage}=props;
    let imageSource=twitter;
    if(image){
        imageSource = 'images/profile/'+ image;
    }
    return (
        <img   alt={`Profile`} src={ tempimage || imageSource} {...props} onError={(event)=>{
            event.target.src=twitter;
        }}></img>
    )
}
export default DefaultProfileImage