import { combineReducers } from 'redux';
import scenesReducer from './scenes';
import userReducer from './user';
import albumsReducer from './albums';

export default combineReducers({
    scenes: scenesReducer,
    user: userReducer,
    albums: albumsReducer
});