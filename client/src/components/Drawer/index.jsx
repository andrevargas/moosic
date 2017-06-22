import React from 'react';
import MotionDrawer from 'react-motion-drawer';
import Avatar from '../Avatar';
import logo from '../../images/logo.png';
import './Drawer.css';

const Drawer = ({ open, onChange, user }) => (
    <MotionDrawer open={open} onChange={onChange}>
        <div className="Drawer">
            <div className="Drawer__header">
                <div className="Drawer__user">
                    <Avatar source={`//graph.facebook.com/${user.id}/picture?height=90&width=90`} />
                    <h3 className="Drawer__title">{user.name}</h3>
                    <span className="Drawer__subtitle">{user.email}</span>
                </div>
            </div>
            <div className="Drawer__footer">
                <span className="Drawer__copyright">Moosic &copy; 2017</span>
                <img src={logo} alt="Moosic" className="Drawer__logo" />
                <br />
                <span className="Drawer__author">Made with ♥ by @andrevargas</span>
            </div>
        </div>
    </MotionDrawer>
);

export default Drawer;