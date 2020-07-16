import { FIND_PLACES, FIND_PLACE_RATING, FIND_PLACE_RATING_ERROR, FIND_PLACE_RATING_SUCCESS, LOADING_DETAILS, QUERY_CHANGED, SET_PLACE, UPDATE_CURRENT_LOCATION } from '../actionTypes'

const initialState = {
    selectedPlace: null,
    predictions: [],
    currentLocation: null,
    places: null,
    loadingDetails: false,
    loadingRating: false,
    placeRating: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACE:
            return {
                ...state,
                selectedPlace: action.payload,
                predictions: [],
                loadingDetails: false,
            }
        case QUERY_CHANGED:
            return {
                ...state,
                predictions: action.payload
            }
        case UPDATE_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload
            }
        case FIND_PLACES:
            return {
                ...state,
                places: action.payload,
                predictions: []
            }
        case LOADING_DETAILS:
            return {
                ...state,
                loadingDetails: true,
            }
        case FIND_PLACE_RATING:
            return {
                ...state,
                loadingRating: true
            }
        case FIND_PLACE_RATING_SUCCESS:
            return {
                ...state,
                loadingRating: false,
                placeRating: action.payload
            }
        case FIND_PLACE_RATING_ERROR:
            return {
                ...state,
                loadingRating: false,
            }
        default:
            return state;
    }
}

export default reducer;