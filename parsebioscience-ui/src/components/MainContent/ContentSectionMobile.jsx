import React from 'react';
import contentData from '../../assets/json/contentData.json'; // Make sure to adjust the path to your JSON file
import frameImage from '../../assets/images/Frame.png';
import groupImage from '../../assets/images/Group-preview.png';
import groupPreviewImage from '../../assets/images/Group.png';

const images = {
  'no-instrument-required': frameImage,
  'unmatched-data-quality': groupImage,
  'fixation-cells-nuclei': groupPreviewImage,
};
const ContentSection = () => {
  return (
        <section className="bg-white">
        {contentData.map((contentData) => (
            <div>
                <div className='bg-PurpleHead p-4 text-white capitalize mb-6'>
                    <p className='text-center font-bold'>{contentData.subDescription}</p>
                </div>
                <div className='px-6'>
                    <p className="text-base max-sm:text-sm uppercase text-PurpleHead">{contentData.subTitle}</p>
                    <h1 className="text-4xl font-bold mb-4 text-PurpleHead">{contentData.title}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-12 px-4 pb-16">
                    <div>
                        <img src={images[contentData.id]} alt="Custom section" className="w-3/4 m-auto" />
                    </div>
                    <div className='py-10 max-sm:p-0'>
                        <p className="text-PurpleHead text-2xl">{contentData.description}</p>
                        <h3 className="font-bold text-PurpleHead mb-4 text-2xl">{contentData.subDescription}</h3>
                        <p className="text-sm text-PurpleHeadDark">
                            {contentData.subParahContent}
                        </p>
                        <div className='borderButton w-fit mt-8 customWidthBtn'>
                            <button className="connectButton w-auto text-white px-3 py-2 text-sm flex font-medium"> {contentData.buttonText} <span className="span-text">→</span></button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
  );
};

export default ContentSection;
