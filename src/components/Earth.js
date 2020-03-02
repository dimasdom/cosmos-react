import React, {useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import {fetchEPICThunk} from "../redux/thunks/fetchPicOfDay";
import {connect} from "react-redux";
import {getEPIC} from "../selectors/selectors";

let Earth = (props)=>{
    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching(props.fetchEPICThunk)
    return(
        <Carousel>
            {props.epic !== [] ? props.epic.map(a => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`https://epic.gsfc.nasa.gov/archive/natural/${a.date[0]}${a.date[1]}${a.date[2]}${a.date[3]}/${a.date[5]}${a.date[6]}/${a.date[8]}${a.date[9]}/jpg/${a.image}.jpg`}
                        alt="Earth"
                    />
                    <Carousel.Caption>
                        <h3>Earth Today</h3>
                        <p>This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ) ): "Loading..."
            }
        </Carousel>
    )

}
let mapStateToProps = (state)=>({
    epic:getEPIC(state)
})
let mapDispatchToProps = {
    fetchEPICThunk
}
export default connect(mapStateToProps,mapDispatchToProps)(Earth)