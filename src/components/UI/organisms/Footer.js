import React from 'react'
import TwitterIcon from '../../../assets/icons/Instagram.svg';
import InstagramIcon from '../../../assets/icons/Twitter.svg';
import LinkedInIcon from "../../../assets/icons/LinkedIn.svg";
// import FacebookIcon from "../../../assets/icons/Facebook.svg";


const Footer = () => {
  return (
    <section className="footer new_footer">
        <div className="footer_c container">
        <div className="footer_img">
            {/* <a href="#">
                <img src={} alt="Facebook icon" />
            </a> */}
            <a href="https://twitter.com/rentgage?s=21" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Twitter icon" />
            </a>
            <a href="https://instagram.com/rentgage?utm_medium=copy_link"  target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Instagram icon" />
            </a>
            <a href="https://www.linkedin.com/company/rentgage" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="Linkedln icon" />         
            </a>
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