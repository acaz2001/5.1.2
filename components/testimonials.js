import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import BrendSlider from './brendSlider';

function Testimonials() {
  return (
    <main className='bg-[#f9f6fe] w-[100%] flex flex-col items-center pt-15 pb-15 mt-12 gap-12 z-5'>
      <section className='flex flex-col items-center gap-5'>
        <img className='rounded-[50%] w-20 h-20' src={"/avatar.jpg"}></img>
        <h1 className='text-[2.5rem] w-[70%] text-center'>Showcase customer testimonials that build trust and inspire confidencee in yout products.</h1>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-row items-center gap-1'>
            <FaStar className='text-[1.3rem]'/>
            <FaStar className='text-[1.3rem]'/>
            <FaStar className='text-[1.3rem]'/>
            <FaStar className='text-[1.3rem]'/>
            <FaStar className='text-[1.3rem]'/>
            </div>
            <h2 className='text-[1.1rem] text-[#6c6474]'>Your Customer</h2>
        </div>

      </section>
      <section className='flex flex-col items-center mt-5'>
        <p className='text-[#6c6474]'>
        Feature client logos to build trust and credibility for your brand:
        </p>
        <div className='w-[32%] mt-4'>
        <BrendSlider></BrendSlider>
        </div>
       
      </section>
    </main>
  )
}

export default Testimonials
