import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginForm = ({ onFbResponse }) => (
    <div className="login-form">
        <div className="logo" />
        <h1 className="app-title">Moosic</h1>
        <FacebookLogin
            appId="306225299814733"
            autoLoad={false}
            fields="name,email,picture"
            callback={onFbResponse}
            cssClass="fb-login"
            textButton="Login com Facebook"
            icon={null}
        />
    </div>
);

export default LoginForm;