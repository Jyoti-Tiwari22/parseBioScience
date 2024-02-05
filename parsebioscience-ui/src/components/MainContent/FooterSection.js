import React from 'react';
import footerData from '../../assets/json/footerData.json';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../assets/images/Logo.png';
import tweetLogo from '../../assets/images/twitter-brands.png';
import linkLogo from '../../assets/images/linkedin-in-brands.png';

const images= {
    'twitter-logo': tweetLogo,
    'linkedin-logo': linkLogo,
};

const FooterSection = () => {
  return (
    <footer className="bg-DeepPurple text-white text-sm p-8">
        <img src={footerLogo} alt='footer ' className='w-56 mb-4 hidden max-sm:block' />
      <div className="max-sm:mt-8 flex flex-wrap mx-16 max-sm:mx-0 justify-between max-sm:grid max-sm:grid-cols-2">
        <div className="flex flex-col max-sm:order-4 footerOuter">
          <img src={footerLogo} alt='footer ' className='w-48 mb-4 block max-sm:hidden' />
          <span>{footerData.address.street}</span>
          <span>{footerData.address.city}</span>
          <a href={`mailto:${footerData.address.email}`} className="hover:text-white">{footerData.address.email}</a>
          <div className="flex mt-4">
            {footerData.socials.map((social, index) => (
              <NavLink key={index} href={social.link} className="mr-2 hover:text-white">
                <img
                    src={images[social.platform]}
                    alt={social.platform}
                    className="w-5 h-5 mr-2"
                    />
              </NavLink>
            ))}
          </div>
        </div>
        {footerData.columns.map((column, index) => (
          <div key={index} className={`flex flex-col mb-4 md:mb-0 footerOuter max-sm:order-${column.id}`}>
            <span className="font-bold text-white mb-2">{column.title}</span>
            {column.links.map((link, index) => (
              <NavLink key={index} href="#" className="hover:text-white mb-1">
                {link}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center mt-8 pt-4">
        {footerData.copyright}
      </div>
    </footer>
  );
};

export default FooterSection;
