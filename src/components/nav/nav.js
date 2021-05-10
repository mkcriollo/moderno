import './nav.css';
import React from 'react'
import {Link} from 'react-router-dom';


function Nav() {
  return (
   <nav className="navbar">
     <div className="left-nav">
       <Link to="/">
       <div className="logo">[MODERNO]</div>
       </Link>
        <ul className="nav-links">
          <Link to="/collections">
            <li className="linkColor">COLLECTIONS</li>
          </Link>
          <Link to="/projects">
            <li className="linkColor">PROJECTS</li>
          </Link>
          <Link to="/about">
            <li className="linkColor">ABOUT</li>
          </Link>
          <Link to="/location">
            <li className="linkColor">LOCATION</li>
          </Link>
        </ul>
     </div>
     <div className="right-nav">
       <Link to="/contact">
       <button className="contact-btn">CONTACT</button>
       </Link>
     </div>
    
   </nav>
  );
}

export default Nav;