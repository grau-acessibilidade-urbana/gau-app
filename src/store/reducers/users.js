import { SIGN_UP } from '../actionTypes';

const initialState = { };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state
            };
        default:
            return state;
    }
}