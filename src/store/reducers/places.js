import { SET_PLACE, QUERY_CHANGED, UPDATE_CURRENT_LOCATION, FIND_PLACES } from '../actionTypes'

const initialState = {
    selectedPlace: null,
    predictions: [],
    currentLocation: null,
    places: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLACE:
            return {
                ...state,
                selectedPlace: action.payload,
                predictions: []
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
                places: action.payload
            }
        default:
            return state;
    }
}

export default reducer;