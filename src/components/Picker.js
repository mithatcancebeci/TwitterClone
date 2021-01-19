import React from 'react';
import { Link } from 'react-router-dom';
import MoreButton from './MoreButton';
import './Picker.css'
const Picker = (props) => {
 

    return (
        <div className="container">
            <MoreButton 
            dropNav="dropup" control="4" icon1="comment" icon2="comment" icon3="comment" icon4="comment" text1="Topic" text2="tex2"></MoreButton>
           </div>
    );
};

export default Picker;