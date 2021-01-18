import React, { useCallback, useState } from "react";
import ButtonWithProg from "./ButtonWithProg";
import TwitterIcon from "@material-ui/icons/Twitter";
import { blue } from "@material-ui/core/colors";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import EmailIcon from "@material-ui/icons/Email";
import {
  Explore,
  ExploreOutlined,
  HomeOutlined,
  TramOutlined,
} from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { MDBIcon, Lightbox, MDBView, MDBMask } from "mdbreact";
const Nav = (props) => { 
  const hoverless={
 color:"#1da1f2",
  fontSize:"40px"
  }
  const neverless={
    color:"#000",
    fontSize:"40px"
  }
  const textinline={
        color:"#1da1f2",
        fontSize:25 ,
        fontFamily:"arial"
  }
  const textoutline={
    color:"#000",
    fontSize:25,
    fontFamily:"arial"
}
  const [form, SetForm] = useState({
    home: false,
    explore: false,
    notifications: false,
    message: false,
  });
const [form2,setForm2]=useState({
  home:false,
  explore:false,
  notifications:false,
  message:false
})
  return (
    <div className="col ml-5">
      <ul className="nav flex-column ml-5">
        <li className="nav-item " id="s">
          
            <Link>
              <TwitterIcon style={hoverless}></TwitterIcon>

             
            </Link>
               </li>
               <div className="d-flex bd-highlight">

        <li className="nav-item" id="d" onMouseEnter={() => setForm2({home:true,message:false})}>
         
            <Link  onClick={() => SetForm({ home: true, message: false })}>
              {form.home ? (<>
                <HomeIcon 
                  style={hoverless}
                ></HomeIcon> <span  style={textinline}>Home</span></>
              ) : (<>
                <HomeOutlinedIcon
                  style={form2.home?hoverless:neverless}
                ></HomeOutlinedIcon><span    style={form2.home?textinline:textoutline}>Home</span> </>
              )}
            
              
             
            </Link>

         
        </li>
        </div>
        <li className="nav-item  " onMouseEnter={() =>setForm2({message:true,home:false})}>
          <MDBView hover>
            <Link onClick={() => SetForm({ home: false, message: true })}>
              {form.message ? (
                <EmailIcon
                  style={{ color: "#1da1f2", fontSize: "40px" }}
                ></EmailIcon>
              ) : (
                <EmailOutlinedIcon
                  style={{ color: "#000", fontSize: "40px" }}
                ></EmailOutlinedIcon>
              )}

               
                <MDBMask overlay="blue-slight">
                  <EmailIcon
                    style={{ color: "#1da1f2", fontSize: "40px" }}
                  ></EmailIcon>
                </MDBMask>
        
                <MDBMask overlay="blue-slight">
                  <EmailOutlinedIcon
                    style={{ color: "#1da1f2", fontSize: "40px" }}
                  ></EmailOutlinedIcon>
                </MDBMask>
              
            </Link>
          </MDBView>
        </li>
        <li className="nav-item pt-2">
          <MDBView hover>
            {" "}
            <Link
              onClick={() =>
                SetForm({ home: false, message: false, explore: true })
              }
            >
              {form.explore ? (
                <MDBIcon
              
                  style={{ color: "#1da1f2", fontSize: "40px" }}
                  icon="hashtag"
                ></MDBIcon>
              ) : (
                <MDBIcon
                  
                  style={{ color: "#000", fontSize: "40px" }}
                  icon="hashtag"
                ></MDBIcon>
              )}
            <MDBMask overlay="blue-slight">
             <MDBIcon  icon="hashtag" style={{color:"#1da1f2",fontSize:"40px"}}></MDBIcon>
                </MDBMask>
             
            </Link>
          </MDBView>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
