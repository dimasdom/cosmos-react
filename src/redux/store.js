import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import PictureOfADayReducer from "./reducers/PictureOfADayReducer";
import EPICReducer from "./reducers/EPICReducer";
import MarsWeatherReducer from "./reducers/MarsWeatherReducer";
let midlewares = [thunk,];
let state = createStore(
    combineReducers(
        {
            PictureOfADay:PictureOfADayReducer,
            EPIC:EPICReducer,
            MarsWeather:MarsWeatherReducer
        }
    ),composeWithDevTools(applyMiddleware(...midlewares))
);

export default state