import React from 'react';

import DefaultProfileImage from '../components/DefaultProfileImage';
import Header from '../components/Header';

const UserPage = () => {
    const username="Mithatcan";
    return (
        <div>
<Header text={`${username}`}/>
<div className="card">
<div className="backgd-img">
     


  <div className="card-body">
        
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
 </div>
</div>
 </div>
 </div>

    );
};

export default UserPage;
