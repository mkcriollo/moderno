import './about.css';
import React from 'react'


function About() {

  return (
    <div className="about animate__animated animate__fadeIn">
        <div className="left-about">
          <div className="contact-about-holder">
            <p>JORGE CRIOLLO</p>
            <p>JSCMONTERO31@GMAIL.COM</p>
            <p>347-5284047</p>
            </div>
        </div>
        <div className="right-about">
          <div className="about-main-words animate__animated animate__fadeInDown">
            For 30 years now, our success has been driven by our clienteles happiness.
          </div>
          <div className="about-info-holder">
            <div className="about-details animate__animated animate__slideInUp">
              <p>We find it in clear lines, with their timeless appeal which will outlive any trend. We find it too in strong structures which we can rely on to last a lifetime. We find it in warm wood, fabrics, leather, natural materials from sustainable sources, and responsible production methods. We find it also in the passion and excellence of experienced carpenters, tanners and upholsterers, who, in their workshops, produce each piece individually to order.</p>
              <p>More was founded in 1993 by designer and CEO Bernhard Müller in Hamburg. Furniture by more is timeless and minimalist and provides innovative solutions and highest quality.</p>
            </div>
            <span className='animate__animated animate__fadeInalt'/>
          </div>
          <div className="info-part2-holder">
            <div className="info-part2">
              <h2>MODERNO</h2>
              <h2>stands for</h2>
              <span>_________________________</span>
              <p>MATERIALS FROM SUSTAINABLE SOURCES AND RESPONSIBLE PRODUCTION</p>
            </div>
            <div className="wood-img"></div>
          </div>
        </div>
    </div>
  );
}

export default About;