import React from 'react';
import MotionDrawer from 'react-motion-drawer';
import Avatar from '../Avatar';
import './Drawer.css';

const Drawer = ({ open, onChange, user }) => (
    <MotionDrawer open={open} onChange={onChange}>
        <div className="Drawer">
            <div className="Drawer__header">
                <div className="Drawer__user">
                    <Avatar source={`//graph.facebook.com/${user.userID}/picture?height=90&width=90`} />
                    <h3 className="Drawer__title">{user.name}</h3>
                    <span className="Drawer__subtitle">{user.email}</span>
                </div>
            </div>
        </div>
    </MotionDrawer>
);

export default Drawer;