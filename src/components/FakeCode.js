import React from "react";
import './FakeCode.css'
import { useState } from "react";
export default function(){
    const [activeLine, setActiveLine] = useState(0);

    const handleAnimationEnd = ()=>{
        
        const classes = document.getElementsByClassName("fakecode-span");
        if(activeLine+1 < classes.length){
            setActiveLine(activeLine+1)
        }else{
            setActiveLine(0)
            classes[0].classList.remove('add-type-animation')
            setTimeout(() => {
                classes[0].classList.add('add-type-animation')
            }, 500);
        }
        
    }


    return(
        <div className="fakecode-container">
            <div className="fake-code-centerer">
                <span className={`fakecode-span ${activeLine < 100 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>.container&#123; </span>
                <span className={`fakecode-span ${activeLine > 0 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp;  position:absolute; </span>
                <span className={`fakecode-span ${activeLine > 1 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; width: 55%; </span>
                <span className={`fakecode-span ${activeLine > 2 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; transform: translateX(-50%); </span>
                <span className={`fakecode-span ${activeLine > 3 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; left: 53.5%;</span>
                <span className={`fakecode-span ${activeLine > 4 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; background: rgb(33, 77, 166); </span>
                <span className={`fakecode-span ${activeLine > 5 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&#123; </span>
                
                <span className={`fakecode-span ${activeLine > 6 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>.fakecode-span&#123; </span>
                <span className={`fakecode-span ${activeLine > 7 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp;  margin-left: 5px; </span>
                <span className={`fakecode-span ${activeLine > 8 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; width: 0%; </span>
                <span className={`fakecode-span ${activeLine > 9 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; color:white; </span>
                <span className={`fakecode-span ${activeLine > 10 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; display: block;</span>
                <span className={`fakecode-span ${activeLine > 11 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; font-size: 8px; </span>
                <span className={`fakecode-span ${activeLine > 12 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&nbsp;&nbsp;&nbsp; white-space: nowrap; </span>
                <span className={`fakecode-span ${activeLine > 13 ? 'add-type-animation' : ''}`} onAnimationEnd={handleAnimationEnd}>&#123; </span>
    
            </div>
        </div>
    )
}


