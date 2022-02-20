import React from 'react'
import TwitterIcon from '../../../assets/icons/Instagram.svg';
import InstagramIcon from '../../../assets/icons/Twitter.svg';
import LinkedInIcon from "../../../assets/icons/LinkedIn.svg";
import FacebookIcon from "../../../assets/icons/Facebook.svg";


const Footer = () => {
  return (
    <section className="footer new_footer">
        <div className="footer_c container">
        <div className="footer_img">
                <img src={FacebookIcon} alt="Facebook icon" />
                <img src={TwitterIcon} alt="Twitter icon" />
                <img src={InstagramIcon} alt="Instagram icon" />
                <img src={LinkedInIcon} alt="Linkedln icon" />
            </div>
            <p>
                We would love to build a community with you in it.
                <br />
                Follow our social media pages to be a part of our growing community.
            </p>           
            <p>
                Copyright ©Rentgage 2021. All rights reserved.
            </p>
        </div>
    </section>
  )
}

export default Footer