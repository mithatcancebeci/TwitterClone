import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "./icons/HomeOutlinedIcon";
import TwitterIcon from "./icons/TwitterIcon";
import MessageIcon from "./icons/MessageIcon";
import "./Nav.css";
import ExploreOutlinedIcon from "./icons/ExploreOutlinedIcon";
import NotificationOutlinedIcon from "./icons/NotificationOutlinedIcon";
import BookMarksOutlinedIcon from "./icons/BookMarksOutlinedIcon";
import ListOutlinedIcon from "./icons/ListOutlinedIcon";
import ProfileOutlinedIcon from "./icons/ProfileOutlinedIcon";
import ButtonWithProg from "../ButtonWithProg";
import MoreButton from "../MoreButton";
import MoreIcon from "./icons/MoreIcon";
import Topic from "../MoreButtonIcons/Topic";
import Moments from "../MoreButtonIcons/Moments";
import TwitterAds from "../MoreButtonIcons/TwitterAds";
import Analytics from "../MoreButtonIcons/Analytics";
import Setting from "./icons/Setting";
import HelpCenter from "../MoreButtonIcons/HelpCenter";
import DisplayIcon from "../MoreButtonIcons/DisplayIcon";
import Keyboard from "../MoreButtonIcons/Keyboard";
import ProfilePopover from "../ProfilePopover";



const Nav = () => {
  const [form, SetForm] = useState({
    home: false,
    explore: false,
    notification: false,
    message: false,
    bookmarks: false,
    list: false,
    profile: false,
    more: false,
  });
  let className = "icon";
  const consoleLog = (element) => {
    console.log(element.target);
  };
  let className1 = "icon active";

  return (
    <div className="navi" onClick={consoleLog}>
      <Link to="">
        {" "}
        <TwitterIcon />
      </Link>
      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, home: true });
        }}
      >
        <HomeOutlinedIcon
          className={form.home ? className1 : className}
          active={form.home}
          text="Home"
        />
      </Link>
      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, explore: true });
        }}
      >
        <ExploreOutlinedIcon
          className={form.explore ? className1 : className}
          active={form.explore}
          text="Explore"
        />
      </Link>
      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, notification: true });
        }}
      >
        {" "}
        <NotificationOutlinedIcon
          className={form.notification ? className1 : className}
          active={form.notification}
          text="Notifications"
        />
      </Link>
      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, message: true });
        }}
      >
        {" "}
        <MessageIcon
          className={form.message ? className1 : className}
          active={form.message}
          text="Message"
        />
      </Link>

      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, bookmarks: true });
        }}
      >
        {" "}
        <BookMarksOutlinedIcon
          className={form.bookmarks ? className1 : className}
          active={form.bookmarks}
          text="Bookmarks"
        />
      </Link>
      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, list: true });
        }}
      >
        {" "}
        <ListOutlinedIcon
          className={form.list ? className1 : className}
          active={form.list}
          text="List"
        />
      </Link>
      <Link
        to=""
        onClick={(previousForm) => {
          SetForm({ ...previousForm, profile: true });
        }}
      >
        <ProfileOutlinedIcon
          className={form.profile ? className1 : className}
          active={form.profile}
          text="Profile"
        />
      </Link>
            <MoreButton 
        control="8"
        icon={<MoreIcon text="More" active={true} />}
        icon1={<Topic />} 
        icon2={<Moments />}
        icon3={<TwitterAds />}
        icon4={<Analytics />}
        icon5={
          <Setting
            text="Setting and privacy"
            className="moreicon"
            fill="#5b7083"
          />
        }
        icon6={<HelpCenter/>}
        icon7={<DisplayIcon/>}
        icon8={<Keyboard/>}
      ></MoreButton>
      <ButtonWithProg className="tweetButton" text="Tweet"/>
      <ProfilePopover className="profilePopover"  username="@CebeciMithatcan" displayName="MithatcanCebeci" icon={<MoreIcon active={false}/>}/>
    </div>
  );
};

export default Nav;
