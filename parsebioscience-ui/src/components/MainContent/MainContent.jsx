import React from 'react';
import mainData from '../../assets/json/mainData.json';

const MainContent = () => {
  return (
    <main className = "text-white pb-16 MainContextImage bg-cover bg-no-repeat bg-center" >
      <div className = "text-center mb-8 max-md:w-4/5 w-2/4 pt-44 pl-36 max-sm:w-full max-sm:px-4 max-sm:pt-40" >
        <p className='uppercase text-left text-base max-sm:font-medium'>{mainData.contextMainTitle}</p>
        <h1 className="text-6xl font-bold mb-4 text-left custom-font-size"><span className="block sm:inline">Smash </span>
          <span className="block sm:inline">the limits </span>
          <span className="block sm:inline">of single-cell </span>
          <span className="block sm:inline">sequencing</span>
        </h1>
        <p className="mb-6 text-left text-base max-sm:text-base leading-5">{mainData.contextHeading}</p>
        <div className='borderButton relative w-fit'>
          <button className="relative z-10 bg-black max-sm:max-w-60 text-white px-4 py-3 text-base text-left flex font-medium max-sm:font-bold w-auto max-sm:text-sm"> {mainData.contextMain} <span className="span-text">→</span></button>
        </div>
      </div>

    </main>
  );
};

export default MainContent;
