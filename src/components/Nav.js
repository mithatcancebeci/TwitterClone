import React, { useState } from "react";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import SubjectIcon from "@material-ui/icons/Subject";
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Explore, ExploreOutlined } from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import { useDispatch, useSelector } from "react-redux";
import MoreButton from "./MoreButton";
import ButtonWithProg from "./ButtonWithProg";
import Popover from './Popover'
import { logoutSuccess } from "../redux/authAction";

const Nav = (props) => {
  const hoverless = {
    color: "#1da1f2",
    fontSize: "30px",
  };
  const neverless = {
    color: "#000",
    fontSize: "30px",
  };
  const textinline = {
    color: "#1da1f2",
    fontSize: 18,
    fontFamily: "inherit",
  };
  const textoutline = {
    color: "#000",
    fontSize: 18,
    fontFamily: "inherit",
  };
  const [form, SetForm] = useState({
    home: false,
    explore: false,
    notifications: false,
    message: false,
    bookmarks: false,
    list: false,
    profile: false,
    more: false,
  });
  const [form2, setForm2] = useState({
    home: false,
    explore: false,
    notifications: false,
    message: false,
    bookmarks: false,
    list: false,
    profile: false,
    more: false,
  });
  const { username } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
    username: store.username,
  }));

  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    
  

  dispatch(logoutSuccess);
    
  };

  return (
    
  
        <ul className="nav flex-column">
          <li className="nav-item ">
            <Link to="/">
              <TwitterIcon id="t" style={hoverless}></TwitterIcon>
            </Link>
          </li>

          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                home: true,
                message: false,
                explore: false,
                notifications: false,
                bookmarks: false,
                list: false,
                profile: false,
                more: false,
              })
            }
          >
            <Link
              to="/"
              id="s"
              onClick={() =>
                SetForm({
                  home: true,
                  message: false,
                  explore: false,
                  notifications: false,
                  bookmarks: false,
                  list: false,
                  profile: false,
                  more: false,
                })
              }
            >
              {form.home ? (
                <>
                  <HomeIcon style={hoverless}></HomeIcon>{" "}
                  <strong className="pl-3" style={textinline}>
                    Home
                  </strong>
                </>
              ) : (
                <>
                  <HomeOutlinedIcon
                    style={form2.home ? hoverless : neverless}
                  ></HomeOutlinedIcon>
                  <strong
                    className="pl-3 "
                    style={form2.home ? textinline : textoutline}
                  >
                    Home
                  </strong>{" "}
                </>
              )}
            </Link>
          </li>

          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                home: false,
                message: false,
                explore: true,
                notifications: false,
                bookmarks: false,
                list: false,
                profile: false,
                more: false,
              })
            }
          >
            <Link
              id="s"
              onClick={() =>
                SetForm({
                  home: false,
                  message: false,
                  explore: true,
                  notifications: false,
                  bookmarks: false,
                  profile: false,
                  list: false,
                  more: false,
                })
              }
            >
              {form.explore ? (
                <>
                  <Explore style={hoverless} icon="hashtag"></Explore>
                  <strong className="pl-3" style={textinline}>
                    Explore
                  </strong>
                </>
              ) : (
                <>
                  <ExploreOutlined
                    style={form2.explore ? hoverless : neverless}
                    icon="hashtag"
                  ></ExploreOutlined>
                  <strong
                    className="pl-3 "
                    style={form2.explore ? textinline : textoutline}
                  >
                    {" "}
                    Explore
                  </strong>
                </>
              )}
            </Link>
          </li>
          <li
            className="nav-item pt-3"
            onMouseEnter={() =>
              setForm2({
                message: false,
                home: false,
                explore: false,
                notifications: true,
                bookmarks: false,
                profile: false,
                list: false,
                more: false,
              })
            }
          >
            <Link
              id="s"
              onClick={() =>
                SetForm({
                  home: false,
                  message: false,
                  explore: false,
                  notifications: true,
                  bookmarks: false,
                  list: false,
                  profile: false,
                  more: false,
                })
              }
            >
              {form.notifications ? (
                <>
                  <NotificationsActiveIcon
                    style={hoverless}
                  ></NotificationsActiveIcon>
                  <strong className="pl-3" style={textinline}>
                    Notifications
                  </strong>
                </>
              ) : (
                <>
                  <NotificationsNoneOutlinedIcon
                    style={form2.notifications ? hoverless : neverless}
                  ></NotificationsNoneOutlinedIcon>{" "}
                  <strong
                    className="pl-3"
                    style={form2.notifications ? textinline : textoutline}
                  >
                    Notifications
                  </strong>
                </>
              )}
            </Link>
          </li>
          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                message: true,
                home: false,
                explore: false,
                notifications: false,
                bookmarks: false,
                list: false,
                profile: false,
                more: false,
              })
            }
          >
            <Link
              id="s"
              onClick={() =>
                SetForm({
                  home: false,
                  message: true,
                  explore: false,
                  notifications: false,
                  bookmarks: false,
                  profile: false,
                  list: false,
                  more: false,
                })
              }
            >
              {form.message ? (
                <>
                  <EmailIcon style={hoverless}></EmailIcon>
                  <strong className="pl-3 " style={textinline}>
                    Message
                  </strong>
                </>
              ) : (
                <>
                  <EmailOutlinedIcon
                    style={form2.message ? hoverless : neverless}
                  ></EmailOutlinedIcon>
                  <strong
                    className="pl-3 "
                    style={form2.message ? textinline : textoutline}
                  >
                    Message
                  </strong>
                </>
              )}
            </Link>
          </li>
          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                message: false,
                home: false,
                explore: false,
                notifications: false,
                bookmarks: true,
                profile: false,
                list: false,
                more: false,
              })
            }
          >
            <Link
              id="s"
              onClick={() =>
                SetForm({
                  home: false,
                  message: false,
                  explore: false,
                  notifications: false,
                  bookmarks: true,
                  profile: false,
                  list: false,
                  more: false,
                })
              }
            >
              {form.bookmarks ? (
                <>
                  <BookmarkIcon style={hoverless}></BookmarkIcon>
                  <strong className="pl-3 " style={textinline}>
                    Bookmarks
                  </strong>
                </>
              ) : (
                <>
                  <BookmarkBorderIcon
                    style={form2.bookmarks ? hoverless : neverless}
                  ></BookmarkBorderIcon>
                  <strong
                    className="pl-3 "
                    style={form2.bookmarks ? textinline : textoutline}
                  >
                    Bookmarks
                  </strong>
                </>
              )}
            </Link>
          </li>
          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                message: false,
                home: false,
                explore: false,
                notifications: false,
                bookmarks: false,
                profile: false,
                list: true,
                more: false,
              })
            }
          >
            <Link
              id="s"
              onClick={() =>
                SetForm({
                  home: false,
                  message: false,
                  explore: false,
                  notifications: false,
                  bookmarks: false,
                  profile: false,
                  list: true,
                  more: false,
                })
              }
            >
              {form.list ? (
                <>
                  <SubjectIcon style={hoverless}></SubjectIcon>
                  <strong className="pl-3 " style={textinline}>
                    List
                  </strong>
                </>
              ) : (
                <>
                  <ListOutlinedIcon
                    style={form2.list ? hoverless : neverless}
                  ></ListOutlinedIcon>
                  <strong
                    className="pl-3 "
                    style={form2.list ? textinline : textoutline}
                  >
                    List{" "}
                  </strong>
                </>
              )}
            </Link>
          </li>
          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                message: false,
                home: false,
                explore: false,
                notifications: false,
                bookmarks: false,
                profile: true,
                list: false,
                more: false,
              })
            }
          >
            <Link
              id="s"
              to="/user/:username"
              onClick={() =>
                SetForm({
                  home: false,
                  message: false,
                  explore: false,
                  notifications: false,
                  bookmarks: false,
                  profile: true,
                  list: false,
                  more: false,
                })
              }
            >
              {form.profile ? (
                <>
                  <AccountCircleIcon style={hoverless}></AccountCircleIcon>
                  <strong className="pl-3 " style={textinline}>
                    Profile
                  </strong>
                </>
              ) : (
                <>
                  <AccountCircleOutlinedIcon
                    style={form2.profile ? hoverless : neverless}
                  ></AccountCircleOutlinedIcon>
                  <strong
                    className="pl-3 "
                    style={form2.profile ? textinline : textoutline}
                  >
                    Profile{" "}
                  </strong>
                </>
              )}
            </Link>
          </li>
          <li
            className="nav-item pt-4"
            onMouseEnter={() =>
              setForm2({
                message: false,
                home: false,
                explore: false,
                notifications: false,
                bookmarks: false,
                profile: false,
                list: false,
                more: true,
              })
            }
          >
            <strong>
              <MoreButton
                control="8"
                id="d"
                dropNav="dropup"
                className1="far fa-comment "
                text1="Topics"
                text="More"
                style={form2.more ? textinline : textoutline}
                styleButton={form2.more ? hoverless : neverless}
                className2="fa fa-bolt"
                text2="Moments"
                className3="fas fa-external-link-alt"
                text3="Twitter Ads"
                className4="far fa-chart-bar"
                text4="Analytics"
               className5="fas fa-tools"
                text5="Settings And privacy"
               className6="far fa-question-circle"
                text6="Helps"
               className7="far fa-edit"
                text7="Display"
                className8="fas fa-walking"
                text8="Keyboard shortcuts"
              ></MoreButton>
            </strong>
          </li>
          <li>
          <div >
            <ButtonWithProg
              className="btn btn rounded-pill text-capitalize shadow-none"
              text="Tweet"
              style={{
                backgroundColor: "#1da1f2",
                color: "white",
                fontSize: "17px",
                fontFamily: "inherit",
                width: "200px",
              }}
            ></ButtonWithProg>
             </div>
          </li>
       
         <div style={{paddingTop:"160px"} }>
         <Popover id="e" username={username} logOutClick={onLogoutSuccess}></Popover></div>
     
          
        </ul>
     
    
  );
};

export default Nav;
