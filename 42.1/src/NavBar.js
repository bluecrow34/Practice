import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/candy">Candy</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/soda">Chips</Link>
        </nav>
    )
}

export default NavBar;