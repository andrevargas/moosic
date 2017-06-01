import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/ducks/user';
import { saveAccessToken } from '../lib/storage';

class Login extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        window.FB.login(response => {
            this.props.login(response);
            saveAccessToken(response.authResponse.accessToken);
        });
    }
    render() {
        return <LoginForm onSubmit={this.onSubmit} />
    }
}

const mapDispatchToProps = dispatch => ({
    login: response => dispatch(login(response))
});

export default connect(null, mapDispatchToProps)(Login);
