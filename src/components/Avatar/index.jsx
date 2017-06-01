import React from 'react';
import './Avatar.css';

const Avatar = ({ source }) => (
    <img
        src={source}
        alt="Profile"
        className="Avatar"
    />
);

export default Avatar;