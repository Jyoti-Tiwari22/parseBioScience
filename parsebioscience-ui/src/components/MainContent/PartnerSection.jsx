import React from 'react';
import partnerImage from '../../assets/images/Smash.png';

const PartnerSection = () => {
  return (
    <section
      className="text-center p-8 bg-no-repeat bg-cover relative partnerMain mt-16 max-sm:hidden max-md:hidden align-self-center"
      style={{ backgroundImage: `url(${partnerImage})` }}
    >
        <div className='outerCircle my-16 m-auto'></div>
        <div className="max-w-2xl mx-auto circle"></div>
        <div className='auto relative p-8 paraCircle'>
          <h1 className="text-LightPurpleHead font-bold text-4xl">
            We're your partners in single cell
          </h1>
          <p className="text-PurpleHeadDark text-base mb-6">
            We'll help you with a quote or to plan your next experiment.
          </p>
          <div className='borderButton w-fit mt-8 customWidthBtn m-auto'>
              <button className="connectButton w-auto text-white p-3 text-sm flex font-medium">Get started today <span className="span-text text:LightPurpleHead">→</span></button>
          </div>
        </div>
    </section>
  );
};

export default PartnerSection;
