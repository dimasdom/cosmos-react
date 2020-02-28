import React from 'react'
import style from 'styled-components'
import {Link} from "@reach/router";

let Picture = style.div`
background:url(${props=>props.back});
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
    return (
        <Picture height={window.innerHeight} back={"https://www.nasa.gov/sites/default/files/thumbnails/image/ngc6357_0.jpg"}>
            <Link to={`/search/${124124}`}><p className="display-4 text-white">About this picture</p></Link>
        </Picture>
    )
}

export default PictureOfADay
