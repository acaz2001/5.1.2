import React from 'react'
import BlogGridCard from './blogGridCard'
import blogPosts from '../data/blogData.json';
import { getAllBlogs } from '../sanity/lib/getAllBlogs';


export default async function BlogGrid() {
  const blogs = await getAllBlogs();


  return (
    <main className='w-full h-fit grid grid-cols-1
    lg:grid-cols-3 lg:grid-rows-auto gap-5
    md:grid-cols-2
    '>
      {blogs.map((post) => (
        <BlogGridCard key={post.slug.current} 
        post={{ ...post, slug: post.slug.current }} />
      ))}
    </main>
  )
}

