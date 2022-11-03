import React from 'react';
import HomeIllustration from "../../../assets/images/homefirst.png";
import Google from '../../../assets/icons/GooglePlaystore.svg';
import Apple from '../../../assets/icons/ApplePlaystore.svg';



const HomeHeroSection = () => {
  return (
  <section className="Hero  left__rectangle" >
    <div className="hero_header container">
      <div className="hero_h1_p">           
            <h1>
              Why struggle to get
              <br />
                your dream home?
            </h1>
            <p>
              On Rentgage, FIND a home that suits you.
            </p>
            <p  className="p_2">
              No lump sum (flexible payment), no endless search, 
              <br />
              no outrageous inspection and agency fees. Move in instantly.
            </p>     
                    
          <div className="hero__container">
            <div>
              <a href="https://forms.gle/YZMnrKVWbuE9q1NK8" target="_blank" rel="noopener noreferrer"><button className='hero__container-button'>Get Started</button></a>
            </div>
            <div className="hero__container1">
              <img className="hero__container1__img1"  src={Google} alt="Playstore-icon" />                
              <img className="hero__container2__img2" src={Apple} alt="apple-icon" /> 
            </div>                             
         </div>
      </div>
      <div className="hero_img">
         <img className="hero_img_1" src={HomeIllustration} alt="rentgage app" />
      </div>
    </div>
  </section>
  )
}

export default HomeHeroSection