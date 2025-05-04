import React from 'react'
import BlogGridCard from './blogGridCard'
import blogPosts from '../data/blogData.json';


function BlogGrid() {
  return (
    <main className='w-full h-fit grid grid-cols-1
    lg:grid-cols-3 lg:grid-rows-auto gap-5
    md:grid-cols-2
    '>
      {blogPosts.map((post) => (
        <BlogGridCard key={post.slug} post={post} />
      ))}
    </main>
  )
}

export default BlogGrid
