'use client';
import React, { useState, useEffect, useRef } from 'react';
import { PiCursorFill } from "react-icons/pi";
import FaqShop from './faqShop';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; // ✅ Ispravan import

function ProductClient({ product }) {
  const { addToCart } = useCart(); // ✅ Koristimo useCart

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );

  const mainImageRef = useRef(null);
  const imageRef = useRef(null);

    useEffect(() => {
    const mainImage = mainImageRef.current;
    const image = imageRef.current;

    if (!mainImage || !image) return;

    const handleMouseMove = (e) => {
      const rect = mainImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      image.style.transformOrigin = `${x}px ${y}px`;
      image.style.transform = 'scale(2)';
    };

    const resetZoom = () => {
      image.style.transform = 'scale(1)';
    };

    mainImage.addEventListener('mousemove', handleMouseMove);
    mainImage.addEventListener('mouseleave', resetZoom);

    return () => {
      mainImage.removeEventListener('mousemove', handleMouseMove);
      mainImage.removeEventListener('mouseleave', resetZoom);
    };
  }, []);

  const addToCartHandler = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: selectedVariant.price,
      image: `/${selectedVariant.image}.png`,
      variant: selectedVariant.name, // ✅ ovo dodaješ
      quantity: 1
    });
  };


  return (
    <main className='w-full'>
      <section className='flex lg:flex-row gap-10 w-full h-fit
      flex-col '>
        {/* Image and Variants for Product */}
        <div className='lg:w-[61%] lg:h-[90%] flex flex-col-reverse lg:flex-row md:flex-row gap-5'>
          {/* Left: thumbnails */}
          <div className='flex flex-row justify-start w-[100%] gap-2
          lg:w-[10%] lg:justify-start lg:flex-col lg:gap-2
          md:w-[10%] md:justify-start md:flex-col md:gap-2'>
            {product.variants.map((variant, index) => (
              <div
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className='bg-[#f9f6fe] rounded-sm p-2 cursor-pointer
                flex flex-row justify-start h-20 
                lg:h-auto md:h-auto'
              >
                <img src={`/${variant.image}.png`} />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div ref={mainImageRef} className=' relative bg-[#f9f6fe] w-[100%] lg:w-[90%] md:w-[90%] p-20 rounded-3xl overflow-hidden'>
            <div className='absolute top-0 right-0 flex flex-col items-center gap-1'>
              <PiCursorFill className='text-[0.8rem]' />
              <p className='text-[0.8rem] text-center w-[60%] leading-[1.1]'>Hover to zoom</p>
            </div>
            <img ref={imageRef} src={`/${selectedVariant.image}.png`} />
          </div>
        </div>

        {/* Right: info */}
        <div className='lg:w-[35.5%] flex flex-col items-start gap-2'>
          <div className='flex flex-row items-center gap-2 mb-1'>
            <Link href="/shop">
              <p className='text-[0.9rem] text-[#6c6474] transition-all duration-300 ease-in-out
              cursor-pointer hover:text-black'>
                Shop
              </p>
            </Link>
            <svg width="6" height="6">
              <circle cx="3" cy="3" r="3" fill="grey" />
            </svg>
            <p className='text-[0.9rem] text-[#6c6474] transition-all duration-300 ease-in-out
            cursor-pointer hover:text-black'>
              Technology
            </p>
          </div>

          <h1 className='text-[2.8rem] font-medium w-full leading-[1.1]'>{product.name}</h1>

          <div className='flex flex-row gap-4'>
            <p className='text-[1.3rem] font-[450]'>USD ${selectedVariant.price}</p>
            <p className='text-[1.3rem] text-[#6c6474] font-[450] relative'>
              USD ${selectedVariant.priceOld}
              <span className='absolute w-full h-0.5 bg-[#6c6474] bottom-3.5 left-0'></span>
            </p>
          </div>

          <p className='text-[#6c6474] text-[1rem] mt-3'>{product.desc}</p>

          <div className='mt-4'>
            <p className='text-[1rem]'>{product.variantTitle}</p>
            <div className='flex gap-2 mt-2'>
              {product.variants.map((variant, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-5 py-2 rounded-sm font-medium text-[0.9rem] 
                    cursor-pointer transition-all duration-400 ease-in-out ${
                    selectedVariant.name === variant.name ? 'bg-black text-white' : 'bg-[#ebebeb]'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          <div className='flex flex-col w-[100%] gap-4 mt-8'>
            <button
              className='bg-black text-[1rem] text-white font-medium w-full rounded-2xl pt-3 pb-3 cursor-pointer'
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
            {/* 
            <button 
            className='bg-[#ebebeb] text-[1rem] font-medium rounded-2xl pt-3 pb-3 cursor-pointer'>
              Buy Now
            </button>            
            */}

          </div>

          <div className='mt-8 w-full'>
            <FaqShop />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductClient;
