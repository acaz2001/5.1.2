'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import testimonialsData from '../data/testimonialsData.json';
import BrendSlider from './brendSlider';

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[current];

  return (
    <>
      <svg width="0" height="0" className="absolute hidden">
      <defs>
        <clipPath id="clip-testimonial" clipPathUnits="objectBoundingBox">
          <path d="M 0.001155 0.022195 C 0.002079 0.003898 0.007955 0.000901 0.010778 0.00169 L 0.598152 0.00169 H 0.89261 C 0.902463 0.00169 0.901848 0.013407 0.901848 0.028391 V 0.076532 C 0.901848 0.085274 0.905312 0.092348 0.909577 0.09231 C 0.937044 0.092062 0.98174 0.091811 0.988453 0.092384 C 0.995489 0.092985 0.99843 0.106509 0.999138 0.114154 C 0.999207 0.114887 0.99923 0.115597 0.99923 0.116344 V 0.976273 C 0.99923 0.977178 0.999199 0.977694 0.999099 0.978577 C 0.997614 0.992074 0.991694 0.996983 0.988838 0.997746 H 0.005774 C 0.001771 0.997746 0.00077 0.98986 0.00077 0.985916 C 0.000898 0.6723 0.001155 0.040491 0.001155 0.022195 Z" />
        </clipPath>
      </defs>
    </svg>

    <main style={{
    clipPath: 'url(#clip-testimonial)',
    WebkitClipPath: 'url(#clip-testimonial)'
  }}
    className='relative bg-[#f9f6fe] w-full flex flex-col items-center pt-20 pb-20 mt-12 gap-12 z-5 rounded-2xl overflow-hidden'>
        {/* Arrows */}
        <section className='absolute top-0 right-0 flex flex-row gap-5 pt-3 pr-2'>
          <div className=' cursor-pointer'>
            <FiChevronLeft size={32} onClick={handlePrev} />
          </div>
          <div className=' cursor-pointer'>
            <FiChevronRight size={32} onClick={handleNext} />
          </div>
        </section>
      <section className='flex flex-col items-center gap-5 relative'>
        <img
          className='rounded-full w-20 h-20 object-cover
          transition-all duration-400 ease-in-out'
          src={`/${currentTestimonial.avatarImage}.jpg`}
          alt='Customer avatar'
        />
        <h1 className='text-[1.4rem] sm:text-[2rem] leading-[1.2] 
        lg:text-[2.5rem] w-[80%] text-center font-[480]'>
          {currentTestimonial.title}
        </h1>

        {/* Stars */}
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-row items-center gap-1 text-yellow-500'>
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
          </div>
          <h2 className='text-[1.1rem] text-[#6c6474]'>Your Customer</h2>
        </div>



      </section>

      {/* Logos below */}
      <section className='flex flex-col items-center justify-center mt-5'>
        <p className='text-[#6c6474] text-[0.9rem] lg:text-[1rem] md:text-[1rem] sm:text-[1rem]'>
          Feature client logos to build trust and credibility for your brand:
        </p>
        <div className='w-[32%] mt-4'>
          <BrendSlider />
        </div>
      </section>
    </main>
    </>
  );
}

export default Testimonials;
