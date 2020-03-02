import React from 'react'
import {Link} from '@reach/router'
import Logo from '../cosmos-logo-white.png'
let Header = () =>(
    <header className={"header bg-dark appHeader"}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <Link to={'/'}><img className="img-fluid m-2 img-header" src={Logo}/></Link>
                </div>
                <div className="col-6">
                    <div className="navbar-nav justify-content-end">
                        <ul className="nav justify-content-end">
                            <li className="nav-item nav-item-header mr-5 ">
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
            </div>
        </div>
    </header>
)
export default Header