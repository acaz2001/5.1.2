import React from 'react'
import Product from './product'

function ProductList() {
  return (
    <main className='grid grid-cols-3 auto-rows-auto gap-12 w-[100%] p-0 m-0'>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </main>
  )
}

export default ProductList
