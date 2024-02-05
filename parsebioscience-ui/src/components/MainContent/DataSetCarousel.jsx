import React from 'react';
import Slider from 'react-slick';
import datasets from '../../assets/json/datasets.json'; // Adjust the import path as needed

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#550088", margin: "auto" }}
      onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left data-arrow" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg>
    </div>
  );
};

// Custom arrow for the next button
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#550088", fontSize: "16px", margin: "auto", backgroundColor: "grey" }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right data-arrow" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="#550088"></path> </svg>
    </div>
  );
};
const DatasetsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-white py-16 pl-24 pt-0 max-sm:pl-4 ml-16 max-sm:ml-4 datasection">
        <div className='flex justify-between mb-8 browseData mr-24 max-sm:mr-4 max-sm:block'>
            <h1 className="text-3xl font-semibold text-PurpleHead mb-4">Not sure? The proof is in the datasets</h1>
            <button className="bg-white w-auto text-PurpleHead underline mt-2 px-3 py-2 text-sm flex font-bold">Browse full datasets <span className="no-underline pl-2">{'>'}</span></button>

        </div>
        <Slider {...settings}>
            {datasets.map((dataset) => (
                <div key={dataset.id} className="px-4">
                <div className="bg-LightBackColor p-6 rounded-lg  shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <div className='py-2 px-4 bg-white rounded-2xl text-PurpleHead text-xs font-bold'>{dataset.category}</div>
                        <div className='flex '>
                          {dataset.tags.map((tag, index) => (
                              <span key={index} className="text-xs text-LightPurpleHead font-medium px-2 py-1">{tag.split(' | ').join(' ')}</span>
                          ))}
                        <div className='bg-LightPurpleHead rounded-2xl mt-1 w-7 h-5 text-xs font-bold text-white pl-2'>+{dataset.count}</div>
                        </div>
                    </div>
                    <h3 className="text-PurpleHeadDark text-lg mb-2">{dataset.title}</h3>
                    <button className="mt-4 text-xs font-bold text-PurpleHead hover:underline">{dataset.description}</button>
                </div>
                </div>
            ))}
        </Slider>
    </section>
  );
};

export default DatasetsCarousel;
