import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; 
import rootReducer from './ducks';

export default function() {

    const middleware = [thunkMiddleware];

    if (process.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );

    return store;

};
