import React from "react";
import './Image.css';
import { useState, useEffect } from "react";

export default function({path, top, width, left,filter,z,flip}){
    

    return(
        <img className="image" src={path} alt="" style={{top: `${top}`,width:`${width}`, left:`${left}`,filter:`${filter}`, transform:`translate3D(-50%,0,${z})`}}/>
        )
}