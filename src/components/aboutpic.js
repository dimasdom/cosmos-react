import React from 'react'
import style from 'styled-components'
import {connect} from "react-redux";
import {getPictureOfADayInfo} from "../selectors/selectors";
let Style = style.div`
height:${props => props.height}px;
width:${props => props.width}px;
`

let AboutPic = ({picofday})=>{
    return(
        <Style height={window.innerHeight} width={window.innerWidth}>
            <div className="row">
                <div className=' col-sm-12 col-md-8 m-2 '>
                    <img className='img-fluid img shadow' src={`${picofday.url}`}/>
                </div>
                <div className='col-sm-12 col-md-3 '>
                    <h1 className="display-4" >{picofday.title ? picofday.title : "Picture of a day"}</h1>
                    <p className="p-4" > {picofday.explanation}</p>
                    <p className="text-right" >{picofday.date}</p>
                </div>
            </div>
        </Style>
    )
}
let mapStateToProps = (state)=>({
    picofday: getPictureOfADayInfo(state)
})
export default  connect(mapStateToProps)(AboutPic)