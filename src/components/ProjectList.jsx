import React, { useCallback, useEffect, useState } from 'react'
// import blogs from '../data/blog.json'
import AddAppointment from './AddAppointment'
import Search from './Search'
import Story from './Story'

export default function ProjectList() {
  const [data, setData] = useState([])

  // const fetchData = useCallback(() => {
  //     fetch('./data/blog.json')
  //     .then (response => response.json())
  //     .then(info => {
  //       setData(info)
  //     })
  //   },[]
  // )

  // useEffect(() => {
  //   fetchData()
  // },[fetchData])
  
  useEffect(() => {
    fetch('./data/blog.json')
    .then(response => response.json())
    .then(info => {
      setData(info)
    })
  },[])

  return (
    <>
      <div className='flex content-center mt-10 justify-between py-6 m-4'>
        <h1 className='text-3xl justify-center'>Current projects</h1>
        <Search/>
      </div>

        <div className='container mx-auto mt-2 grid grid-cols-4 gap-4'>
        {data.map(project => <Story key={project.id} blog={project}/>)}
      </div>

      <AddAppointment/>
    </>
  )
}
