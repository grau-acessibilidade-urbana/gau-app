import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import * as googleApi from '../../api/google';
import {
  CLEAR_SELECTED_PLACE,
  FIND_PLACES,
  FIND_PLACE_RATINGS,
  FIND_USER_RATINGS,
  FIND_USER_RATINGS_ERROR,
  FIND_USER_RATINGS_SUCCESS,
  LIKE_COMMENT,
  LIKE_COMMENT_ERROR,
  LOADING_DETAILS,
  QUERY_CHANGED,
  RATE_PLACE,
  RATE_PLACE_ERROR,
  RATE_PLACE_SUCCESS,
  REPLY_COMMENT,
  REPLY_COMMENT_ERROR,
  SET_ANSWER1,
  SET_ANSWER2,
  SET_ANSWER3,
  SET_ANSWER4,
  SET_ANSWER5,
  SET_COMMENT,
  SET_PLACE,
  SET_USER_RATING,
  UPDATE_CURRENT_LOCATION,
  FIND_USER_RATING_SUCCESS,
  FIND_USER_RATING_ERROR,
  FIND_PLACE_RATINGS_SUMMARY,
} from '../actionTypes';

const config = {
  baseURL: 'http://10.0.2.2:3000',
};

export function setPlace(currentLocation, placeId) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_DETAILS });
      const payload = await googleApi.getPlaceDetailsById(
        currentLocation,
        placeId
      );
      dispatch({ type: SET_PLACE, payload });
      if (payload) {
        dispatch(findPlaceRatings(placeId));
        dispatch(findUserRatingByPlace(placeId));
        dispatch(findPlaceRatingsSummary(placeId));
      }
    } catch (error) {
      dispatch({ type: SET_PLACE, payload: error });
    }
  };
}

export function findPlaceRatings(placeId) {
  return async (dispatch) => {
    axios
      .get(`/place/${placeId}`, config)
      .catch((error) => {
        console.error(error);
      })
      .then((res) => {
        if (res && res.data) {
          dispatch({ type: FIND_PLACE_RATINGS, payload: res.data });
        }
      });
  };
}

export function findPlaceRatingsSummary(placeId) {
  return (dispatch) => {
    axios
      .get(`/place/${placeId}/ratings/summary`, config)
      .catch((error) => {
        console.error(error);
      })
      .then((res) => {
        if (res && res.data) {
          dispatch({ type: FIND_PLACE_RATINGS_SUMMARY, payload: res.data });
        }
      });
  };
}

export function findPlaces(currentLocation, query) {
  return async (dispatch) => {
    try {
      const payload = await googleApi.findNearbyPlacesByText(
        currentLocation,
        query
      );
      console.log('payload: ' + JSON.stringify(payload));
      dispatch({ type: FIND_PLACES, payload });
    } catch (error) {
      dispatch({ type: FIND_PLACES, payload: error });
    }
  };
}

export function clearSelectedPlace() {
  return { type: SET_PLACE, payload: null };
}

export function queryChanged(query) {
  return async (dispatch) => {
    if (query && query.length > 0) {
      try {
        const payload = await googleApi.getPlacesPredictions(query);
        dispatch({ type: QUERY_CHANGED, payload });
      } catch (error) {
        dispatch({ type: QUERY_CHANGED, payload: null });
      }
    } else {
      dispatch({ type: QUERY_CHANGED, payload: null });
    }
  };
}

export function updateCurrentLocation() {
  return (dispatch) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const payload = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        };
        dispatch({ type: UPDATE_CURRENT_LOCATION, payload });
      },
      (err) => dispatch({ type: UPDATE_CURRENT_LOCATION, payload: err })
    );
  };
}

export function likeComment(placeId, commentId) {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    axios
      .post(`/place/${placeId}/comments/${commentId}/like`, null, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: LIKE_COMMENT_ERROR, payload: error });
      })
      .then(() => {
        dispatch({ type: LIKE_COMMENT, payload: commentId });
      });
  };
}

export function replyComment(placeId, commentId, responseComment) {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    axios
      .post(`/place/${placeId}/comments/${commentId}/reply`, responseComment, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: REPLY_COMMENT_ERROR, payload: error });
      })
      .then((res) => {
        if (res && res.data) {
          dispatch({ type: REPLY_COMMENT, payload: res.data });
        } else {
          dispatch({ type: REPLY_COMMENT_ERROR });
        }
      });
  };
}

