import {
  FIND_PLACES,
  FIND_PLACE_RATINGS,
  LOADING_DETAILS,
  QUERY_CHANGED,
  RATE_PLACE,
  RATE_PLACE_SUCCESS,
  REPLY_COMMENT,
  SET_PLACE,
  UPDATE_CURRENT_LOCATION,
  FIND_USER_RATINGS,
  FIND_USER_RATINGS_SUCCESS,
  SET_USER_RATING,
  SET_ANSWER1,
  SET_ANSWER2,
  SET_ANSWER3,
  SET_ANSWER4,
  SET_ANSWER5,
  SET_COMMENT,
  FIND_USER_RATING_SUCCESS,
  FIND_USER_RATING_ERROR,
  FIND_PLACE_RATINGS_SUMMARY,
  SET_HELP_ITEM,
  UPDATE_COMMENT,
  UPDATE_COMMENT_ERROR,
  UPDATE_PLACE_RATING_SUCCESS,
  DELETE_PLACE_RATING,
  FIND_NEAR_PLACES,
  FIND_NEAR_PLACES_SUCCESS,
  FIND_PLACE_RATINGS_SUCCESS,
  FIND_PLACE_RATINGS_ERROR,
  FIND_USER_RATING,
  FIND_PLACE_RATINGS_SUMMARY_SUCCESS,
  FIND_PLACE_RATINGS_SUMMARY_ERROR,
  SORT_NEAR_PLACES_BY_DISTANCE,
  SORT_NEAR_PLACES_BY_RATING,
  DELETE_PLACE_RATING_SUCCESS,
} from '../actionTypes';

const initialState = {
  selectedPlace: null,
  comments: [],
  predictions: [],
  currentLocation: null,
  places: null,
  loadingDetails: false,
  loadingRating: false,
  loadingUserRating: false,
  loadingSummary: false,
  comment: null,
  question1: null,
  question2: null,
  question3: null,
  question4: 0,
  question5: null,
  submittingRating: null,
  loadingUserRatings: false,
  userRatings: [],
  selectedUserRating: null,
  editMode: false,
  helpItem: null,
  nearPlaces: null,
  loadingNearPlaces: false,
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
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment._id === action.payload._id) {
            comment = action.payload;
          } else if (comment.responses) {
            comment.responses.forEach((response) => {
              if (response._id === action.payload._id) {
                response = action.payload;
              }
            });
          }
          return comment;
        }),
      };
    case UPDATE_COMMENT_ERROR:
      return {
        ...state,
      };
    case DELETE_PLACE_RATING:
      return {
        ...state,
        loadingUserRatings: true,
      };
    case DELETE_PLACE_RATING_SUCCESS:
      return {
        ...state,
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        comment: null,
      }
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
        editMode: false,
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        comment: null,
        selectedPlace: {
          ...state.selectedPlace,
          userReviewed: true,
        },
      };
    case UPDATE_PLACE_RATING_SUCCESS:
      return {
        ...state,
        submittingRating: false,
        editMode: false,
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        comment: null,
      };
    case FIND_PLACE_RATINGS:
      return {
        ...state,
        loadingRating: true,
      };
    case FIND_PLACE_RATINGS_ERROR:
      return {
        ...state,
        loadingRating: false,
      };
    case FIND_PLACE_RATINGS_SUCCESS:
      return {
        ...state,
        selectedPlace: {
          ...state.selectedPlace,
          _id: action.payload._id,
          averageScore: action.payload.averageScore,
          reviewers: action.payload.reviewers,
        },
        comments: action.payload.comments,
        loadingRating: false,
      };
    case FIND_PLACE_RATINGS_SUMMARY:
      return {
        ...state,
        loadingSummary: true,
      };
    case FIND_PLACE_RATINGS_SUMMARY_SUCCESS:
      return {
        ...state,
        selectedPlace: {
          ...state.selectedPlace,
          ratingsSummary: action.payload,
        },
        loadingSummary: false,
      };
    case FIND_PLACE_RATINGS_SUMMARY_ERROR:
      return {
        ...state,
        loadingSummary: false,
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
    case SET_USER_RATING:
      return {
        ...state,
        selectedUserRating: action.payload,
        question1: action.payload.question1,
        question2: action.payload.question2,
        question3: action.payload.question3,
        question4: action.payload.question4,
        question5: action.payload.question5,
        comment: action.payload.comment ? action.payload.comment.content : null,
        editMode: true,
      };
    case SET_ANSWER1:
      return {
        ...state,
        question1: action.payload,
      };
    case SET_ANSWER2:
      return {
        ...state,
        question2: action.payload,
      };
    case SET_ANSWER3:
      return {
        ...state,
        question3: action.payload,
      };
    case SET_ANSWER4:
      return {
        ...state,
        question4: action.payload,
      };
    case SET_ANSWER5:
      return {
        ...state,
        question5: action.payload,
      };
    case SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case FIND_USER_RATING:
      return {
        ...state,
        loadingUserRating: true,
      };
    case FIND_USER_RATING_SUCCESS:
      return {
        ...state,
        selectedPlace: {
          ...state.selectedPlace,
          userReviewed: !!action.payload,
        },
        loadingUserRating: false,
      };
    case FIND_USER_RATING_ERROR:
      return {
        ...state,
        selectedPlace: {
          ...state.selectedPlace,
          userReviewed: false,
        },
        loadingUserRating: false,
      };
    case SET_HELP_ITEM:
      return {
        ...state,
        helpItem: action.payload,
      };
    case FIND_NEAR_PLACES:
      return {
        ...state,
        loadingNearPlaces: true,
      };
    case FIND_NEAR_PLACES_SUCCESS:
      return {
        ...state,
        loadingNearPlaces: false,
        nearPlaces: action.payload,
      };
    case SORT_NEAR_PLACES_BY_DISTANCE:
      return {
        ...state,
        nearPlaces: state.nearPlaces.sort((place1, place2) => {
          const distance1 = +place1.distance.split(' ')[0];
          const distance2 = +place2.distance.split(' ')[0];
          return distance1 - distance2;
        }),
      };
    case SORT_NEAR_PLACES_BY_RATING:
      return {
        ...state,
        nearPlaces: state.nearPlaces.sort((place1, place2) => {
          return (place2.averageScore || 0) - (place1.averageScore || 0);
        }),
      };
    default:
      return state;
  }
};

export default reducer;
