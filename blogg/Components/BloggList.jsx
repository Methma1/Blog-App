import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import Bloggitem from './Bloggitem'

const BloggList = () => {
    const [menu,setMenu] = useState("Home"); 
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu('Home')} className={menu==="Home"?'bg-black text-white py-1 px-4 rounded-sm':""}>Home</button>
            <button onClick={()=>setMenu('Destination')}className={menu==="Destination"?'bg-black text-white py-1 px-4 rounded-sm':""}>Destination</button>
            <button onClick={()=>setMenu('Experiences')}className={menu==="Experiences"?'bg-black text-white py-1 px-4 rounded-sm':""}>Experiences</button>
            <button onClick={()=>setMenu('About{')}className={menu==="About"?'bg-black text-white py-1 px-4 rounded-sm':""}>About</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=>menu==="Home"?true:item.category===menu).map((item,index)=>{
               return<Bloggitem key={index} image={item.image} id={item.id} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BloggList