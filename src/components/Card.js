import React from 'react';
import Stars from './Nav/icons/Stars';
import './Card.css'
import MoreIcon from './Nav/icons/MoreIcon';
const Card = (props) => {
    const {icon ,text,icon1}=props
    return (
        <div className="heap">
        <div>
        <i>{icon}</i>
      
            <h5>{text}</h5>
           <i>{icon1}</i>
          
        </div>
   
        </div>
    );
};

export default Card;