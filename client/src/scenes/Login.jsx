import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginSuccess } from '../redux/ducks/user';

class Login extends Component {
    render() {
        return <LoginForm onLogin={this.props.loginSuccess}/>
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: response => dispatch(loginSuccess(response))
});

export default connect(null, mapDispatchToProps)(Login);
