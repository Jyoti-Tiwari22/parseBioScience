import React from 'react';
import BannerImg from '../../assets/images/Icon-Group.png';
import BannerMobImg from '../../assets/images/insight.png';
const Insights = () => {
  return (
        <section className="bg-white mb-6 ">
            <div className="max-w-5xl sm:px-6 lg:px-8 m-auto my-8">
                <div className='py-10 max-sm:p-0 text-center'>

                    <h1 className="font-bold text-PurpleHead mb-4 text-4xl max-w-lg m-auto">The end-to-end solution: from sample to insights</h1>
                    <p className="text-base text-LiGrey mt-4 max-w-4xl m-auto">
                        Our product takes you from single-cell or single-nuclei suspension through library prep and sequencing and delivers immediate results via our analysis software.
                    </p>
                </div>
                <div className='p-4 max-sm:mt-4 max-w-4xl m-auto'>
                    <img src={BannerImg} alt="Insights" className='block max-sm:hidden'></img>
                    <img src={BannerMobImg} alt="Insights" className='hidden max-sm:block m-auto'></img>
                </div>
            </div>
        </section>
    );
};

export default Insights;