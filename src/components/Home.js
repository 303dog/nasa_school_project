import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/nasaphoto">Open your window!</Link>
            <p></p>
            <Link classname="link" to="dates">Check out past P.O.D's</Link>
        </div>
    )
}