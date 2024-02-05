import React from 'react';
import singleBanner from '../../assets/images/single-r.png'; // Ensure you have an image like the one shown in the design
import researchData from '../../assets/json/researchData.json';

const ResearchSection = () => {
  return (
    <section className="px-36 py-16 max-md:px-16 bg-LightBackColor curved-bottom-section relative max-sm:p-4">
        <div className="max-w-6xl mx-auto max-sm:pt-4 pb-1">
            <p className="text-base max-sm:text-sm uppercase text-PurpleHead">{researchData.sectionTitle}</p>
            <h1 className="text-4xl font-bold mb-4 text-PurpleHead">{researchData.mainHeading}</h1>
            <p className="text-base mb-8 max-w-4xl text-PurpleHeadDark">{researchData.mainContent}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-16">
                <div>
                    <img src={singleBanner} alt="Custom Research" className="max-sm:w-auto max-sm:h-auto" />
                </div>
                <div className='p-10 max-sm:p-0'>
                    <p className="text-PurpleHead text-4xl">{researchData.subHeading}</p>
                    <h3 className="font-bold text-PurpleHead text-4xl mb-2">{researchData.subUpperHeading}</h3>
                    <p className="text-lg text-PurpleHeadDark">
                        {researchData.subContent}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ResearchSection;
