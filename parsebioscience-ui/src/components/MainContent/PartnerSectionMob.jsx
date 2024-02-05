import React from 'react';

const PartnerSectionMob = () => {
  return (
    <section
      className="text-center p-8 hidden max-sm:block max-md:block "
    >
        <div className='m-auto'>
          <h1 className="text-LightPurpleHead m-auto text-3xl font-mplus max-w-xs font-bold">
            We're your partners in single cell
          </h1>
          <p className="text-PurpleHeadDark m-auto text-sm max-w-64">
            We'll help you with a quote or to plan your next experiment.
          </p>
          <div className='borderButton w-fit mt-4 customWidthBtn m-auto'>
            <button className="connectButton w-auto text-white px-4 py-3 text-lg flex font-bold">Get started today <span className="span-text">→</span></button>
          </div>
        </div>
    </section>
  );
};

export default PartnerSectionMob;
