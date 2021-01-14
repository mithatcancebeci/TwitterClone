import React from 'react';
import Nav from '../components/Nav';

const HomePage = () => {
    return ( 
 <div className="container ">
  <div className="row align-items-start">
    <div className="col ">
 <Nav></Nav>
    </div>
    <div className="col ">
  <h1>Home</h1>
    </div>
    <div className="col ">
    <h1>Explore</h1>
    </div>
  </div>
  </div>

    );
};

export default HomePage;