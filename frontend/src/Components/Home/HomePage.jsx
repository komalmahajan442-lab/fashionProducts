import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate();
    return (
        <>
        <div className='bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen text-white text-center flex gap-5 justify-center flex-col px-5'>
            <h1 className='font-bold text-3xl md:text-5xl'>Elevate Your Style</h1>
            <p className='md:text-xl text-lg text-gray-200'>Discover the latest trends in premium fashiom</p>
            <button className='bg-white text-black w-fit px-3 py-2 rounded-lg relative  mx-auto' onClick={()=>navigate('/shop')}>Shop Now</button>
        </div>
        </>
    )
}

export default HomePage
