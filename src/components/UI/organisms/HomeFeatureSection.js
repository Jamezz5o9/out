import React from 'react';
import HomeFeaturesCard from '../molecules/HomeFeaturesCard';
import FeatureOneImage from "../../../assets/icons/vet-prop-logo.svg";
import FeatureTwoImage from '../../../assets/icons/no-addfee-logo.svg';
import FeatureThreeImage from '../../../assets/icons/flex-pay-logo.svg'
import FeatureFourImage from '../../../assets/icons/we-repyou-logo.svg'

const homeFeatures = [ 
  {
    id: 1,
    src: FeatureOneImage,
    title: 'Vetted  properties',
    content:"We list vetted, ideal and affordable properties on our platform.. You will definitely find one that suits you. "
  },
  {
    id: 2,
    src: FeatureTwoImage,
    title: 'No additional fees',
    content: 'We completely eliminate inspection, agency, commission and legal fees. We provide these auxiliary services for FREE.'
  },
  {
    id: 3,
    src: FeatureThreeImage,
    title: 'Flexible payment (Renpay)',
    content: 'With our flexible payment plans, you can move in instantly without paying a lump sum.'
  },
  {
    id: 4,
    src: FeatureFourImage,
    title: "We represent you",
    content: 'On our marketplace, we have affordable housing units that are accessible to everyone irrespective of your religion, ethnicity and other stereotypes.'
  }
]


const HomeFeatureSection = () => {
  return (
    <section className='feature'>
      <div className="feature_header container">
        <div className="feature_h1">
          <h1>Here's how we do it (Tenants)</h1>
        </div>
        <div className="set_features">      
          {
            homeFeatures.map(
              feature => 
            <HomeFeaturesCard
              image={feature.src}
              title={feature.title}
              key={feature.id}
            >
              {feature.content}
            </HomeFeaturesCard>
          )
          }
        </div>
      </div>

    </section>
  )
}

export default HomeFeatureSection