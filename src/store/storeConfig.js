import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from './reducers/places';
import usersReducer from './reducers/users';

const reducers = combineReducers({
    places: placesReducer,
    users: usersReducer,
});

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)));
}

export default storeConfig;