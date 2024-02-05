import React from 'react';
import productsData from '../../assets/json/productData.json'; // Adjust the import path as needed

const ProductSection = () => {
  return (
    <section className="bg-white mb-4">
      <div className="max-w-5xl lg:px-8 m-auto max-sm:w-96">
        <div className='py-10 max-sm:p-0 text-center'>
            <h3 className="text-PurpleHead text-3xl">Accelerate your research with
            <span className="font-bold text-PurpleHead block max-sm:inline mb-4 text-2xl max-sm:text-3xl"> Evercode™ products</span></h3>
            <p className="text-base w-2/4 max-sm:w-full text-LiGrey max-w-sm m-auto">
                Split-pool combinatorial barcoding is a scalable single-cell technology that uses tools you already have
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {productsData.map((product, index) => (
            <article key={product.id} className={`${product.categoryClass} rounded-lg shadow-lg max-sm:mt-6`}>
                <div className='p-6 pb-4'>
                    <h3 className="text-xl text-white font-semibold text-center">{product.category}</h3>
                    <p className="mb-4 text-white text-xs text-center m-auto max-w-64">{product.description}</p>
                </div>
                <ul className="mb-4 text-white text-center">
                    {product.products.map((item, itemIndex) => (
                        <div className='product-li'>
                            <li key={itemIndex} className='underline p-2 text-lg'>{item} {product.details && product.details[itemIndex] ? <span className='text-xs text-PurpleHead showDetails'>{product.details[itemIndex]}</span> : null }</li>
                            <p className='proDetail'>{product.details[itemIndex]}</p>
                        </div>
                    ))}
                </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
