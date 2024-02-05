import React from 'react';
import Slider from 'react-slick';
import AdvantageData from '../../assets/json/advanceData.json'; // Path to your JSON file
import frameSlide from '../../assets/images/slide-1.png';
import groupSlide from '../../assets/images/slide-2.png';
import groupPreviewSlide from '../../assets/images/slide-3.png';
import carolinaSlide from '../../assets/images/slide-4.png'
const AdvanceSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  
const images = {
  'slide-instrument-required': frameSlide,
  'slide-data-quality': groupSlide,
  'slide-cells-nuclei': groupPreviewSlide,
  'slide-Carolina': carolinaSlide,
};
  return (
    <section className="bg-PurpleHeadDark text-white pt-8 pb-8 advanceSection">
        <div className="px-8 max-w-5xl m-auto">
            <div className="text-center my-4">
                <h2 className="font-bold text-2xl">Advancing research for 850+ Labs</h2>
            </div>
            <Slider {...settings}>
                {AdvantageData.logos.map((logo, index) => (
                <div key={index} className="p-4">
                    <img src={images[logo.id]} alt={logo.name} className="mx-auto" style={{ height: 'auto', width: 'auto' }} />
                </div>
                ))}
            </Slider>
        </div>
    </section>
  );
};

export default AdvanceSection;
