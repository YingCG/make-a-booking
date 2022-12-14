import React from 'react'
import {Link} from 'react-router-dom'

export default function Story({blog}) {
  return (
    <div className='px-4 py-4 '>
        <h3 className='font-bold'>{blog.title}</h3>
        <p className='mb-2'>{blog.content}</p>
        {blog.url && <Link className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' to={blog.url}>{blog.url}</Link>}
    </div>
  )
}
