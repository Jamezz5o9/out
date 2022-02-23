import React from 'react';
import HomeIllustration from "../../../assets/images/duplex.png";
import Google from '../../../assets/icons/GooglePlaystore.svg';
import Apple from '../../../assets/icons/ApplePlaystore.svg';


const SHomeHeroSection = () => {
  return (
    <section className="SHome">
    <div className="Shero_header container">
      <div className="Shero_h1_p">        
        <h1>
            Want guaranteed rent?
           <br />
           List on Rentgage.
        </h1>        
        <div className="hero__container">
          <div>
              <button className='hero__container-button Shero__button'><a href="https://forms.gle/tWT5FnE7rDmV7Lqv9" target="_blank" rel="noreferrer">Get Started</a></button>
          </div>
          <div className="hero__container1 Shero__container1">
              <img className="hero__container1__img1 Shero__container1-img"  src={Google} alt="Playstore-icon" />                
              <img className="hero__container2__img2 Shero__container2-img" src={Apple} alt="apple-icon" /> 
          </div>                             
         </div>
      </div>
      <div className="Shero_img">
         <img className="Shero_img_1" src={HomeIllustration} alt="rentgage app" />
      </div>
    </div>
  </section>
  )
}

export default SHomeHeroSection;