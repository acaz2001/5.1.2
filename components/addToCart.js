'use client'
import React from 'react';
import { MdOutlineCancel } from "react-icons/md";

function AddToCart({ show, setShow }) {
  return (
    <main className={`
      fixed top-0 right-0 h-[100vh] w-[500px] bg-[white] 
      flex flex-col justify-between z-50
      transition-transform duration-500 ease-in-out
      ${show ? 'translate-x-0' : 'translate-x-full z-200'}
    `}>
      {/* Header */}
      <section className='flex flex-row items-center justify-between pt-4 pb-4 pl-6 pr-6 border-b bg-[white]'>
        <div className='flex flex-row items-center gap-5'>
          <h1 className='text-[1.6rem] font-[450] cursor-pointer'>Your Cart</h1>
          <div className='bg-[#f9f6fe] pt-0.5 pb-0.5 pl-2 pr-2 rounded-[50%] cursor-pointer'>
            <p className='font-[500]'>0</p>
          </div> 
        </div>
        <div
          className='p-2 bg-[#f9f6fe] rounded-xl cursor-pointer'
          onClick={() => setShow(false)}
        >
          <MdOutlineCancel className='text-[1.7rem]' />
        </div>
      </section>

      {/* Body */}
      <section className='bg-[white] flex-1 flex flex-col justify-center border-b'>
        <div className='flex flex-col items-center gap-1'>
          <h1 className='text-[1.3rem] font-[450]'>Your Cart is Empty</h1>
          <p className='text-[#6c6474]'>Add some items to the cart.</p>
        </div>
      </section>

      {/* Footer */}
      <section className='flex flex-col pt-4 pb-6 pl-6 pr-6 gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-[1.1rem] font-[450] cursor-pointer'>Subtotal</h1>
          <p className='font-[450] cursor-pointer'>$0</p>
        </div>
        <div className='bg-[#888888] flex flex-row justify-center rounded-3xl cursor-pointer'>
          <button className='text-white pt-3 pb-3 text-[0.9rem] font-[450] cursor-pointer'>
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}

export default AddToCart;
