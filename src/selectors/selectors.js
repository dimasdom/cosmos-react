//Selectors
export let getPictureOfADayInfo = (state) => {
    return(
        state.PictureOfADay
    )
};
export let getEPIC = state =>{
    return(
        state.EPIC.epic
    )
};

export let getMarsWeather = state=>{
    return(
        state.MarsWeather
    )
};

export const getCuriosityPhotos = state=>{
    return(
        state.MarsPictures.curiosity
    )
};
export const getOpportunityPhotos = state =>{
    return(
        state.MarsPictures.opportunity
    )
};
export const getSpiritPhotos = state =>{
    return(
        state.MarsPictures.spirit
    )
};