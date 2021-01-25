import React from 'react';

const ExploreOutlinedIcon = (props) => {
    const {text}=props
    return (
        <div className="icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.33698H17.07L17.442 3.06498C17.478 2.65298 17.172 2.28998 16.76 2.25298C16.343 2.22298 15.984 2.52298 15.948 2.93598L15.565 7.33598H9.245L9.615 3.06598C9.652 2.65298 9.345 2.28998 8.935 2.25298C8.515 2.22298 8.158 2.52298 8.122 2.93598L7.74 7.33598H3.782C3.368 7.33598 3.032 7.67298 3.032 8.08598C3.032 8.49898 3.368 8.83598 3.782 8.83598H7.61L7.06 15.163H3C2.586 15.163 2.25 15.499 2.25 15.913C2.25 16.327 2.586 16.663 3 16.663H6.93L6.558 20.935C6.522 21.347 6.828 21.71 7.24 21.747L7.306 21.75C7.691 21.75 8.018 21.455 8.052 21.064L8.435 16.664H14.755L14.385 20.934C14.349 21.347 14.655 21.71 15.067 21.747L15.133 21.75C15.518 21.75 15.845 21.455 15.879 21.064L16.261 16.664H20.218C20.631 16.664 20.968 16.327 20.968 15.914C20.968 15.501 20.631 15.164 20.218 15.164H16.39L16.94 8.83698H21C21.414 8.83698 21.75 8.50098 21.75 8.08698C21.75 7.67298 21.414 7.33698 21 7.33698ZM14.885 15.163H8.565L9.115 8.83698H15.435L14.885 15.163Z" fill="#000"/>
</svg>
<h2>{text}</h2>
        </div>
    );
};

export default ExploreOutlinedIcon;