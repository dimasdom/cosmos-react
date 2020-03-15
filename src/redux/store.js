import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
//import {composeWithDevTools} from "redux-devtools-extension";
import PictureOfADayReducer from "./reducers/PictureOfADayReducer";
import EPICReducer from "./reducers/EPICReducer";
import MarsWeatherReducer from "./reducers/MarsWeatherReducer";
import MarsRoverPicturesReducer from "./reducers/MarsRoverPicturesReducer";
import SearchPictures from "./reducers/SearchPictures";
let midlewares = [thunk,];
let state = createStore(
    combineReducers(
        {
            PictureOfADay:PictureOfADayReducer,
            EPIC:EPICReducer,
            MarsWeather:MarsWeatherReducer,
            MarsPictures:MarsRoverPicturesReducer,
            SearchPictures:SearchPictures,
        }
        //if you wanna use redux-devtools-extention
    ),/*composeWithDevTools(*/applyMiddleware(...midlewares)/*)*/
);

export default state