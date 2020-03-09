import React, {useState} from "react"
import {getSearchResults, getSpiritPhotos} from "../selectors/selectors";
import {fetchMoreSearchResulstPicturesThunk, fetchSearchResultsPicturesThunk} from "../redux/thunks/fetchThunks";
import {connect} from "react-redux";

let SearchPage = ({data,fetchPictures,fetchMorePictures})=>{
    debugger
    let fetchpic =(search,page)=> {
        fetchPictures(search,page)
    }
    let[search,setSearch] = useState("")
    let[page,setPage]=useState(2)
    return(
        <div>
        <div className="container mt-3">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Type Here" onChange={(e)=>{ setSearch(e.target.value)}}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>{ setPage(2); fetchpic(search,1)}}>Search</button>
                </div>
        </div>
        </div>
            <div className="m-auto text-center">
                <p>Total Hits:{data === undefined ? "0": data.metadata.total_hits }</p>
                <div>
                    {
                        data === undefined ? null : data.items.map(pic=><img className="img-thumbnail" src={pic.links[0].href}/>)
                    }
                </div>
                <div className="text-center">
                    <button className="btn btn-dark rounded m-1" onClick={()=>{setPage(page+1);fetchMorePictures(search,page)}}>Load More</button>
                </div>
            </div>
            </div>
    )
}

let mapStateToProps = (state)=>({
    data:getSearchResults(state)
});
let mapDispatchToProps = {
    fetchPictures:fetchSearchResultsPicturesThunk,
    fetchMorePictures:fetchMoreSearchResulstPicturesThunk
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)