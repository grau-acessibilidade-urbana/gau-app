import axios from "axios";
import { SIGN_UP, SIGN_UP_ERROR } from '../actionTypes';


axios.defaults.baseURL = 'http://10.0.2.2:3000';

export const addUser = user => {
    return dispatch => {
        axios.post(`/user`, user)
            .then(res => {
                if (res && res.data) {
                    dispatch({ type: SIGN_UP });
                }
            })
            .catch(() => dispatch({ type: SIGN_UP_ERROR }));
    }
}