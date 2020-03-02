import {FETCH_EPIC} from "../actions/actionstype";

let initialstate = {
    epic:[]
}

let EPICReducer = (state=initialstate,{type,payload})=>{
    switch (type) {
        case FETCH_EPIC : {
            return{
                ...state ,
                epic:[...payload]
            }
        }
        default : return state
    }
}

export default EPICReducer