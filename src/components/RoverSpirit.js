import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {fetchMarsRoverPicturesThunk} from "../redux/thunks/fetchThunks";
import {getOpportunityPhotos, getSpiritPhotos} from "../selectors/selectors";

let Spirit = ({Photos,fetchPictures})=>{
    //Custom hook to fetch data
    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator(1000,"fhaz",1,"spirit");
        }, [])
    };

    useFetching(fetchPictures);
    //Local state
    let [sol,setsol] = useState("");

    let [camera,setcamera] = useState("");

    let [page,setpage]= useState(2);
    //function to fetch pictures in buttons
    let fetchPic = (sol,cam,page) => {

        fetchPictures(sol,cam,page,"spirit")
    };

    return(
        <div className="container">
            <p className="display-1">Pictures by Spirit</p>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="sol*" aria-describedby="basic-addon2" onChange={(e)=>{setsol(e.target.value)}}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={
                        //set camera in local state for fetching
                        ()=>{ setcamera("fhaz") ;setpage(2) ; fetchPic(sol,camera,1)}} >FHAZ</button>
                    <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("rhaz") ;setpage(2) ; fetchPic(sol,camera,1)}}>RHAZ</button>
                    <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("navcam") ;setpage(2) ; fetchPic(sol,camera,1)}}>NAVCAM</button>
                    <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("pancam") ;setpage(2) ; fetchPic(sol,camera,1)}}>PANCAM</button>
                    <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("minite") ;setpage(2) ; fetchPic(sol,camera,1)}}>MINITES</button>

                </div>
            </div>
            <p className="text-center m-4 ">If the pictures do not appear, then they are not</p>
            <div>
                {
                    Photos ? Photos.map(p=><img key={p.id} className="img-fluid rounded m-1 shadow " src={p.img_src}/>) : <div className="loader">Loading...</div>
                }
            </div>
            <div className="text-center">
                <button className="btn btn-dark rounded m-1" onClick={()=>{setpage(page+1);fetchPic(sol,camera,page)}}>Load More</button>
            </div>
        </div>
    )
};

let mapStateToProps = (state)=>({
    Photos:getSpiritPhotos(state)
});
let mapDispatchToProps = {
    fetchPictures:fetchMarsRoverPicturesThunk
};

export default connect(mapStateToProps,mapDispatchToProps)(Spirit)