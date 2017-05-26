import { createAction, handleActions } from 'redux-actions';

export const navigate = createAction('moosic/scenes/NAVIGATE');

const initialState = { currentScene: 'main' };

export default handleActions({
    [navigate]: (state, { payload }) => ({ ...state, currentScene: payload })
}, initialState);