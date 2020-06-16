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
            .catch(error => dispatch({ type: SIGN_UP_ERROR }))
            .then(res => {
                if (res && res.data) {
                    dispatch({ type: SIGN_UP_SUCCESS, payload: user });
                } else {
                    dispatch({ type: SIGN_UP_ERROR });
                }
            })
    }
}

export const updateUser = user => {
    return dispatch => {
        // dispachar update user
        axios.put(`/user/${user.id}`, user)
            .then(res => {
                if (res && res.data) {
                    // dispachar update user success, passando como payload o user
                } else {
                    // dispachar erro
                }
            })
            .catch(() => { /*dispachar erro */ });
    }
}

export const login = login => {
    return dispatch => {
        dispatch({ type: SIGN_IN });
        axios.post(`/auth/login`, {
            username: login.email,
            password: login.password,
        })
            .catch(error => dispatch({ type: SIGN_IN_ERROR }))
            .then(res => {
                if (res && res.data) {
                    console.log('usuario logado: ' + JSON.stringify(res.data));
                    dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
                } else {
                    dispatch({ type: SIGN_IN_ERROR });
                }
            })
    }
}