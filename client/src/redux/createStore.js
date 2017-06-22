import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getAccessToken } from '../lib/storage';
import rootReducer from './ducks';

const getInitialState = () => {
    const token = getAccessToken();
    if (token) {
        return {
            user: { isLoggedIn: true, accessToken: token }
        };
    } else {
        return {};
    }
};

export default function() {

    const middleware = [thunkMiddleware];

    if (process.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    const store = createStore(
        rootReducer,
        getInitialState(),
        applyMiddleware(...middleware)
    );

    return store;

};
