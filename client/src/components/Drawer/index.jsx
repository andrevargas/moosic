import React from 'react';
import MotionDrawer from 'react-motion-drawer';
import './Drawer.css';

const Drawer = ({ open, onChange }) => (
    <MotionDrawer open={open} onChange={onChange}>
        <div className="Drawer"></div>
    </MotionDrawer>
);

export default Drawer;