export function ratePlace(placeRating) {
  return async (dispatch) => {
    dispatch({ type: RATE_PLACE });
    const token = await AsyncStorage.getItem('token');
    axios
      .post(`/place/rate`, placeRating, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: RATE_PLACE_ERROR, payload: error });
      })
      .then(() => {
        dispatch(findPlaceRatings(placeRating.placeId));
        dispatch({ type: RATE_PLACE_SUCCESS });
      });
  };
}

export function updatePlaceRating(placeRating) {
  return async (dispatch) => {
    dispatch({ type: RATE_PLACE });
    const token = await AsyncStorage.getItem('token');
    axios
      .put(`/place/rate`, placeRating, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: RATE_PLACE_ERROR, payload: error });
      })
      .then(() => {
        dispatch(findUserRatings());
        dispatch({ type: RATE_PLACE_SUCCESS });
      });
  };
}

export function setAnswer1(answer) {
  return (dispatch) => {
    dispatch({ type: SET_ANSWER1, payload: answer });
  };
}

export function setAnswer2(answer) {
  return (dispatch) => {
    dispatch({ type: SET_ANSWER2, payload: answer });
  };
}

export function setAnswer3(answer) {
  return (dispatch) => {
    dispatch({ type: SET_ANSWER3, payload: answer });
  };
}

export function setAnswer4(answer) {
  return (dispatch) => {
    dispatch({ type: SET_ANSWER4, payload: answer });
  };
}

export function setAnswer5(answer) {
  return (dispatch) => {
    dispatch({ type: SET_ANSWER5, payload: answer });
  };
}

export function setComment(comment) {
  return (dispatch) => {
    dispatch({ type: SET_COMMENT, payload: comment });
  };
}

export function findUserRatings() {
  return async (dispatch) => {
    dispatch({ type: FIND_USER_RATINGS });
    const token = await AsyncStorage.getItem('token');
    axios
      .get(`/place/user/ratings`, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: FIND_USER_RATINGS_ERROR, payload: error });
      })
      .then(async (res) => {
        if (res && res.data) {
          const userRatingsPromises = res.data.map(async (userRating) => {
            const placeDetails = await googleApi.getPlaceDetailsById(
              null,
              userRating.placeId
            );
            return {
              ...userRating,
              placeName: placeDetails.name,
              placeImage: placeDetails.image,
            };
          });
          const userRatings = await Promise.all(userRatingsPromises);
          dispatch({ type: FIND_USER_RATINGS_SUCCESS, payload: userRatings });
        } else {
          dispatch({ type: FIND_USER_RATINGS_ERROR });
        }
      })
      .finally(() => dispatch({ type: CLEAR_SELECTED_PLACE }));
  };
}

export function findUserRatingByPlace(placeId) {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    axios
      .get(`/place/${placeId}/user/ratings`, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        dispatch({ type: FIND_USER_RATING_ERROR, payload: error });
        console.error(error);
      })
      .then((res) => {
        console.log('res :' + JSON.stringify(res));
        if (res && res.data) {
          dispatch({ type: FIND_USER_RATING_SUCCESS, payload: res.data });
        }
      });
  };
}

export function setUserRating(userRating) {
  return (dispatch) => {
    dispatch({ type: SET_USER_RATING, payload: userRating });
  };
}

// function getCurrentPosition() {
//   return new Promise((resolve, reject) => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const payload = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.02,
//           longitudeDelta: 0.02,
//         };
//         console.log('payload:' + JSON.stringify(payload));
//         resolve(payload);
//       },
//       (err) => reject(err)
//     );
//   });
// }

// export function setUpUserLocation() {
//   return (dispatch) => {
//     getCurrentPosition()
//       .catch((error) => {
//         console.log('error: ' + JSON.stringify(error));
//         dispatch({ type: UPDATE_CURRENT_LOCATION, payload: error });
//       })
//       .then((location) => {
//         console.log('location: ' + JSON.stringify(location));
//         dispatch({ type: UPDATE_CURRENT_LOCATION, payload: location });
//         dispatch(findPlaces(location));
//       });
//   };
// }
