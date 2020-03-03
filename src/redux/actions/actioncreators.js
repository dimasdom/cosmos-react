import {FETCH_PICTURE_OF_A_DAY, FETCH_EPIC, FETCH_MARS_WEATHER} from "./actionstype";

export const fetchpicofday = (data) => ({type:FETCH_PICTURE_OF_A_DAY , payload : data })
export const fetchepic = (EPICArray) =>({type:FETCH_EPIC,payload:EPICArray})
export const fetchmarsweatherac = (marsweatherobject)=>({type:FETCH_MARS_WEATHER,payload:marsweatherobject})