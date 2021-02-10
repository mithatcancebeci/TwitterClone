import React from 'react';
import './DefaultBack.css'
import background from './background.jpg'
const DefaultBackgroundImage = (props) => {
    const {backgroundImage,tempBackImage}=props;
    let imageSource=background;
    if(backgroundImage){
        imageSource = 'images/background/'+ backgroundImage;
    }
    return (
        <div className="BackgroundImage">
          <img   alt={`Profile`} src={ tempBackImage || imageSource} {...props} onError={(event)=>{
            event.target.src=background;
        }}></img>  
        </div>
        
    )
}
export default DefaultBackgroundImage;