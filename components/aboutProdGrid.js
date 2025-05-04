// components/AboutProdGrid.jsx
import React from 'react'

function AboutProdGrid({ children }) {
  return (
    <main className='mt-12 flex flex-col lg:flex-row lg:gap-[4%] overflow-x-auto
    md:flex md:flex-row sm:flex-col sm:gap-10 gap-10'>
      {children}
    </main>
  )
}

export default AboutProdGrid
