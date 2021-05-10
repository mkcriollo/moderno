import React, {useState,useEffect} from 'react'
import './project.css';

// import pictures 

// chairs images
import Bluestool from '../../imgs/chairs/bluestool.jpg';
import Pinkstool from '../../imgs/chairs/pinkstool.jpg';
import V2blue from '../../imgs/chairs/v2blueseat.jpg';
import V2orange from '../../imgs/chairs/v2orangeseat.jpg';
import V2green from '../../imgs/chairs/v2greenseat.jpg';

// table images
import Blackcrystaltable from '../../imgs/tables/bandwcrystal.jpg';
import Blacksplashtable from '../../imgs/tables/blackmultipaint.jpg';
import Bluesplashtable from '../../imgs/tables/bluemultipaint.jpg';
import Greenbench from '../../imgs/tables/greenbench.png';
import Greensidetable from '../../imgs/tables/greensidetable.jpg';

// mirrors images 

import Whitetallmirror from '../../imgs/mirrors/mirror.jpg';

// sofa images 

import Browncouch from '../../imgs/couches/couch.jpeg'

function Project() {

    const [items,setItems] = useState('');


    if(items === "" || items === "tables"){
    return (
        <div className="project-full">
            <div className="project-list-holder">
                <ul>
                    <li id="item-selected">MODERNO 2021</li>
                    <li onClick={() => setItems('tables')} id="item-selected">Table</li>
                    <li onClick={() => setItems('chairs')}>Chairs</li>
                    <li onClick={() => setItems('mirrors')}>Mirrors</li>
                    <li onClick={() => setItems('couches')}>Couch</li>
                </ul>
            </div>
            <div className="project-display-holder">
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Blackcrystaltable} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Blacksplashtable} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Bluesplashtable} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Greenbench} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Greensidetable} alt=""/>
                </div>
            </div>
        </div>
    )} else if(items === "chairs") {
        return (
        <div className="project-full">
            <div className="project-list-holder">
                <ul>
                <li id="item-selected">MODERNO 2021</li>
                    <li onClick={() => setItems('tables')}>Table</li>
                    <li onClick={() => setItems('chairs')}  id="item-selected">Chairs</li>
                    <li onClick={() => setItems('mirrors')}>Mirrors</li>
                    <li onClick={() => setItems('couches')}>Couch</li>
                </ul>
            </div>
            <div className="project-display-holder">
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Bluestool} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={Pinkstool} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={V2blue} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={V2orange} alt=""/>
                </div>
                <div className="project-holder animate__animated animate__fadeIn">
                    <img src={V2green} alt=""/>
                </div>
            </div>
        </div>
        )} else if(items === "mirrors") {
            return (
                <div className="project-full">
                    <div className="project-list-holder">
                        <ul>
                        <li id="item-selected">MODERNO 2021</li>
                            <li onClick={() => setItems('tables')}>Table</li>
                            <li onClick={() => setItems('chairs')}>Chairs</li>
                            <li id="item-selected" onClick={() => setItems('mirrors')}>Mirrors</li>
                            <li onClick={() => setItems('couches')}>Couch</li>
                        </ul>
                    </div>
                    <div className="project-display-holder">
                        <div className="project-holder animate__animated animate__fadeIn">
                            <img src={Whitetallmirror} alt=""/>
                        </div>
                    </div>
                </div>
        )} else if(items === "couches"){
            return (
                <div className="project-full">
                    <div className="project-list-holder">
                        <ul>
                        <li id="item-selected">MODERNO 2021</li>
                            <li onClick={() => setItems('tables')}>Table</li>
                            <li onClick={() => setItems('chairs')}>Chairs</li>
                            <li onClick={() => setItems('mirrors')}>Mirrors</li>
                            <li id="item-selected" onClick={() => setItems('couches')}>Couch</li>
                        </ul>
                    </div>
                    <div className="project-display-holder">
                        <div className="project-holder animate__animated animate__fadeIn">
                            <img src={Browncouch} alt=""/>
                        </div>
                    </div>
                </div>
                )
        }
}

export default Project;