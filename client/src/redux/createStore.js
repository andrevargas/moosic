import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './ducks';

export default function() {

    const middleware = [];

    if (process.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );

    return store;

};
