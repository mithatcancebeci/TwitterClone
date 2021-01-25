import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from './icons/HomeOutlinedIcon';
import TwitterIcon from './icons/TwitterIcon';
import MessageIcon from './icons/MessageIcon';
import './Nav.css';
import ExploreOutlinedIcon from './icons/ExploreOutlinedIcon';
import NotificationOutlinedIcon from './icons/NotificationOutlinedIcon';
import BookMarksOutlinedIcon from './icons/BookMarksOutlinedIcon';

const Nav = () => {
    return (
     <div className="navi">
     <HomeOutlinedIcon text="Home"/>
     <ExploreOutlinedIcon text="Explore"/>
     <NotificationOutlinedIcon text="Notifications"/>
      <MessageIcon text="Message"/>
      <BookMarksOutlinedIcon text="Bookmarks"/>
       </div>

    );
};

export default Nav;