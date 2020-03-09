import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {fetchMarsRoverPicturesThunk} from "../redux/thunks/fetchThunks";
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
    };

    return(
        <div className="container">
            <p className="display-1">Pictures by Couriosity</p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder={`Max sol : `} aria-describedby="basic-addon2" onChange={(e)=>{setsol(e.target.value)}}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("fhaz") ;setpage(2) ; fetchPic(sol,camera,1)}} >FHAZ</button>
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("rhaz") ;setpage(2); fetchPic(sol,camera,1)}}>RHAZ</button>
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("mast") ;setpage(2); fetchPic(sol,camera,1)}}>MAST</button>
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("chemkam") ;setpage(2); fetchPic(sol,camera,1)}}>CHEMKAM</button>
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("mahli") ;setpage(2); fetchPic(sol,camera,1)}}>MAHLI</button>
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("mardi") ;setpage(2); fetchPic(sol,camera,1)}}>MARDI</button>
                            <button className="btn btn-outline-secondary" onClick={()=>{ setcamera("navcam") ;setpage(2); fetchPic(sol,camera,1)}}>NAVCAM</button>
                        </div>
                </div>
            <p className="text-center m-4 ">If the pictures do not appear, then they are not</p>
        <div>
        {
            Photos ? Photos.map(p=><img key={p.id} className="img-fluid rounded m-1 shadow" src={p.img_src}/>) : <div className="loader">Loading...</div>
        }
        </div>
            <div className="text-center">
                <button className="btn btn-dark rounded m-1" onClick={()=>{setpage(page+1);fetchPic(sol,camera,page)}}>Load More</button>
            </div>

        </div>
    )
};

let mapStateToProps = (state)=>({
Photos:getCuriosityPhotos(state)
});

let mapDispatchToProps = {
    fetchPictures:fetchMarsRoverPicturesThunk
};

export default connect(mapStateToProps,mapDispatchToProps)(Curiosity)