import React from 'react';
import FacebookButton from '../FacebookButton';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => (
    <div className="LoginForm">
        <div className="LoginForm__logo" />
        <h1 className="LoginForm__title">Moosic</h1>
        <FacebookButton onSubmit={onSubmit} label="Entrar com Facebook" />
    </div>
);

export default LoginForm;