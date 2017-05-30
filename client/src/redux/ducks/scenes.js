export const NAVIGATE = 'moosic/scenes/NAVIGATE';

export const navigate = payload => ({ type: NAVIGATE, payload });

const initialState = { currentScene: 'main' };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NAVIGATE:
            return { ...state, currentScene: action.payload };
        default:
            return state;
    }
};