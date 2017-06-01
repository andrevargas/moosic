export const LOGIN = 'moosic/user/LOGIN';
export const UPDATE_USER_INFO = 'moosic/user/UPDATE_USER_INFO';

export const login = payload => ({ type: LOGIN, payload });
export const updateUserInfo = payload => ({ type: UPDATE_USER_INFO, payload });

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    isUpToDate: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.payload.authResponse.accessToken
            };
        case UPDATE_USER_INFO:
            return { ...state, ...action.payload, isUpToDate: true };
        default:
            return state;
    }
}