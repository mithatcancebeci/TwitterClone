import React from 'react';
import Search from './Search';
import Card from './Card'
import WhoToFollow from './WhoToFollow';
const SearchOnTwitter = () => {
    return (
        <div className="text-center">
        <div className="container">
        <ul className="nav flex-column">

        <li className="nav-item"><Search placeholder="Search Twitter" icon="search"></Search></li>
        <li> 
            <WhoToFollow></WhoToFollow>
        </li>
            </ul>
            
        </div></div>
    );
};

export default SearchOnTwitter;
