import { SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS } from '../actionTypes';

const initialState = { 
    isLoading: false,
    error: false,
 };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case SIGN_UP_ERROR:
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