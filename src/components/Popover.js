import { MDBBtn, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';
import React from 'react';
import twitter from '../assets/twitter.png'

const Popover = () => {
let name="Mithatcan Cebeci"
let username="@CebeciMithatcan"
    return (
        <div>
         <div style={{ display: "flex" }} className="m-5 p-5">
        <MDBPopover
          placement="top"
          popover
          clickable
          id="popper1"
        >
          <MDBBtn className="pl-3" color="white"><img className="rounded-circle" width="32px" height="32px" src={twitter} alt=""></img><strong className="overflow-auto">{name}</strong><span className="overflow-auto">{username}</span></MDBBtn>
          <div>
            <MDBPopoverHeader><img className="rounded-circle" width="32px" height="32px" src={twitter} alt=""></img><strong className="overflow-auto  ">{name}</strong><span>{username}</span></MDBPopoverHeader>
            
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>
        </div>
        </div>
    );
};

export default Popover;