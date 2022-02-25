import React from 'react';
import BlackIllustration from '../../../assets/images/black-businessman.png';
import { useHistory } from "react-router-dom";


const HomeLandlordSection = () => {
const history = useHistory()

  return (
    <section className="landlord right__rectangle">
    <div className="landlord_header container ">
      <div className="landlord_h1_p">        
        <h1>
            Are you a 
            <br />
            landlord?
        </h1>       
        <p className="landlord_p_2">
            We help you get vetted tenants, rent out 
            <br />
            your apartment in lesser time and get your
            <br />
             rent even faster.
        </p>    
        <button className='landlord__container-button' onClick={()=> history.push('./landlord')}>Get started</button>     
      </div>
      <div className="landlord_img">
         <img src={BlackIllustration} alt="business app" />
      </div>
    </div>
  </section>
  )
}

export default HomeLandlordSection