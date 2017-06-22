import React from 'react';
import './Loading.css';

const Loading = ({ visible }) => (
    <div className="Loading" style={{ display: visible ? 'block' : 'none' }}>
        <div className="Loading__image" />
        <span className="Loading__text">MOOOOOOO</span>
    </div>
);

export default Loading;