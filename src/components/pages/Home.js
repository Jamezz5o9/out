import React from 'react'
import HomeHeroSection from '../UI/organisms/HomeHeroSection';
import HomeFeatureSection from '../UI/organisms/HomeFeatureSection'
import HomeNewsLetterSection from '../UI/organisms/HomeNewsLetterSection';
import HomeApartmentSection from '../UI/organisms/HomeApartmentSection';
import HomeLandlordSection from '../UI/organisms/HomeLandlordSection';


const Home = () => {
  return (
    <React.Fragment>
        <HomeHeroSection />
        <HomeFeatureSection />
        <HomeApartmentSection />
        <HomeLandlordSection />
        <HomeNewsLetterSection />
    </React.Fragment>
  )
}

export default Home