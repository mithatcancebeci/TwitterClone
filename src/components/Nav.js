import React,{useState } from "react";
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import SubjectIcon from '@material-ui/icons/Subject';
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {
  Explore,
  ExploreOutlined,

} from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import UserPage from "../pages/UserPage";
import { useDispatch, useSelector } from "react-redux";
import MoreButton from "./MoreButton";

const Nav = (props) => {
  const hoverless = {
    color: "#1da1f2",
    fontSize: "40px",
  };
  const neverless = {
    color: "#000",
    fontSize: "40px",
  };
  const textinline = {
    color: "#1da1f2",
    fontSize: 19,
    fontFamily: "inherit",
  };
  const textoutline = {
    color: "#000",
    fontSize: 19,
    fontFamily: "inherit",
  };
  const [form, SetForm] = useState({
    home: false,
    explore: false,
    notifications: false,
    message: false,
    bookmarks:false,
    list:false,
    profile:false,
    more:false,
  });
  const [form2, setForm2] = useState({
    home: false,
    explore: false,
    notifications: false,
    message: false,
    bookmarks:false,
    list:false,
    profile:false,
    more:false
  });
  const  {username}=useSelector((store)=>({
    isLoggedIn:store.isLoggedIn,
    username:store.username
  }));

  const dispatch=useDispatch();
  const onLogoutSuccess=()=>{
    dispatch(onLogoutSuccess)
  }


  return (
    <div className="col ml-5 pl-5">
      <div className="row">
      <ul className="nav flex-column ml-3">
        <li className="nav-item ">
          <Link to="">
            <TwitterIcon id="t" style={hoverless}></TwitterIcon>
          </Link>
        </li>

        <li
          className="nav-item pt-4"
          onMouseEnter={() =>
            setForm2({ home: true, message: false, explore: false ,notifications:false,bookmarks:false,list:false,profile:false,more:false})
          }
        >
          <Link
          to="/login"
            id="s"
            onClick={() =>
              SetForm({ home: true, message: false, explore: false ,notifications:false,bookmarks:false,list:false,profile:false,more:false})
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
              bookmarks:false,
              list:false,
              profile:false,
              more:false
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
                bookmarks:false,
                profile:false,
                list:false,
                more:false
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
              bookmarks:false,
              profile:false,
              list:false,
              more:false
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
                bookmarks:false,
                list:false,
                profile:false,
                more:false
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
              bookmarks:false,
              list:false,
              profile:false,
              more:false,
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
                bookmarks:false,
                profile:false,
                list:false,
                more:false
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
              bookmarks:true,
              profile:false,
              list:false,
              more:false
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
                bookmarks:true,
                profile:false,
                list:false,
                more:false
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
                  style={form2.bookmarks? hoverless : neverless}
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
              bookmarks:false,
              profile:false,
              list:true,
              more:false
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
                bookmarks:false,
                profile:false,
                list:true,
                more:false
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
                  style={form2.list? hoverless : neverless}
                ></ListOutlinedIcon>
                <strong
                  className="pl-3 "
                  style={form2.list ? textinline : textoutline}
                >
List                </strong>
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
              bookmarks:false,
              profile:true,
              list:false,
              more:false
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
                bookmarks:false,
                profile:true,
                list:false,
                more:false
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
                  style={form2.profile? hoverless : neverless}
                ></AccountCircleOutlinedIcon>
                <strong
                  className="pl-3 "
                  style={form2.profile ? textinline : textoutline}
                >
Profile                </strong>
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
              bookmarks:false,
              profile:false,
              list:false,
              more:true
            })
          }
        >
        <a id="d">
       <MoreButton 
       control="8"  
       dropNav="dropup" 
       far1 icon1="comment" text1="Topics" text="More" style={form2.more?textinline:textoutline}
       far2 icon2="bolt" text2="Moments" 
              ></MoreButton></a>
     </li>
 <li>     <button></button>     </li>
 <li></li>
      </ul>

    </div></div>
  );
};

export default Nav;
