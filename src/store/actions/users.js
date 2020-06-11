import axios from "axios";
import {
    SIGN_UP, 
    SIGN_UP_ERROR, 
    SIGN_UP_SUCCESS,
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
} from '../actionTypes';


axios.defaults.baseURL = 'http://10.0.2.2:3000';

export const addUser = user => {
    return dispatch => {
        dispatch({ type: SIGN_UP });
        axios.post(`/user`, user)
            .then(res => {
                if (res && res.data) {
                    dispatch({ type: SIGN_UP_SUCCESS, payload: user });
                } else {
                    dispatch({ type: SIGN_UP_ERROR });
                }
            })
            .catch(() => dispatch({ type: SIGN_UP_ERROR }));
    }
}

export const login = login => {
    return dispatch => {
        dispatch({ type: SIGN_IN });
        axios.post(`/auth/login`, login)
            .then(res => {
                if (res && res.data) {
                    dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
                } else {
                    dispatch({ type: SIGN_IN_ERROR });
                }
            })
            .catch(() => dispatch({ type: SIGN_IN_ERROR }));
    }
}