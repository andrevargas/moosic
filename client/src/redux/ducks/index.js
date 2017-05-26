import { combineReducers } from 'redux';
import scenesReducer from './scenes';
import userReducer from './user';

export default combineReducers({
    scenes: scenesReducer,
    user: userReducer
});