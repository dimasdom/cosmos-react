import {FETCH_PICTURE_OF_A_DAY} from "../actions/actionstype";

let initialstate = {
};
//Reducer which storage picture of a day
let PictureOfADayReducer = (state = initialstate,{type,payload}) =>{
    switch (type) {
        case   FETCH_PICTURE_OF_A_DAY  : {
            return {
                ...state,
                ...payload
            }
        }
        default : return state
    }
};

export default  PictureOfADayReducer