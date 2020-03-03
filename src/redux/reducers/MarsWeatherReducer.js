import {FETCH_MARS_WEATHER} from '../actions/actionstype'
let initialstate = {

}

let MarsWeatherReducer = (state = initialstate , {type,payload}) =>{
        switch (type) {
            case FETCH_MARS_WEATHER : {
                return{
                    ...state,
                    ...payload
                }
            }
            default : return state
        }
}

export default MarsWeatherReducer