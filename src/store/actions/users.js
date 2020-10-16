import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from 'react-native-google-signin';
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

export const signinSilently = () => {
  return async (dispatch) => {
    const authMethod = await AsyncStorage.getItem('authMethod');
    const token = await AsyncStorage.getItem('token');
    if (!authMethod || !token) {
      return;
    }

    if (authMethod === 'app') {
      axios
        .post(`/auth/refresh/${token}`, null, {
          ...config,
        })
        .catch((error) => {
          console.error(error);
        })
        .then((res) => {
          if (res && res.data) {
            dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
          }
        });
    } else {
      GoogleSignin.configure({
        scopes: [],
        webClientId:
          '274535529742-jor0pqgm5390s1ef96a3kism5jkv4khr.apps.googleusercontent.com',
        offlineAccess: false,
        hostedDomain: '',
        loginHint: '',
        forceConsentPrompt: true,
        accountName: '',
      });
      try {
        const userInfo = await GoogleSignin.signInSilently();
        if (userInfo && userInfo.idToken) {
          dispatch(loginGoogle(userInfo.idToken));
        }
      } catch (error) {
        console.error(error);
      }
    }
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
          await AsyncStorage.setItem('authMethod', 'app');
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
          await AsyncStorage.setItem('authMethod', 'google');
          dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
        } else {
          dispatch({ type: SIGN_IN_ERROR });
        }
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('authMethod');
    dispatch({ type: SIGN_OUT });
  };
};
