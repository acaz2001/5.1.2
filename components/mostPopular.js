import React from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu";


function MostPopular() {
  return (
    <main className='flex flex-row items-center justify-between'>
      <section className='flex flex-col relative w-[31%]'>
        <div className='bg-[#f9f6fe] p-10 relative rounded-3xl'>
            <img className='w-[18rem]' src={"/mostpopular1.png"}></img>
            <div className='w-[5rem] absolute bottom[0]'><LuArrowUpRight className='absolute'/></div>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <h1 className='text-[1.3rem]'>Retro Handheld Console</h1>
            <h4 className='text-[1.1rem]'>Technology</h4>
            <p className='text-[0.8rem] text-[#6c6474]'>USD $59.99</p>
        </div>
      </section>
      <section className='flex flex-col relative w-[31%]' >
      <div className='bg-[#f9f6fe] p-10 relative rounded-3xl'>
            <img className='w-[18rem]' src={"/mostpopular1.png"}></img>
            <div className='w-[5rem] absolute bottom[0]'><LuArrowUpRight className='absolute'/></div>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <h1 className='text-[1.3rem]'>Horizon Glow Sneakers</h1>
            <h4 className='text-[1.1rem]'>Footwear</h4>
            <p className='text-[0.8rem] text-[#6c6474]'>USD $59.99</p>
        </div>
      </section>
      <section className='flex flex-col relative w-[31%]'>
      <div className='bg-[#f9f6fe] p-10 relative rounded-3xl'>
            <img className='w-[18rem]' src={"/mostpopular1.png"}></img>
            <div className='w-[5rem] absolute bottom[0]'><LuArrowUpRight className='absolute'/></div>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <h1 className='text-[1.3rem]'>Tropical Paradise Plant</h1>
            <h4 className='text-[1.1rem]'>Home</h4>
            <p className='text-[0.8rem] text-[#6c6474]'>USD $39.99</p>
        </div>
      </section>
    </main>
  )
}

export default MostPopular
