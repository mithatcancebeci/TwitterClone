import React from 'react'
import volone1 from '../assets/volone1.jpg.jpg'
const DefaultProfileImage=(props)=>{
    const {image,tempimage}=props;
    let imageSource=volone1;
    if(image){
        imageSource = 'images/profile/'+ image;
    }
    return (
        <img   alt={`Profile`} src={ tempimage || imageSource} {...props} onError={(event)=>{
            event.target.src=volone1;
        }}></img>
    )
}
export default DefaultProfileImage