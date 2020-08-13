import {
  FIND_PLACES,
  FIND_PLACE_RATINGS,
  LIKE_COMMENT,
  LOADING_DETAILS,
  QUERY_CHANGED,
  RATE_PLACE,
  RATE_PLACE_SUCCESS,
  REPLY_COMMENT,
  SET_PLACE,
  UPDATE_CURRENT_LOCATION,
  FIND_USER_RATINGS,
  FIND_USER_RATINGS_SUCCESS,
} from '../actionTypes';

const initialState = {
  selectedPlace: null,
  comments: [],
  predictions: [],
  currentLocation: null,
  places: null,
  loadingDetails: false,
  loadingRating: false,
  placeRating: null,
  submittingRating: null,
  loadingUserRatings: false,
  userRatings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
        comments: action.payload ? action.payload.comments : [],
        predictions: [],
        loadingDetails: false,
      };
    case QUERY_CHANGED:
      return {
        ...state,
        predictions: action.payload,
      };
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case FIND_PLACES:
      return {
        ...state,
        places: action.payload,
        predictions: [],
      };
    case LOADING_DETAILS:
      return {
        ...state,
        loadingDetails: true,
      };
    case LIKE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment._id === action.payload) {
            comment.likes++;
          } else if (comment.responses) {
            comment.responses.forEach((response) => {
              if (response._id === action.payload) {
                response.likes++;
              }
            });
          }
          return comment;
        }),
      };
    case REPLY_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment._id === action.payload._id) {
            return action.payload;
          }
          return comment;
        }),
      };
    case RATE_PLACE:
      return {
        ...state,
        submittingRating: true,
      };
    case RATE_PLACE_SUCCESS:
      return {
        ...state,
        submittingRating: false,
      };
    case FIND_PLACE_RATINGS:
      return {
        ...state,
        selectedPlace: {
          ...state.selectedPlace,
          _id: action.payload_id,
          averageScore: action.payload.averageScore,
          reviewers: action.payload.reviewers,
        },
        comments: action.payload.comments,
      };
    case FIND_USER_RATINGS:
      return {
        ...state,
        loadingUserRatings: true,
      };
    case FIND_USER_RATINGS_SUCCESS:
      return {
        ...state,
        loadingUserRatings: false,
        userRatings: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
