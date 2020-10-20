import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function NavBar(props) {
    const marketing = `build-week-1-a19ugbcgs.vercel.app/index.html`

    return(
        <div className="navContainer">
            <a href = {marketing}>Home Page</a>
            <Link to = "/loginform">Login</Link>
            <Link to = "/registerform">Register</Link>
        </div>
    )
}

export default NavBar;