import React from 'react';
import Slider from 'react-slick';
import testimonialsData from '../../assets/json/testimonials.json'; // Update the path as necessary
import higherImg from '../../assets/images/higher.png'
import secondTestImg from '../../assets/images/testi.png'
import TestimoImg from '../../assets/images/second.png'
import reportImg from '../../assets/images/Scree.png'

const images = {
  'test-instrument': higherImg,
  'unmatched-data': secondTestImg,
  'cells-nuclei': TestimoImg,
};
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

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  fontSize: "16px", margin: "auto",backgroundColor: "#550088" }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right data-arrow" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="#FFFFFF"></path> </svg>
    </div>
  );
};
const TestimonialsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <section className="text-center testiSection px-32 max-md:px-8 py-12 max-sm:pb-8 max-sm:p-4">
        <div className='p-16 pt-8 rounded-lg bg-white max-sm:m-0 max-sm:p-10 max-sm:rounded-lg'>
            <blockquote className="m-auto blockSection">
                <img src={reportImg} alt="report"></img>
            </blockquote>
            <h1 className="text-4xl font-semibold text-PurpleHead mb-4 text-left max-w-xl">We detected rare cell types with Evercode’s higher sensitivity</h1>
            <hr className='mt-8'></hr>
            <Slider {...settings}>
                {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="px-4 mt-4">
                    <div>
                        <div className="flex items-center mb-4 navBtnTesti ">
                            <div className='borderButton w-20 rounded-full'>
                                <img
                                src={images[testimonial.id]} // Replace with your image path
                                alt={testimonial.name}
                                className="rounded-full w-20 object-cover mr-4"
                                />
                            </div>
                            <div className='pl-4 text-left'>
                            <p className="font-semibold text-PurpleHead">{testimonial.name}</p>
                            <p className="text-xs text-gray">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
        <button className=" bg-PurpleHead text-white p-3 mt-8 shadow-md rounded-lg font-bold max-sm:mt-8 ">
            See our 10x comparison study
        </button>
    </section>
  );
};

export default TestimonialsSection;
