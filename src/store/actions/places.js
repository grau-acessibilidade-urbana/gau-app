import Geolocation from '@react-native-community/geolocation';
import { SET_PLACE, QUERY_CHANGED, UPDATE_CURRENT_LOCATION, FIND_PLACES } from '../actionTypes';
import * as googleApi from '../../api/google';

export function setPlace(currentLocation, placeId) {
    return async (dispatch) => {
        try {
            const payload = await googleApi.getPlaceDetailsById(currentLocation, placeId);
            dispatch({ type: SET_PLACE, payload });
        } catch (error) {
            dispatch({ type: SET_PLACE, payload: error });
        }
    }
}

export function findPlaces(currentLocation, query) {
    return async (dispatch) => {
        try {
            const payload = await googleApi.findNearbyPlacesByText(currentLocation, query);
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

