import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData()
    
    // const [data, Setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Harshit882002')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         Setdata(data)
    //     })
    // }, [])


    
  return (
    <div className='text-center m-4 p-4 text-2xl'>Github Followers : {data.followers} 
    <img id='img' width={300} src={data.avatar_url} alt="Github Picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
   const response = await fetch('https://api.github.com/users/Harshit882002')
   return response.json()
}