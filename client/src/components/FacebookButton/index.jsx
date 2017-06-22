import React from 'react';
import './FacebookButton.css';

const FacebookButton = ({ label, onSubmit }) => (
    <button
        className="FacebookButton"
        type="button"
        onClick={onSubmit}>
        {label}
    </button>
);

export default FacebookButton;