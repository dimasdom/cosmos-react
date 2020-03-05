import React, {useEffect} from 'react'
import style from 'styled-components'
import {Link} from "@reach/router";
import {fetchPicOfDayThunk} from "../redux/thunks/fetchThunks";
import {connect} from "react-redux";
import {getPictureOfADayInfo} from "../selectors/selectors";

let Picture = style.div`
background-image: url(${props=>props.back});
background-size:cover;
background-repeat: no-repeat;
height:${props=>props.height-80}px;
p{
padding-top:${props=>props.height - props.height /3 }px;
text-align:center;
}
a{
text-decoration:none;

}
`

let PictureOfADay = (props) =>{

    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching(props.fetchPicOfDayThunk)
    return (
        <Picture height={window.innerHeight} back={props.PicOfADay.url}>
            <Link to={`/aboutpic`}><p className="display-4 text-white">About this picture</p></Link>
        </Picture>
    )
}
let mapStateToProps = (state) =>({
    PicOfADay:getPictureOfADayInfo(state) ,
})
let mapDispatchToProps = {
    fetchPicOfDayThunk
}
export default connect(mapStateToProps,mapDispatchToProps)(PictureOfADay)
