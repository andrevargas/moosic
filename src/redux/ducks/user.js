export const LOGIN_SUCCESS = 'moosic/user/LOGIN_SUCCESS';

export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });

const initialState = {
    isLoggedIn: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload, isLoggedIn: true };
        default:
            return state;
    }
}