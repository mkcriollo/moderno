import './home.css';
import React,  {useState, useEffect} from 'react'
import { Link } from "react-router-dom";


function Home() {

  useEffect(() => {
      const navBar = document.querySelector('.navbar');
      const links = document.getElementsByClassName('linkColor')
      const contactBtn = document.querySelector('.contact-btn')
      const logo = document.querySelector('.logo');
      const homePage = document.querySelector('.home-page');
      
      
      // change navbar background on load
      navBar.style.backgroundColor = 'transparent';
      navBar.style.position = 'fixed';
      navBar.classList.add('animate__animated')
      navBar.classList.add('animate__fadeInDown')

      homePage.classList.add('animate__animated')
      homePage.classList.add('animate__fadeIn')
      // change links color on load
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.style.color = '#fff'
      }
      
      // change btn style on load
      contactBtn.style.color = '#fff'
      contactBtn.style.border = '1px solid #fff'

      // change logo color on load
      logo.style.color = '#fff'

      return () => {

        // remove classes
        navBar.classList.remove('animate__animated')
      navBar.classList.remove('animate__fadeInDown')

      homePage.classList.remove('animate__animated')
      

        // change back navbar background
        navBar.style.backgroundColor = '#fff';
        navBar.style.position = 'sticky';

        // change style back on nav links
        for (let i = 0; i < links.length; i++) {
          const link = links[i];
          link.style.color = '#333'
        }

        // change color of btn
        contactBtn.style.color = '#333'
        contactBtn.style.border = '1px solid #333'

        // change logo color 
        logo.style.color = '#333'
      }
  });

  return (
    <div className="home-page">
        <div className="info-and-nav">
            <div className="info-home">
              <h2>MODERNO</h2>
              <h3>COLLECTION</h3>
            </div>
            <div className="nav-home-btns">
              <div className="icon-holders">
              <i class="fas fa-caret-left"></i>
              </div>
              <div className="icon-holders">
              <i class="fas fa-caret-right"></i>
              </div>
              <Link to="/collections">
              <div className="icon-holders">
              <i class="fas fa-braille"></i>
              </div>
              </Link>
            </div>
        </div>
        <div className="tag-home-holder">
          <Link to="/projects">
          <div className="tag-home">
            <div className="slogan-tag">
                <div className="slogan-word-holder">
                  <span>F</span><span>R</span><span>E</span><span>E</span>
                </div>
                <div className="slogan-word-holder2">
                  <span className="first-slogan-l">Y</span><span>O</span><span>U</span><span>R</span>
                </div>
                <div className="slogan-word-holder">
                  <span>S</span><span>P</span><span>A</span><span>C</span><span>E</span>
                </div>
            </div>
            <div className="visit-project-tag">
              <h4>PROJECTS 2021</h4>
              <i class="fas fa-caret-right"></i>
            </div>
          </div>
          </Link>
        </div>
        <div>

        </div>
    </div>
  );
}

export default Home;