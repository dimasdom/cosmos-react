import React, {useEffect} from 'react'
import style from "styled-components";
import {connect} from "react-redux";
import {fetchMarsWeatherThunk} from "../redux/thunks/fetchThunks";
import {Link} from "@reach/router";
import {getMarsWeather} from "../selectors/selectors";

let Style = style.div`
background:url(${props => props.back});
background-size:cover;
background-repeat: no-repeat;
height:${props => props.height}px;
width:${props => props.width}px;
`

let Mars = ({MarsWeather,fetchWeather})=>{
    debugger
    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching(fetchWeather)

    return(
        <>
            <div className="space">
                <video height={window.innerHeight} width={window.innerWidth} autoPlay muted loop id="myVideo">
                    <source src="https://www.jpl.nasa.gov/video/download.php?id=653&download=webm" type="video/webm"/>
                </video>
                <Style  back={"https://naked-science.ru/wp-content/uploads/2018/11/field_image_nasa-insight-mars-illustration.jpg"}>
            <h1 className="display-4 m-4 text-center text-white">Latest Weather
                at Elysium Planitia</h1>
            <h1 className="h6 text-center   m-4 text-white ">
                InSight is taking daily weather measurements
                (temperature, wind, pressure)
                on the surface of Mars at Elysium Planitia,
                a flat, smooth plain near Mars’ equator.</h1>

                    <div className="container">
                        <div className="row">
                            { MarsWeather.sol_keys ?
                                MarsWeather.sol_keys.map(keyn=> <div className="col-3 m-3 shadow text-white">
                                    <p className="h6" >Sol{keyn}</p>
                                    <p>Avarage t{MarsWeather[keyn].AT.av}</p>
                                    <p>Min:{MarsWeather[keyn].AT.mn}</p>
                                    <p>Max:{MarsWeather[keyn].AT.mx}</p>
                                </div>)
                                : <div className="loader">Loading...</div>
                            }
                        </div>
                    </div>
                </Style>
        </div>
            <Style back={"https://upload.wikimedia.org/wikipedia/commons/d/dc/PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg"}>
            <div className="container">
                <p className="display-4 text-center">Rowers</p>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <h1>Curiosity</h1>
                        <Link to={"/mars/curiosity"}><img className="img-fluid" src={"https://naked-science.ru/wp-content/uploads/2019/06/field_image_pia23240_hires.jpg"}/></Link>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h1>Opportunity</h1>
                        <Link to={"/mars/opportunity"}><img src="https://i.pinimg.com/originals/2f/be/9a/2fbe9a273ed63cd9a227bd803b3da834.png" alt="" className="img-fluid"/></Link>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h1>Spirit</h1>
                        <Link to={"/mars/spirit"}><img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg" alt="" className="img-fluid"/></Link>
                    </div>
                </div>
            </div>
            </Style>
          </>
    )
}

let mapStateToProps = (state)=>({
    MarsWeather:getMarsWeather(state)
})

let mapDispatchToProps = {
    fetchWeather:fetchMarsWeatherThunk
}

export default connect(mapStateToProps,mapDispatchToProps)(Mars)