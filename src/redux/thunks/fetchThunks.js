import {getCuriosityPicturesAPI, getEPICAPI, getMarsWeatherAPI, getPicofDayAPI, getRoverPicturesAPI} from "../api/api";
import {
    fetchepic,
    fetchmarscuriositypictures,
    fetchmarsopportunitypictres,
    fetchmarsweatherac,
    fetchpicofday
} from "../actions/actioncreators";

export const fetchPicOfDayThunk = ()=> async (dispatch)=>{
    let PicData = await getPicofDayAPI();
    dispatch(fetchpicofday(PicData))
}

export const fetchEPICThunk = () => async (dispatch)=>{
    let EPIC = await getEPICAPI();
    dispatch(fetchepic(EPIC))
}

export const fetchMarsWeatherThunk = () => async (dispatch) =>{
    let MarsWeather = await getMarsWeatherAPI();
    dispatch(fetchmarsweatherac(MarsWeather))
}

export const fetchMarsRoverPicturesThunk = (sol,camera,page,rover)=>async(dispatch)=>{
    let MarsPictures = await getRoverPicturesAPI(sol,camera,page,rover);
    switch (rover) {
        case "curiosity":dispatch(fetchmarscuriositypictures(MarsPictures));
        case "opportunity":dispatch(fetchmarsopportunitypictres(MarsPictures))
    };
}