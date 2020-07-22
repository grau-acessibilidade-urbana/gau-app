import { FIND_PLACES, LOADING_DETAILS, QUERY_CHANGED, SET_PLACE, UPDATE_CURRENT_LOCATION } from '../actionTypes'

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
        default:
            return state;
    }
}

export default reducer;