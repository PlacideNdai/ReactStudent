import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    return (
        <Link to="/">  <button id='home'>Go Home</button> </Link>
    )
}


function GoHome(){
    return(
       <Home/>
    )
}

export default GoHome;