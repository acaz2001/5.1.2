import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaDiamond } from "react-icons/fa6";
import { BsFillFastForwardFill } from "react-icons/bs";


function AboutProd() {
  return (
    <main className='mt-12 flex flex-row justify-between'>
      <section className='relative pt-10 pb-10 pl-7 bg-[#f9f6fe] rounded-2xl w-[31.5%]'>
        <div className='absolute top-0 left-0 bg-[#ede4fc] p-4 rounded-full'>
            <BsFillLightningChargeFill className='text-[1.2rem]' />
        </div>
        <div className='mt-10 w-fit'>
            <h1 className='w-fit text-[1.1rem] font-medium'>
            Instant Digital Downloads</h1>
            <p className='mt-2 text-[#6c6474] text-[0.95rem] w-[80%]'>
            Access your digital products purchase immediately after checkout.</p>
        </div>
      </section>
      <section className='relative pt-10 pb-10 pl-7 pr-5 bg-[#f9f6fe] rounded-2xl w-[31.5%]'>
        <div className='absolute p-4 top-0 left-0 bg-[#ede4fc] rounded-full'>
            <FaDiamond className='text-[1.2rem]'/>
        </div>
        <div className='mt-10 w-fit'>
            <h1 className='w-fit text-[1.1rem] font-medium'>
            Premium Quality Materials</h1>
            <p className='mt-2 text-[#6c6474] text-[0.95rem] w-[80%]'>
            Products crafted with only the finest materials for long-lasting quality.</p>
        </div>
      </section>
      <section className='relative pt-10 pb-10 pl-7 pr-5 bg-[#f9f6fe] rounded-2xl w-[31.5%]'>
        <div className='absolute  p-4 top-0 left-0 bg-[#ede4fc] rounded-full'>
            <BsFillFastForwardFill className='text-[1.2rem]' />
        </div>
        <div className='mt-10 w-fit'>
            <h1 className='w-fit text-[1.1rem] font-medium'>
            Fast & Secure Shipping</h1>
            <p className='mt-2 text-[#6c6474] text-[0.95rem] w-[80%]'>
            Fast and secure shipping with complete tracking on all physical product orders.</p>
        </div>
      </section>
    </main>
  )
}

export default AboutProd
