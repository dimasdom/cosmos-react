import {FETCH_MARS_CURIOSITY_PICTURES, FETCH_MARS_OPPORTUNITY_PICTURES} from "../actions/actionstype";

let initialstate = {
    curiosity:[],
    opportunity:[]
}

let MarsRoverPicturesReducer = (state=initialstate,{type,payload}) =>{
    debugger
    switch (type) {
        case FETCH_MARS_CURIOSITY_PICTURES : {
            return{
                ...state,
                curiosity: [...state.curiosity,...payload.photos]
            }
        }
        case FETCH_MARS_OPPORTUNITY_PICTURES :{
            return{
                ...state,
                opportunity: payload
            }
        }
        default :return state
    }
}

export default MarsRoverPicturesReducer