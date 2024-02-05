import React from 'react';
import unlockData from '../../assets/json/unlockData.json';

const UnlockProduct = () => {
    return (
    <section className="bg-white py-10">
        <div className="max-w-5xl max-sm:w-96 mx-auto max-sm:my-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-PurpleHead mb-8 max-sm:px-4">Unlock more at Mega scale</h2>
                <div className="grid grid-cols-2 gap-4 mb-6 max-sm:block">
                {unlockData.map(data => (
                    <div key={data.id} className="bg-PurpleHead text-white max-sm:mb-4 p-8 rounded">
                        <h3 className="text-xl font-semibold max-sm:text-3xl">{data.title}</h3>
                        <p className="pt-2 m-auto w-96 max-sm:w-auto">{data.description}</p>
                    </div>
                ))}
                </div>
                <div className='borderButton w-fit mt-8 m-auto customWidthBtn'>
                    <button className="connectButton w-auto text-white p-3 text-sm flex font-bold max-sm:p-4"> View all products <span className="span-text text-LightPurpleHead">→</span></button>
                </div>
            </div>
        </section>
  );
};

export default UnlockProduct;