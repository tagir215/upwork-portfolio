import React from "react";
import PhoneImage from "./PhoneImage";
import './PhonesInline.css'


export default function(props){
    const phoneWidth = "200px";
    const phoneHeight = "400px";
    const iFolder = process.env.PUBLIC_URL;
    return(
        <div className="phonesinline">
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat1.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat2.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat3.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat4.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat5.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat7.jpg'}/>
        </div>
    )
}