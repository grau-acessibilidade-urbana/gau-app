import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
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
  UPDATE_USER_ERROR,
} from '../actionTypes';

const config = {
  baseURL: 'https://gau-api.herokuapp.com',
};

export const addUser = (user) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP });
    axios
      .post(`/user`, user, config)
      .catch(() => dispatch({ type: SIGN_UP_ERROR }))
      .then((res) => {
        if (res && res.data) {
          dispatch({ type: SIGN_UP_SUCCESS, payload: user });
        } else {
          dispatch({ type: SIGN_UP_ERROR });
        }
      });
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER });
    const token = await AsyncStorage.getItem('token');
    axios
      .put(`/user/${user.id}`, user, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: UPDATE_USER_ERROR, payload: error });
      })
      .then((res) => {
        if (res && res.data) {
          dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
        } else {
          dispatch({ type: UPDATE_USER_ERROR });
        }
      });
  };
};

// eslint-disable-next-line no-shadow
export const login = (login) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_IN });
    axios
      .post(
        `/auth/login`,
        {
          username: login.email,
          password: login.password,
        },
        config
      )
      .catch((error) => dispatch({ type: SIGN_IN_ERROR, payload: error }))
      .then(async (res) => {
        if (res && res.data) {
          await AsyncStorage.setItem('token', res.data.token);
          dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
        } else {
          dispatch({ type: SIGN_IN_ERROR });
        }
      });
  };
};

export const loginGoogle = (idToken) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_IN });
    axios
      .post(`/auth/login/${idToken}`, null, config)
      .catch((error) => dispatch({ type: SIGN_IN_ERROR, payload: error }))
      .then(async (res) => {
        if (res && res.data) {
          await AsyncStorage.setItem('token', res.data.token);
          dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
        } else {
          dispatch({ type: SIGN_IN_ERROR });
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: SIGN_OUT });
  };
};
