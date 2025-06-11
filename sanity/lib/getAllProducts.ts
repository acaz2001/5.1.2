import React from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from './live'

export const getAllProducts = async () => {
    const All_PRODUCTS_QUUERY = defineQuery (
        `*[_type == "Product"] `
        );

}

export default getAllProducts
