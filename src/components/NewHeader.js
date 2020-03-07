import React from "react"
import {Link} from "@reach/router";
import Logo from "../cosmos-logo-white.png";

let NewHeader = ()=>(

    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className={"row"}>
            <div className={" col-md-6 col-lg-3 "}>
        <Link to={"/"} className="navbar-brand"><img className={"img-fluid m-2"}  src={Logo}/></Link>
            </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-md-6 col-lg-9 justify-content-end" id="collapsibleNavbar">
            <ul className="nav">
                <li className="nav-item nav-item-header mr-5">
                    <Link to={'/earth'}><h4 className="h3 text-white m-4">Earth</h4></Link>
                </li>
                <li className="nav-item nav-item-header mr-5">
                    <Link to={'/mars'}> <h4 className="h3 text-white m-4">Mars</h4></Link>
                </li>
                <li className="nav-item nav-item-header mr-5">
                    <Link to={"/search"}> <h4 className="h3 text-white m-4">Search</h4></Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
)

export default NewHeader