import {
    getCuriosityPicturesAPI,
    getEPICAPI,
    getMarsWeatherAPI,
    getPicofDayAPI,
    getRoverPicturesAPI,
    getSearchResultsPicturesAPI
} from "../api/api";
import {
    fetchepic,
    fetchmarscuriositypictures,
    fetchmarsopportunitypictres, fetchmarsspiritpictures,
    fetchmarsweatherac, fetchmoresearchpictures,
    fetchpicofday, fetchsearchpicture
} from "../actions/actioncreators";
//Fetch data Thunk
export const fetchPicOfDayThunk = ()=> async (dispatch)=>{
    //Fetch data from API function
    //API functions in redux api.js
    let PicData = await getPicofDayAPI();
    //Dispatch action to Reducer
    //Action creators in redux/actioncreators.js
    dispatch(fetchpicofday(PicData))
};

export const fetchEPICThunk = () => async (dispatch)=>{
    let EPIC = await getEPICAPI();
    dispatch(fetchepic(EPIC))
};

export const fetchMarsWeatherThunk = () => async (dispatch) =>{
    let MarsWeather = await getMarsWeatherAPI();
    dispatch(fetchmarsweatherac(MarsWeather))
};

export const fetchMarsRoverPicturesThunk = (sol,camera,page,rover)=>async(dispatch)=>{
    let MarsPictures = await getRoverPicturesAPI(sol,camera,page,rover);
    switch (rover) {
        case "curiosity":dispatch(fetchmarscuriositypictures(MarsPictures));
        case "opportunity":dispatch(fetchmarsopportunitypictres(MarsPictures));
        case "spirit":dispatch(fetchmarsspiritpictures(MarsPictures));
    };
};

export const fetchSearchResultsPicturesThunk = (search,page) => async(dispatch)=>{
    let Pictures = await getSearchResultsPicturesAPI(search,page);
    dispatch(fetchsearchpicture(Pictures));
}
export const fetchMoreSearchResulstPicturesThunk = (search,page) => async (dispatch)=>{
    let Pictures = await getSearchResultsPicturesAPI(search,page);
    dispatch(fetchmoresearchpictures(Pictures))
}