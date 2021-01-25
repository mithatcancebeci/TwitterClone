import React from 'react';

const BookMarksOutlinedIcon = (props) => {
    const {text}=props
    return (
        <div className="icon">
            <svg width="32" height="32" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M19.9 23.5C19.743 23.5 19.588 23.45 19.458 23.356L12 17.928L4.54198 23.358C4.31398 23.522 4.01198 23.548 3.75998 23.418C3.50998 23.291 3.34998 23.033 3.34998 22.751V5.59998C3.34998 4.35998 4.35998 3.34998 5.59998 3.34998H18.398C19.638 3.34998 20.648 4.35998 20.648 5.59998V22.75C20.648 23.032 20.49 23.29 20.238 23.418C20.132 23.473 20.015 23.5 19.898 23.5H19.9ZM12 16.25C12.155 16.25 12.31 16.298 12.44 16.394L19.15 21.277V5.59998C19.15 5.18798 18.813 4.84998 18.4 4.84998H5.59998C5.18698 4.84998 4.84998 5.18798 4.84998 5.59998V21.277L11.56 16.394C11.69 16.298 11.845 16.25 12 16.25Z" fill="#000"/>
</svg>
<h2>{text}</h2>
        </div>
    );
};

export default BookMarksOutlinedIcon;