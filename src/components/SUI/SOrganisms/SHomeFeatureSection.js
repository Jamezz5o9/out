import React from 'react'
import SFeatureOneImage from '../../../assets/icons/vetted-tenants.svg';
import SFeatureTwoImage from '../../../assets/icons/Fast-rent.svg';
import SFeatureThreeImage from '../../../assets/icons/professional-icon.svg';
import SHomeFeatureCard from '../SMolecules/SHomeFeatureCard';


const SFeature = [
    {
        id: 1,
        src:SFeatureOneImage,
        title:"Vetted tenants",
        content:'At Rentgage, we vet tenants’ financial history to confirm their eligibility to afford rent.',
    },
    {
        id: 2,
        src:SFeatureTwoImage,
        title:"Fast rent, regular payment",
        content:'With our technology-driven marketplace, your property is rented in less time than usual. You get your full rent quickly and regularly.',
        
    },
    {
        id: 3,
        src:SFeatureThreeImage,
        title:"Professional representation",
        content:'At Rentgage, our staff are trained to attend to your requests in a timely and professional manner.',
        
    },
]

const SHomeFeatureSection = () => {
  return (
        <section className="SFeature">
            <div className="SFeature__container-1 container">
                <div className="SFeature__container-2">
                    <h1>Why Rentgage and not any other agency?</h1>
                </div>
                <div className='SFeature__container-main'>
                    {
                       SFeature.map(
                           feature => 
                               <SHomeFeatureCard
                               image={feature.src}
                               title={feature.title}
                               key={feature.id}
                               >
                                 {feature.content}
                               </SHomeFeatureCard>                           
                       )
                    }
                </div>
            </div>
        </section>

  )
}

export default SHomeFeatureSection