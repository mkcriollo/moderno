import React from 'react'
import './location.css'
import { Link } from "react-router-dom";

function Location(){
    return (
        <div className="location-full">
            <div className="location-des">
                <div>LOCATED IN THE HUMBLE ADOBE OF BROOKKLYN NY. WE SERVE ALL AREAS OF NYC AND NJ. IF YOU HAVE ANY QUESTIONS ABOUT NEEDED WORK OUTSIDE OF MARK LOCATION, PLEASE FEEL FREE TO CALL US DIRECTLY AT +(347) 528-4047 OR SEND US AN EMAIL AT JSCMONTERO31@GMAIL.COM</div>
                <Link to='/contact'>
                <button className="contact-location">
                    CONTACT US
                </button>
                </Link>
            </div>
            <div className="map-location">
                <div className="black-line-loc">
                <i class="fas fa-map-pin"></i>
                    <h2>LOCATION : </h2>
                    <h2>NEW YORK CITY</h2>
                </div>
                <div className="map">

                </div>
            </div>
        </div>
    )
}

export default Location;