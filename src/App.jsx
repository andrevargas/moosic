import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import createStore from './redux/createStore';

const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
