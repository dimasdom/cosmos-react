import {getEPICAPI, getPicofDayAPI} from "../api/api";
import {fetchepic, fetchpicofday} from "../actions/actioncreators";

export let fetchPicOfDayThunk = ()=> async (dispatch)=>{
    let PicData = await getPicofDayAPI();
    dispatch(fetchpicofday(PicData))
}

export let fetchEPICThunk = () => async (dispatch)=>{
    let EPIC = await getEPICAPI();
    dispatch(fetchepic(EPIC))
}