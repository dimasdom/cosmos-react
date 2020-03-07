import {
    FETCH_PICTURE_OF_A_DAY,
    FETCH_EPIC,
    FETCH_MARS_WEATHER,
    FETCH_MARS_CURIOSITY_PICTURES,
    FETCH_MARS_OPPORTUNITY_PICTURES, FETCH_MARS_SPIRIT_PICTURES
} from "./actionstype";

export const fetchpicofday = (data) => ({type:FETCH_PICTURE_OF_A_DAY , payload : data })
export const fetchepic = (EPICArray) =>({type:FETCH_EPIC,payload:EPICArray})
export const fetchmarsweatherac = (marsweatherobject)=>({type:FETCH_MARS_WEATHER,payload:marsweatherobject})
export const fetchmarscuriositypictures = (marspictures)=>({type:FETCH_MARS_CURIOSITY_PICTURES , payload:marspictures})
export const fetchmarsopportunitypictres = (marspictures)=>({type:FETCH_MARS_OPPORTUNITY_PICTURES, payload:marspictures})
export const fetchmarsspiritpictures = (marspictures)=>({type:FETCH_MARS_SPIRIT_PICTURES,payload:marspictures})