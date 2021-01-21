import { MDBIcon } from 'mdbreact';
import React from 'react';


const HomePage = (props) => {
  const {onLogoutSuccess}=props;
    return ( 
      <div className="card shadow-sm" >
        <div className="card-header" style={{backgroundColor:"white"}}>
          <strong style={{fontFamily:"inherit",fontSize:"20px"}}>Home</strong>
         <MDBIcon   style={{paddingLeft:"239px"}} icon="star"></MDBIcon>
        </div>
         
 
</div>
  
    
  

    
    );
};

export default HomePage;