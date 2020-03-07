import {
    FETCH_MARS_CURIOSITY_PICTURES,
    FETCH_MARS_OPPORTUNITY_PICTURES,
    FETCH_MARS_SPIRIT_PICTURES
} from "../actions/actionstype";

let initialstate = {
    curiosity:[],
    opportunity:[],
    spirit:[]
}

let MarsRoverPicturesReducer = (state=initialstate,{type,payload}) =>{

    switch (type) {
        case FETCH_MARS_CURIOSITY_PICTURES : {
            return{
                ...state,
                curiosity: payload.photos
            }
        }
        case FETCH_MARS_OPPORTUNITY_PICTURES :{
            return{
                ...state,
                opportunity:payload.photos
            }
        }
        case FETCH_MARS_SPIRIT_PICTURES :{
            return{
                ...state,
                spirit: payload.photos
            }
        }
        default :return state
    }
}

export default MarsRoverPicturesReducer