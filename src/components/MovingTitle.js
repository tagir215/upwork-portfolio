import React from "react";
import './MovingTitle.css'

export default function(){
    
    return(
        <div className="moving-titles-container">
            <img className="moving-title animation-title1" src={process.env.PUBLIC_URL +"/pilvi.png"} alt=""></img>
            <img className="moving-title animation-title2" src={process.env.PUBLIC_URL +"/pilvi.png"} alt=""></img>
        </div>
    )
}