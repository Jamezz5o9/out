import React from 'react';
import SDotted from '../../../assets/icons/dotted-line.svg';
import ImageOne from '../../../assets/icons/property.svg';
import ImageTwo from '../../../assets/icons/paid.svg';


const SHomeApartmentSection = () => {
  return (
    <section className="SApartment">
            <div className="SApartment__container-1 container">
                <div className="SApartment__container-i">
                    <h1 className='new'>
                        Start Getting Paid in Two Steps
                    </h1>
                </div>
                <div className="SApartment__container-3">
                  <div className="SApartment__container-4">
                    <img src={ImageOne} alt="Icon" />
                    <div className="apply__late">
                      <h1>List your property</h1>
                      <p>To <span><a href="https://forms.gle/tWT5FnE7rDmV7Lqv9" target="_blank" rel="noopener noreferrer">get started</a></span>, fill out the  basic information 
                        <br />
                        required and our staff will contact you.</p>                      
                    </div>
                  </div>
                  <div className="SApartment__container-5">
                    <img src={SDotted} alt="Logo" />
                  </div>
                  <div className="SApartment__container-4">
                    <img src={ImageTwo} alt="Logo" />
                    <div className='apply__late'>
                      <h1>Get Paid</h1>
                        <p>
                            Now a Rentgage Landlord?
                            <br />
                            Get your rent on time.
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
  )
}

export default SHomeApartmentSection