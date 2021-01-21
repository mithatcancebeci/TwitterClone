import React from "react";
import MoreButton from "./MoreButton";
import "./Picker.css";

const Card = () => {
  //header
  return (
    <div className="card shadow-none">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-left" style={{borderTopRightRadius:"15px",borderTopLeftRadius:"15px",backgroundColor:"#ededed"}}>
         
     
          <span
         
            style={{ font: "inherit", fontWeight: "bolder" }}
          >
          Trends for you 
          </span>
         <i className="fas fa-tools " style={{paddingLeft:"150px"}}></i>
        </li>
        <li className="list-group-item text-left" style={{backgroundColor:"#ededed"}}>
          {" "}
          <span className="text-right">
            <MoreButton control="2" className1="far fa-smile"></MoreButton>
          </span>
          <span
            className="d-flex-auto"
            style={{ font: "inherit", fontWeight: "bolder" }}
          >
            #Hello
          </span>
          <span className="d-flex" style={{ fontSize: 12 }}>
            1500tweets
          </span>
        </li>
        <li className="list-group-item text-left" style={{backgroundColor:"#ededed"}}>
          <span className="text-right">
            <MoreButton></MoreButton>
          </span>
          <span
            className="d-flex-auto"
            style={{ font: "inherit", fontWeight: "bolder" }}
          >
            #Hello
          </span>
          <span className="d-flex" style={{ fontSize: 12 }}>
            1500tweets
          </span>
        </li>
      </ul>
      <div className="card-footer"style={{backgroundColor:"#ededed",borderBottomRightRadius:"30px",borderBottomLeftRadius:"30px"}}>Shower</div>
    </div>
  );
};

export default Card;
