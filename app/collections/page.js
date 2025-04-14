import React from 'react'
import { FaShopify } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import OurCollections from '../../components/ourCollections'
import Hero from '../../components/hero'

function Page() {
  return (
    <main>
          <Hero></Hero>

              <div className='mt-10'>
              <OurCollections></OurCollections>
              </div>
    </main>
  )
}

export default Page
