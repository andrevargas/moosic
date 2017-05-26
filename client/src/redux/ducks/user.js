import { createAction, handleActions } from 'redux-actions';

export const login = createAction('moosic/user/LOGIN');
export const loginSuccess = createAction('moosic/user/LOGIN_SUCCESS');
export const logout = createAction('moosic/user/LOGOUT');
export const logoutSuccess = createAction('moosic/user/LOGOUT_SUCCESS');

const initialState = { isLoggedIn: false };

export default handleActions({
    [loginSuccess]: (state, action) => ({ ...state, isLoggedIn: true }),
    [logoutSuccess]: (state, action) => ({ ...state, isLoggedIn: false })
}, initialState);