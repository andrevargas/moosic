import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './FacebookButton.css';

const FacebookButton = ({ onFbResponse }) => (
    <FacebookLogin
        appId="306225299814733"
        autoLoad={false}
        fields="name,email,picture"
        callback={onFbResponse}
        cssClass="FacebookButton"
        textButton="Login com Facebook"
        icon={null}
    />
);

export default FacebookButton;