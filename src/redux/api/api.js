import * as axios from 'axios'

export const getPicofDayAPI = async () => {
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU").then(response => { return response.data})
}

export const getEPICAPI = async () =>{
    return axios.get("https://api.nasa.gov/EPIC/api/natural?api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU").then(response=>{return response.data})
}

export const getMarsWeatherAPI = async () =>{
    return axios.get("https://api.nasa.gov/insight_weather/?api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU&feedtype=json&ver=1.0").then(response=>{return response.data})
}

export const getRoverPicturesAPI = async (sol,camera,page,rover)=>{
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&${camera}&page=${page}&api_key=yLGljaB58XtkdNjIoABTKmJ03ThBBhiXWI343nPU`).then(response =>{return response.data})
}