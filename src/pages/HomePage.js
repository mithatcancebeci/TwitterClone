import React from 'react';
import AuthenticationContext from '../Shared/AuthenticationContext';

const HomePage = (props) => {
  const {onLogoutSuccess}=props;
    return ( 
 <div className="container ">
  <div className="row align-items-start">
    <div className="col ">
 
    </div>
    <div className="col ">
  <h1>Home</h1>
    </div>
    <div className="col ">
    <h1>Explore</h1>
    <button onClick={onLogoutSuccess}>ss</button>
    </div>
  </div>
  </div>

    );
};

export default HomePage;