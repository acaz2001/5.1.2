import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";


function Product() {
  return (
    <main className='w-[100%]'>
      <div className='bg-[#f9f6fe] relative w-[100%] h-[82%] rounded-2xl'>
        <img src={"/AppleWatch.png"} className='w-[300px] p-5'></img>
        <div className='absolute bottom-0 right-0'>
            <LuArrowUpRight/>
        </div>
      </div>
      <div className='mt-2'>
        <h1 className='text-[1.3rem] font-medium'>
        Retro Handheld Console
        </h1>
        <p className='text-[0.9rem] text-[#6c6474] font-medium mt-1'>
        USD $59.99    
        </p>
      </div>

    </main>
  )
}

export default Product
