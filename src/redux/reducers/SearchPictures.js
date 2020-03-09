import {FETCH_MORE_SEARCH_PICTURES, FETCH_SEARCH_PICTURES} from "../actions/actionstype";

let initialstate = {
collection:{
    items:[],
    metadata:{}
}
};

let SearchPictures = (state=initialstate,{type,payload}) => {
    switch (type) {
        case FETCH_SEARCH_PICTURES:{
            return{
                ...state,
                collection :{
                    items:[...payload.collection.items],
                    metadata:payload.collection.metadata
                }
            }
        };
        case  FETCH_MORE_SEARCH_PICTURES : {
            return{
                ...state,
                collection :{
                    items:[...state.collection.items,...payload.collection.items],
                    metadata:payload.collection.metadata
                }
            }
        }
        default :return state
    }
};
export default SearchPictures