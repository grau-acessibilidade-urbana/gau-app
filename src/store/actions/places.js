import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import * as googleApi from '../../api/google';
import { FIND_PLACES, LOADING_DETAILS, QUERY_CHANGED, SET_PLACE, UPDATE_CURRENT_LOCATION } from '../actionTypes';

const config = {
    baseURL: 'http://10.0.2.2:3000',
}

export function setPlace(currentLocation, placeId) {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_DETAILS })
            const payload = await googleApi.getPlaceDetailsById(currentLocation, placeId);
            if (payload) {
                axios.get(`/place/${placeId}`, config)
                    .catch(error => {
                        dispatch({ type: SET_PLACE, payload: error });
                    })
                    .then(res => {
                        if (res && res.data) {
                            payload._id = res.data._id;
                            payload.comments = res.data.comments;
                            payload.averageScore = res.data.averageScore;
                        }
                        dispatch({ type: SET_PLACE, payload });
                    });
            } else {
                dispatch({ type: SET_PLACE, payload });
            }
        } catch (error) {
            dispatch({ type: SET_PLACE, payload: error });
        }
    }
}

export function findPlaces(currentLocation, query) {
    return async (dispatch) => {
        try {
            const payload = await googleApi.findNearbyPlacesByText(currentLocation, query);
            console.log('payload: ' + JSON.stringify(payload));
            dispatch({ type: FIND_PLACES, payload });
        } catch (error) {
            dispatch({ type: FIND_PLACES, payload: error });
        }
    }
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
    }
}

export function updateCurrentLocation() {
    return (dispatch) => {
        Geolocation.getCurrentPosition(position => {
            LOADING_DETAILS
            const payload = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
            }
            dispatch({ type: UPDATE_CURRENT_LOCATION, payload });
        }, err => dispatch({ type: UPDATE_CURRENT_LOCATION, payload: err }));
    }
}

