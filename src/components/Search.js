import { MDBIcon } from 'mdbreact';
import React from 'react';

const Search = (props) => {
    const {placeholder,icon}=props
    return (
        <div>
           <MDBIcon  color="grey" icon={icon}></MDBIcon> <input placeholder={placeholder} type="text" className="rounded-pill outline"></input>
        </div>
    );
};

export default Search;