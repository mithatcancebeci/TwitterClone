import { MDBIcon } from 'mdbreact';
import React from 'react';
import twitter from '../assets/twitter.png'


const HomePage = (props) => {
  const {onLogoutSuccess}=props;
    return ( 
      <div className="card ">
        <div className="card-header" style={{backgroundColor:"white"}}>
          <strong style={{fontFamily:"inherit",fontSize:"20px"}}>Home</strong>
         <MDBIcon   style={{paddingLeft:"239px"}} icon="star"></MDBIcon>
        </div>

  <div className="card-body">  
  <div className="">
<img src={twitter} height="36px" width="36px" className="image-fit rounded"></img> <br></br><textarea   style={{paddingRight:"30px"}}></textarea></div>
 

</div>
      </div>
    
  

    
    );
};

export default HomePage;