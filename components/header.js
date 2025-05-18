'use client'
import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { PiBasketFill } from "react-icons/pi";
import Link from 'next/link'
import AddToCart from '../components/addToCart'; // prilagodi putanju
import CartIcon from './cartIcon';

function Header() {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      {/* Header meni */}
      <main className='absolute flex flex-row items-center w-fit lg:gap-1 md:gap-1 sm:gap-0 gap-0 px-4 py-[10px] bg-transparent rounded-xl z-50'>
        <section className='mr-3'>
          <Link href="/">
            <h2 className='text-[1.2rem] font-medium cursor-pointer'>
              Commerce_
            </h2>
          </Link>
        </section>
        <section>
          <ul className='flex flex-row items-center gap-0 text-[0.9rem]'>
            <Link href="/shop">
              <li className='cursor-pointer text-[0.8rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450]'>
                Shop</li>
            </Link>
            <Link href="/collections">
              <li className='cursor-pointer  text-[0.8rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450]'>
                Collections</li>
            </Link>
            <Link href="/blog">
              <li className='cursor-pointer  text-[0.8rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450]'>
                Blog</li>
            </Link>
            <Link href="/support">
              <li className='cursor-pointer hidden lg:block md:block sm:hidden text-[0.8rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450]'>
                Support</li>
            </Link>
          </ul>
        </section>
        <section className='flex flex-row items-center gap-3 ml-2'>
          <GoSearch className='text-[1rem]' />
          <CartIcon showCart={showCart} setShowCart={setShowCart} />
        </section>
      </main>

      {/* Overlay (zatvara korpu klikom van nje) */}
      {showCart && (
        <div
          className="fixed inset-0 z-50 w-[100%] bg-black opacity-80"
          onClick={handleCloseCart}
        />
      )}

      {/* AddToCart kartica sa animacijom */}
      <div className='z-100' >
      <AddToCart show={showCart} setShow={setShowCart} />
      </div>
      
    </>
  );
}

export default Header;
