import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

class App extends Component {
    render() {
        return (
            <div>
                <LoginForm onFbResponse={(r) => console.log(r)} />
            </div>
        );
    }
}

export default App;
