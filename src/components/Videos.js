import React from "react";
import fi from "../locales/fi.json";
import "./Videos.css";
import TextBlock from "./TextBlock";

export default function(){
    const path = process.env.PUBLIC_URL;
    return(
        
        <div className="videos-div">
            
            <div className="videos-container">
                <video className="video42 vp2" src={path + "/games/video2.mp4"} autoPlay muted loop />    
                <video className="video42 vp3" src={path + "/games/video3.mp4"} autoPlay muted loop />    
                <video className="video42 vp4" src={path + "/games/video4.mp4"} autoPlay muted loop />               
            </div>
            <TextBlock theme="topic" title={fi["videos-title"]} text={fi["videos-text"]} />
        </div>
    )
}