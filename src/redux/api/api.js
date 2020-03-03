import * as axios from 'axios'

export let getPicofDayAPI = async () => {
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU").then(response => { return response.data})
}

export let getEPICAPI = async () =>{
    return axios.get("https://api.nasa.gov/EPIC/api/natural?api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU").then(response=>{return response.data})
}

export let getMarsWeatherAPI = async () =>{
    return axios.get("https://api.nasa.gov/insight_weather/?api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU&feedtype=json&ver=1.0").then(response=>{return response.data})
}