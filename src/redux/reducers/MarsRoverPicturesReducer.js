import {FETCH_MARS_CURIOSITY_PICTURES} from "../actions/actionstype";

let initialstate = {
    curiosity:[]
}

let MarsRoverPicturesReducer = (state=initialstate,{type,payload}) =>{
    debugger
    switch (type) {
        case FETCH_MARS_CURIOSITY_PICTURES : {
            return{
                ...state,
                curiosity: payload
            }
        }
        default :return state
    }
}

export default MarsRoverPicturesReducer