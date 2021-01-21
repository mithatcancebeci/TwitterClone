import React from 'react';
import Search from './Search';
import Card from './Card'
const SearchOnTwitter = () => {
    return (
        <div className="text-center">
        <div className="container">
        <ul className="nav flex-column">

        <li className="nav-item"><Search placeholder="Search Twitter" icon="search"></Search></li>
        <li> 
            <Card></Card>
        </li>
            </ul>
            
        </div></div>
    );
};

export default SearchOnTwitter;
