//  eslint-disable
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProfileFunc = ({props}) =>{
    const [click, setClick] = useState(1);

  
    return (
    <div className = "mouseClick">
        <h1>{click}</h1>
        <button onClick={() =>{
            setClick(click + 1);
        }}>CLICK VÀO ĐÂY!</button>
    </div>
    );
}

ProfileFunc.propTypes = {
    props : PropTypes.array,
};

export default ProfileFunc;