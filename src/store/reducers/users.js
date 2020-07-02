import { 
    SIGN_UP, 
    SIGN_UP_ERROR, 
    SIGN_UP_SUCCESS, 
    SIGN_IN, 
    SIGN_IN_SUCCESS, 
    SIGN_IN_ERROR, 
    SIGN_OUT,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
 } from '../actionTypes';

const initialState = {
    isLoading: false,
    error: false,
    newUser: null,
    loggedUser: null,
    token: null
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
                error: action.payload,
            }
        case SIGN_OUT:
            return {
                ...state,
                loggedUser: null
            }
        case UPDATE_USER:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedUser: action.payload
            }
        case UPDATE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;