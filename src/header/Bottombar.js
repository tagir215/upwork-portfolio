import React from "react";
import './Bottombar.css'

export default function Bottombar({lang}){
    return(
        <div className="bottom-bar">

            <div className="contact-bar">
                
                <div className="bottom-right">
                    <div className="bottom-contact">
                        <h4 className="bottom-title">{lang["email-name"]}</h4>
                        <span className="contact-title">{lang.email}</span>
                    </div>
                    
                    <div className="bottom-contact">
                        <h4 className="bottom-title">{lang["phone-name"]}</h4>
                        <span className="contact-title">{lang.phone}</span>
                    </div>
                    
                    <div className="bottom-contact">
                        <h4 className="bottom-title">{lang["location-name"]}</h4>
                        <span className="contact-title">{lang.location}</span>
                    </div>
                
                </div>
            </div>
           
        </div>


    )
}