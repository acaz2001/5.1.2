import React from 'react';
import Product from './product';
import productPosts from '../data/products.json';

function ProductList({ activeCategory = 'All', isPopular = 'false' }) {
  // 1. Filter po kategoriji ako nije "All"
  const filteredByCategory = activeCategory === 'All'
    ? productPosts
    : productPosts.filter(post => post.category === activeCategory);

  // 2. Filter po popularnosti ako isPopular === "true"
  const postsToDisplay = isPopular === 'true'
    ? filteredByCategory.filter(post => post.popular === 'true') // popular je string u JSON-u
    : filteredByCategory;

  return (
    <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 
    gap-5 auto-rows-auto w-[100%] p-0 m-0'>
      {postsToDisplay.map((post) => (
        <Product key={post.slug} post={post} />
      ))}
    </main>
  );
}

export default ProductList;
