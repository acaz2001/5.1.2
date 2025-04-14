import React from 'react'
import Hero from '../../components/hero'
import BlogBanner from '../../components/blogBanner'
import BlogGridCard from '../../components/blogGridCard'
import BlogGrid from '../../components/blogGrid'
import MoreBanner from '../../components/moreBanner'

function Page() {
  return (
    <main className='flex flex-col gap-[4rem]'>
     <div>
     <Hero></Hero>
     </div>
     <BlogBanner></BlogBanner>
    <BlogGrid></BlogGrid>
      
    </main>
  )
}

export default Page
