import React from 'react';
import SDotted from '../../../assets/icons/dotted-line.svg';
import ImageOne from '../../../assets/icons/property.svg';
import ImageTwo from '../../../assets/icons/paid.svg';


const SHomeApartmentSection = () => {
  return (
    <section className="SApartment">
            <div className="SApartment__container-1 container">
                <div ClassName='SApartment__container-2'>
                    <h1>
                        Start Getting Paid in Two Steps
                    </h1>
                </div>
                <div className="SApartment__container-3">
                  <div className="SApartment__container-4">
                    <img src={ImageOne} alt="Icon" />
                    <h1>List your property</h1>
                    <p>To get started, fill out the  basic information required and our staff will contact you.</p>
                  </div>
                  <div className="SApartment__container-5">
                    <img src={SDotted} alt="Logo" />
                  </div>
                  <div className="SApartment__container-4">
                    <img src={ImageTwo} alt="Logo" />
                    <h1>Get Paid</h1>
                    <p>Now a Rentgage Landlord? Get your rent on time.</p>
                  </div>
                </div>
            </div>
        </section>
  )
}

export default SHomeApartmentSection