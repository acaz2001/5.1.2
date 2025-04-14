import React from 'react'

function Footer() {
  return (
    <main className='relative mt-12 flex flex-row justify-between items-start  bg-[#ede4fc] rounded-2xl'>
      <section className='flex flex-col relative pt-17 pl-15 pr-10 pb-5'>
        <div className='absolute top-0 left-0'>
            <h1 className='text-[1.3rem]'>Commerce_</h1>
        </div>
        <div>
            <h1 className='text-[1.8rem] font-medium w-[55%]'>
            Join our newsletter and get 20% off your first purchase with us.
            </h1>
            <input className='mt-3 border-[5px] bg-white border-transparent pt-2 pb-2 pl-3 rounded-2xl'
            type="text" id="fname" name="firstname" placeholder="Your email adress">
            </input>
            <p className='mt-10 text-[#6c6474] text-[0.8rem]'>
            Created by <span className='text-black'>Hamza Ehsan</span> © 2024    
            </p>
        </div>
      </section>
      <section className='flex flex-row gap-15 pt-17 pr-20 pb-5'>
        <div >
            <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Pages</li>
                <li className='text-[0.90rem]'>Home</li>
                <li className='text-[0.90rem]'>Shop</li>
                <li className='text-[0.90rem]'>Collections</li>
                <li className='text-[0.90rem]'>Blog</li>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Information</li>
                <li className='text-[0.90rem]'>Terms & Conditions</li>
                <li className='text-[0.90rem]'>Privacy policy</li>
                <li className='text-[0.90rem]'>Support</li>
                <li className='text-[0.90rem]'>404</li>
            </ul>
        </div>
      </section>
    </main>
  )
}

export default Footer
