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
              <p className="header_p_1">                          
                Customer              
              </p>
              <Link to='/landlord'>
                <p className="header_p_2">Landlord</p>
              </Link>
            <p className='header_p_3'>Coming soon</p>
            
            </div>
        </div>
    </section>
  )
}

export default Header