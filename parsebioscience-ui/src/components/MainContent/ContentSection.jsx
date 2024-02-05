import React, { useState } from 'react';
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
  const [activeContentId, setActiveContentId] = useState(contentData[0].id);
  
  const activeContent = contentData.find(content => content.id === activeContentId);

  return (
    <section className="bg-white p-8 py-0 ">
        <div className="flex w-4/5 max-md:w-full justify-between bg-DarkBackColor p-2 m-auto rounded">
            {contentData.map((content) => (
            <button
                key={content.id}
                className={`p-3 w-full capitalize rounded text-base font-bold mr-4 ${activeContentId === content.id ? 'activeButton' : 'noneActive'}`}
                onClick={() => setActiveContentId(content.id)}
            >
                {content.id.split('-').join(' ')}
            </button>
            ))}
        </div>
        <section className="p-16 pb-0 relative max-sm:p-4">
            <div className="ml-16 mx-auto max-sm:pt-4 pb-1">
                <p className="text-base max-sm:text-sm uppercase text-PurpleHead">{activeContent.subTitle}</p>
                <h1 className="text-4xl font-bold mb-4 text-PurpleHead">{activeContent.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-12 px-4 pb-16">
                    <div>
                        <img src={images[activeContent.id]} alt="Custom section" className="w-4/5 max-sm:w-auto max-sm:h-auto" />
                    </div>
                    <div className='py-10 max-sm:p-0'>
                        <p className="text-PurpleHead text-3xl mb-2">{activeContent.description}</p>
                        <h3 className="font-bold text-PurpleHead mb-4 text-3xl">{activeContent.subDescription}</h3>
                        <p className="text-lg text-LiGrey">
                            {activeContent.subParahContent}
                        </p>
                        <div className='borderButton w-fit mt-8 customWidthBtn'>
                            <button className="connectButton w-auto text-white p-3 text-sm flex font-medium"> {activeContent.buttonText} <span className="span-text">→</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
};

export default ContentSection;
