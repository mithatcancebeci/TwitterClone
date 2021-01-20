import React from 'react';
import AuthenticationContext from '../Shared/AuthenticationContext';

const HomePage = (props) => {
  const {onLogoutSuccess}=props;
    return ( 
<div className="col md-4">
<h1>Home</h1>  </div>

    );
};

export default HomePage;