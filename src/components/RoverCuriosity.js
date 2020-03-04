import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {fetchMarsCuriosityPicturesThunk} from "../redux/thunks/fetchPicOfDay";

let Curiosity = (props)=>{
    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator(2120,"fhaz",2);
        }, [])
    }
    useFetching(props.fetchMarsCuriosityPicturesThunk)
    return(
<div className="container">
    <div className="input-group">
        <input type="text" className="form-control" placeholder="sol*" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" >FHAZ</button>
                <button className="btn btn-outline-secondary" >RHAZ</button>
                <button className="btn btn-outline-secondary" >MAST</button>
                <button className="btn btn-outline-secondary" >CHEMKAM</button>
                <button className="btn btn-outline-secondary" >MAHLI</button>
                <button className="btn btn-outline-secondary" >MARDI</button>
                <button className="btn btn-outline-secondary" >NAVCAM</button>
            </div>
    </div>
    <div>
        {
            props.Photos ? props.Photos.map(p=><img src={p.img_src}/>) : "loading"
        }
    </div>
</div>
    )
}

let mapStateToProps = (state)=>({
Photos:state.MarsPictures.curiosity.photos
})
let mapDispatchToProps = {
    fetchMarsCuriosityPicturesThunk
}

export default connect(mapStateToProps,mapDispatchToProps)(Curiosity)