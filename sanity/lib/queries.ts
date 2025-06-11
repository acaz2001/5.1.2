import {defineQuery} from 'next-sanity'

export const getAllProductsQuery = defineQuery(`*[_type == "Product"]`)
  
export const heroBanner = defineQuery(`*[_type == "heroBanner"]{ title, description, imageMain, imageDesc, price }`)