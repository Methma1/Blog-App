import { blog_data } from '@/Assets/assets'
import React from 'react'
import Bloggitem from './Bloggitem'

const BloggList = () => {
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button className='bg-black text-white py-1 px-4 rounded-sm'>Home</button>
            <button>Destination</button>
            <button>Experiences</button>
            <button>About</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.map((item,index)=>{
               return<Bloggitem key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BloggList