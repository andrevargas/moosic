import React from 'react';
import FacebookButton from '../FacebookButton';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => (
    <div className="LoginForm">
        <div className="LoginForm__logo" />
        <h1 className="LoginForm__title">Moosic</h1>
        <FacebookButton onFbResponse={onLogin} />
    </div>
);

export default LoginForm;