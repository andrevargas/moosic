import React from 'react';
import './AppBar.css';

const AppBar = ({ title, onMenuPress }) => (
    <div className="AppBar">
        <button className="AppBar__button" onClick={onMenuPress} />
        <span className="AppBar__title">
            {title}
        </span>
        <div className="clearfix" />
    </div>
);

export default AppBar;