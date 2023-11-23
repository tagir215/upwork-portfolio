import React from "react";
import './Skill.css'
import { useState, useRef } from 'react'

export default function({img, title, list, stars}){
    const [position, setPosition] = useState(0);
    const containerRef = useRef(null)
    const infoRef = useRef(null)

    const handleHover = ()=>{
        const rectContainer = containerRef.current.getBoundingClientRect()
        const rectInfo = infoRef.current.getBoundingClientRect()
        const infoHeight = rectInfo.bottom - rectInfo.top;
        const infoWidth = rectInfo.right - rectInfo.left;
        if(rectContainer.top > 10+  infoHeight){
            setPosition(0);
        }else if(window.innerHeight -10 > rectContainer.bottom + infoHeight){
            setPosition(1);
        }else if(window.innerWidth -100 > rectContainer.right + infoWidth){
            setPosition(2);
        }else {
            setPosition(3);
        }
    }

    return (
        <div className="skill-container" ref={containerRef}>
        
        <div className="folder-fold"></div>
        <div className="folder-cover">
                <span className="skill-title">{title}</span>
        </div>
                
        <div className={`skill-info pos${position}`} ref={infoRef}>

            <div className="skill-info-fold"></div>
            <div className="skill-image-container">
                <img className="skill-image" src={img} alt=""/>
            </div>

            {stars && <img src={stars} alt="" className="stars-img"/>}

            {list && <div className="more-info">
                {list.map((text,index) => (
                    <span className="skill-line" key={"skill-line"+index}>{text}</span>
                    ))}
            </div>}
        </div>

        </div>
    )
}