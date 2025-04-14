import React from 'react'
import Hero from '../../components/hero'
import Product from '../../components/product'
import ProductList from '../../components/productList'
import { LuCircle } from "react-icons/lu";

function Page() {
  return (
    <main>
      <Hero></Hero>


      <section className='flex flex-row gap-10 mt-10 mb-20'>
        <div className='w-[26%]'>
            <div>
                <h1 className='text-[1.3rem] font-medium'>Shop</h1>
                <p className='text-[1rem] text-[#6c6474] font-normal mt-1'>
                Split your products into categories so visitors can easily navigate.
                </p>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
                <div className='flex flex-row items-center gap-1.5 border-b pb-2'>
                <LuCircle />    
                <h1 className='font-medium'>All</h1>
                </div>
                <div className='flex flex-row items-center gap-1.5 border-b pb-2'>
                <LuCircle />    
                <h1 className='font-medium'>Technology</h1>
                </div>
                <div className='flex flex-row items-center gap-1.5 border-b pb-2'>
                <LuCircle />    
                <h1 className='font-medium'>Footwear</h1>
                </div>
                <div className='flex flex-row items-center gap-1.5 border-b pb-2'>
                <LuCircle />    
                <h1 className='font-medium'>Home</h1>
                </div>
                
            </div>
            
        </div>
        <div className='w-fit flex '>
            <ProductList></ProductList>
        </div>
      </section>
      
    </main>
  )
}

export default Page
