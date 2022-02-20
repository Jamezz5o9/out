import React from 'react'

const HomeApartmentCard = ({image, title, children}) => {
  return (
    <div className="set_apartment_1">
        <div className="set_apartment_2">  
            <img src={image} alt={title} />
        </div>
        <div className="set_apartment_3">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default HomeApartmentCard