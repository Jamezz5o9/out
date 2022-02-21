import React from 'react'
// import backgroundIllustration from '../../../assets/images/card-background-illustration.svg';

const HomeFeaturesCard = ({image, title, children}) => {
  return (
    <div className="features_card" >
      <div className='feature__1'>       
        <img src={image} alt={title} className="features_card_img" />
      </div>
      <div className="feature__2"> 
        <h1 className="features_card_h1">{title}</h1>
        <p className='features_card_p'>{children}</p>
      </div>
       
    </div>
  )
}

export default HomeFeaturesCard