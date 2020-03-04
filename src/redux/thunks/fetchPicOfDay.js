import {getCuriosityPicturesAPI, getEPICAPI, getMarsWeatherAPI, getPicofDayAPI} from "../api/api";
import {fetchepic, fetchmarscuriositypictures, fetchmarsweatherac, fetchpicofday} from "../actions/actioncreators";

export let fetchPicOfDayThunk = ()=> async (dispatch)=>{
    let PicData = await getPicofDayAPI();
    dispatch(fetchpicofday(PicData))
}

export let fetchEPICThunk = () => async (dispatch)=>{
    let EPIC = await getEPICAPI();
    dispatch(fetchepic(EPIC))
}

export let fetchMarsWeatherThunk = () => async (dispatch) =>{
    let MarsWeather = await getMarsWeatherAPI();
    dispatch(fetchmarsweatherac(MarsWeather))
}

export let fetchMarsCuriosityPicturesThunk = (sol,camera,page)=>async(dispatch)=>{
    let MarsPictures = await getCuriosityPicturesAPI(sol,camera,page);
    dispatch(fetchmarscuriositypictures(MarsPictures));
}