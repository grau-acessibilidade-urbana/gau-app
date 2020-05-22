import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from './reducers/places'

const reducers = combineReducers({
    places: placesReducer
});

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)));
}

export default storeConfig;