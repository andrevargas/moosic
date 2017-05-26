import React from 'react';
import menuIcon from '../../images/ic_menu_white_48px.svg';
import './AppBar.css';

const AppBar = ({ title, onMenuPress }) => (
    <div className="AppBar">
        <button className="AppBar__button" onClick={onMenuPress}>
            <img src={menuIcon} className="AppBar__icon" alt="Menu" />
        </button>
        <span className="AppBar__title">
            {title}
        </span>
    </div>
);

export default AppBar;