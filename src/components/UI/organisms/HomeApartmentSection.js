import React from "react";
import Search from "../../../assets/icons/search-logo.svg";
import Hand from "../../../assets/icons/hand-logo.svg";
import Dotted from "../../../assets/icons/dotted-cap-logo.svg";
import FirstLine from "../../../assets/icons/line-1.svg";
import SecondLine from "../../../assets/icons/line-2.svg";
/*

const homeApartment =[
    {
        id: 1,
        src: Search,
        title:"Find an Apartment",
        content: 'Sign up on our mobile App and select an apartment that suits you.'
    },
    {
        id: 2,
        src:FirstLine,
        title: '',
        content: '',
    },
    {
        id: 3,
        src: Hand,
        title: 'Apply for Renpay',
        content: 'Access our flexible payment plans and select the one that suits you.',
    },
    {
        id: 4,
        src: SecondLine,
        title: '',
        content: '',
    },
     {
        id: 5,
        src: Dotted,
        title: 'What else? Move in!',
        content: 'Move into your dream house and live comfortably.',
    },
]

*/
const HomeApartmentSection = () => {
  return (
    <section className="apartment">
      <div className="apartment__container">
        <div className="apartment_1">
          <h1>Own An Apartment in Three Steps</h1>
        </div>
        <div className="set_apartment">
          <div className="set__apartment_senior">
            <div className="set__apartment_junior">
              <div className="set__apartment_group">
                <img src={Search} alt="Seach" />
                <div className="apply__new">
                  <h1>Find an Apartment</h1>
                  <p className="apply__new-2">
                    Sign up on our mobile App and select an apartment that suits
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div className="set__apartment_junior">
              <img src={FirstLine} alt="Line" />
            </div>
            <div className="set__apartment_junior">
              <div className="set__apartment_group">
                <img src={Hand} alt="Hand-logo" />
                <div className="apply__new">
                  <h1>Apply for Renpay</h1>
                  <p>
                    Access our flexible payment plans and select the one that
                    suits you.
                  </p>
                </div>
              </div>
            </div>
            <div className="set__apartment_junior">
              <img src={SecondLine} alt="Line" />
            </div>
            <div className="set__apartment_junior">
              <div className="set__apartment_group">
                <img src={Dotted} alt="Dotted-logo" />
                <div className="apply__new">
                  <h1>What else? Move in!</h1>
                  <p>Move into your dream house and live comfortably.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApartmentSection;
