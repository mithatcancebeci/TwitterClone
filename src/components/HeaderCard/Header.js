import React from "react";
import "./Header.css";

const Header = (props) => {
  const { icon, text, icon1, ses } = props;
  return (
    <div className="heap">
      <div>
        <i>{icon}</i>
        <div>
          <h5>{text}</h5>

          <span className="badge">{ses}</span>
        </div>

        <i>{icon1}</i>
      </div>
    </div>
  );
};

export default Header;
