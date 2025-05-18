'use client';
import React from 'react';

function MoreBanner() {
  return (
    <main className='w-full h-350 sm:h-420 mt-14 flex flex-col gap-6 overflow-hidden
    lg:flex lg:flex-row lg:justify-between lg:h-[22rem]
    md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 md:h-[50rem]'>
      
      {/* 1 */}
      <section className='group flex flex-col h-full lg:w-[31%] overflow-hidden'>
        <div className='relative bg-cover object-top h-[80%] rounded-2xl overflow-hidden cursor-pointer'>
          <img
            src='/christopher.jpg'
            className='absolute w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.02]'
            alt='Productivity'
          />
          <div className='absolute bg-[#ede4fc] font-medium pt-0.5 pb-0.5 pl-2 pr-2 rounded-tr-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none'>
            <p className='text-[0.9rem]'>Productivity</p>
          </div>
        </div>
        <h1 className='text-[1.1rem] font-medium mt-2'>
          How to Make Your Social Media Posts Stand Out with Templates
        </h1>
      </section>

      {/* 2 */}
      <section className='group flex flex-col h-full lg:w-[31%] overflow-hidden'>
        <div className='relative bg-cover object-top h-[80%] rounded-2xl overflow-hidden cursor-pointer'>
          <img
            src='/vojtech.jpg'
            className='absolute w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.02]'
            alt='Guides'
          />
          <div className='absolute bg-[#ede4fc] font-medium pt-0.5 pb-0.5 pl-2 pr-2 rounded-tr-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none'>
            <p className='text-[0.9rem]'>Guides</p>
          </div>
        </div>
        <h1 className='text-[1.1rem] font-medium mt-2'>
          The Beginner’s Guide to Using Mockups for Your Brand
        </h1>
      </section>

      {/* 3 */}
      <section className='group flex flex-col h-full lg:w-[31%] overflow-hidden'>
        <div className='relative bg-cover object-top h-[80%] rounded-2xl overflow-hidden cursor-pointer'>
          <img
            src='/charlesdeluvio.avif'
            className='absolute w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.02]'
            alt='Trends'
          />
          <div className='absolute bg-[#ede4fc] font-medium pt-0.5 pb-0.5 pl-2 pr-2 rounded-tr-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none'>
            <p className='text-[0.9rem]'>Trends</p>
          </div>
        </div>
        <h1 className='text-[1.1rem] font-medium mt-2'>
          Why a Fast, Mobile-Friendly Store Matters for Your Customers
        </h1>
      </section>

    </main>
  );
}

export default MoreBanner;
