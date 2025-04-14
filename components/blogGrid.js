import React from 'react'
import blogGridCard from './blogGridCard'

function BlogGrid() {
  return (
    <main className='w-[100%] h-[680px] grid grid-cols-6 grid-rows-4 gap-5'>
    <section className='col-start-1 col-end-3 row-start-1 row-end-3 h-[100%] '>
      <div className='relative bg-[url(/christopher.jpg)] bg-cover object-top h-[80%] rounded-2xl'>
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
              <p className='text-[0.9rem]'>Productivity</p>
          </div>
      </div>
      <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
          How to Make Your Social Media Posts Stand Out with Templates
          </h1>
      </div>
    </section>
    <section className='col-start-3 col-end-5 row-start-1 row-end-3 h-[100%] '>
      <div className='relative bg-[url(/vojtech.jpg)] bg-cover h-[80%] rounded-2xl'>
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
              <p className='text-[0.9rem]'>Guides</p>
          </div>
      </div>
      <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
          The Beginner’s Guide to Using Mockups for Your Brand           
           </h1>
      </div>
    </section>
    <section className='col-start-5 col-end-7 row-start-1 row-end-3 h-[100%]'>
      <div className='relative bg-[url(/charlesdeluvio.jpg)] bg-cover h-[80%] rounded-2xl'>
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
              <p className='text-[0.9rem]'>Trends</p>
          </div>
      </div>
      <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
          Why a Fast, Mobile-Friendly Store Matters for Your Customers
          </h1>
      </div>
    </section>
    <section className='col-start-1 col-end-3 row-start-3 row-end-5 h-[100%] '>
      <div className='relative bg-[url(/christopher.jpg)] bg-cover object-top h-[80%] rounded-2xl'>
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
              <p className='text-[0.9rem]'>Productivity</p>
          </div>
      </div>
      <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
          How to Make Your Social Media Posts Stand Out with Templates
          </h1>
      </div>
    </section>
    <section className='col-start-3 col-end-5 row-start-3 row-end-5 h-[100%] '>
      <div className='relative bg-[url(/vojtech.jpg)] bg-cover h-[80%] rounded-2xl'>
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
              <p className='text-[0.9rem]'>Guides</p>
          </div>
      </div>
      <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
          The Beginner’s Guide to Using Mockups for Your Brand           
           </h1>
      </div>
    </section>
    <section className='col-start-5 col-end-7 row-start-3 row-end-5 h-[100%]'>
      <div className='relative bg-[url(/charlesdeluvio.jpg)] bg-cover h-[80%] rounded-2xl'>
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
              <p className='text-[0.9rem]'>Trends</p>
          </div>
      </div>
      <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
          Why a Fast, Mobile-Friendly Store Matters for Your Customers
          </h1>
      </div>
    </section>
  </main>
  )
}

export default BlogGrid
