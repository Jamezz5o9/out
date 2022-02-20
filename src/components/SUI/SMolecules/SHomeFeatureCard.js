import React from 'react'

const SHomeFeatureCard = ({image, title, children}) => {
  return (
    <div className='SFeature__container-minor'>
        <div>
            <img className="SFeature__container-mini1" src={image} alt='Logo' />
        </div>
        <div className="SFeature__container-mini0">
            <h1 className="SFeature__container-mini2">{title}</h1>
            <p className='SFeature__container-mini3'>{children}</p>
        </div>
    </div>
  )
}

export default SHomeFeatureCard