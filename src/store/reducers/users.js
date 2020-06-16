import { SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS, SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actionTypes';

const initialState = {
    isLoading: false,
    error: false,
    newUser: null,
    loggedUser: null,
    token: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newUser: action.payload,
                error: false,
            }
        case SIGN_UP_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        case SIGN_IN:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                loggedUser: action.payload.user,
                error: false,
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}

export default reducer;