import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from './Spinner';

function Random() {
    const[gif,setgif]=useState('')
    const[loading,setloading]=useState(false);
    const API_KEY=process.env.REACT_APP_GIPHY_KEY
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const fetchData = async () => {
        setloading(true)
        const output = await fetch(url);
        const response=await output.json()
        const imagesrc= await response.data.images.downsized_large.url
        setgif(imagesrc);
        setloading(false)

        
        // Rest of your code here
    }
    useEffect(()=>{
        fetchData();

    },[])
  return (
    <div className='container'>
        <h4> Random Gif</h4>
        {loading?<Spinner/>:<img src={gif}/>}
        
        <button onClick={()=>{fetchData()}}> Another Random Gif</button>


      
    </div>
  )
}

export default Random
