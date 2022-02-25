import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import {Link} from "react-router-dom"

const Header = () => {
  

  return ( 
    <section className="header_1 ">
        <div className='header container'>
          <Link to="/">
          
          <img className='header_img' src={Logo} alt="rentgage logo" />
          </Link>
          <div className="header_p">
          
              {/* <p className="header_p_1">                          
                Customer              
              </p>     */}
              <div className='hamburger'>
                <div className='bar'></div>
              </div>
              <Link to='/landlord'>
                <p className="header_p_2"><span>Landlord</span></p>
              </Link>
              <div>
                <p className='header_p_3'>Coming soon</p>
              </div>
              
            
            </div>
        </div>
    </section>
  )
}

export default Header