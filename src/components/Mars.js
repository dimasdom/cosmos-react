import React, {useEffect} from 'react'
import style from "styled-components";

let Style = style.div`
background:url(${props => props.back});
background-size:cover;
background-repeat: no-repeat;
height:${props => props.height}px;
width:${props => props.width}px;
`

let Mars = (props)=>{

    const useFetching = (someFetchActionCreator) => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching()

    return(
        <>
            <div className="space">
                <video height={window.innerHeight} width={window.innerWidth} autoPlay muted loop id="myVideo">
                    <source src="http://dl57.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0ptY2NwakNJc0ZhcFlyNElobkxYd2U1bGZFWlVkNDVPRU9zbHQvQWVJVG9IYmFGK1orSlUyRmpXSC90bzRoaS9PNTRaOUhKdFhUeG50ai9PaGszUWtyd3JsS3AyZk03c1RQMUZpOFUxaXh5UGR6LzdaOGxpenZueS90SEtSWXpBTHBqSUVNOHFCb2NjWXhWYjVmZG45OWJzU2xDK21zcVVZaXFqTnBFLzcwK1o0dTlCOFcwcGdXcUFBaU0yamthR2Q4d2xQMU5kTmpRdWhzZkt2RkpzaEZhaWJKR1lsWm5GWXZyKzNDVWhZM0RORDYzcnQ%3D" type="video/mp4"/>
                </video>
            <h1 className="display-1 text-center text-white">Weather on mars</h1>
            <h1 className="display-4 text-white ">Status on {"2020"}</h1>
            <div className="row">
                <div className="col-3 shadow text-white ">1</div>
                <div className="col-3 shadow text-white">2</div>
                <div className="col-3 shadow text-white">3</div>
                <div className="col-3 shadow text-white">4</div>
            </div>
            <div className="row">
                <div className="col-3 shadow text-white">5</div>
                <div className="col-3 shadow text-white">6</div>
                <div className="col-3 shadow text-white">7</div>
                <div className="col-3 shadow text-white">8</div>
            </div>
        </div>
          </>
    )
}

export default Mars