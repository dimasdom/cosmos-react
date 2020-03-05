import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {fetchMarsCuriosityPicturesThunk, fetchMarsRoverPicturesThunk} from "../redux/thunks/fetchThunks";
import {getCuriosityPhotos} from "../selectors/selectors";

let Curiosity = ({Photos,fetchPictures})=>{
    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator(2120,"fhaz",1,"curiosity");
        }, [])
    };
    useFetching(fetchPictures);
    let [sol,setsol] = useState("");
    let [camera,setcamera] = useState("");
    let [page,setpage]= useState(2);
    let fetchPic = (sol,cam,page) => {
        fetchPictures(sol,cam,page,"curiosity")
    }
    return(
<div className="container">
    <p className="display-1">Pictures by Couriosity</p>
    <div className="input-group">
        <input type="text" className="form-control" placeholder={`Max sol : `} aria-describedby="basic-addon2" onChange={(e)=>{setsol(e.target.value)}}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("fhaz") ; fetchPic(sol,camera,page)}} >FHAZ</button>
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("rhaz") ; fetchPic(sol,camera,page)}}>RHAZ</button>
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("mast") ; fetchPic(sol,camera,page)}}>MAST</button>
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("chemkam") ; fetchPic(sol,camera,page)}}>CHEMKAM</button>
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("mahli") ; fetchPic(sol,camera,page)}}>MAHLI</button>
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("mardi") ; fetchPic(sol,camera,page)}}>MARDI</button>
                <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("navcam") ; fetchPic(sol,camera,page)}}>NAVCAM</button>
            </div>
    </div>
    <p className="text-center m-4 ">If the pictures do not appear, then they are not</p>
    <div>
        {
            Photos ? Photos.map(p=><img className="img-fluid" src={p.img_src}/>) : <div className="loader">Loading...</div>
        }
    </div>
    <button className="btn-success" onClick={()=>{setpage(page+1);fetchPic(sol,camera,page)}}>Load More</button>
</div>
    )
}

let mapStateToProps = (state)=>({
Photos:getCuriosityPhotos(state)
})
let mapDispatchToProps = {
    fetchPictures:fetchMarsRoverPicturesThunk
}

export default connect(mapStateToProps,mapDispatchToProps)(Curiosity)