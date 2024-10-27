import React from "react";

function Home(){
    window.location.href = "/";
}


function GoHome(){
    return(
        <button onClick={Home}>Go Home</button>
    )
}

export default GoHome;