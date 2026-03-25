import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate();
    return (
        <>
        <div className='bg-gradient-to-r from-gray-900 to-gray-700 h-screen text-white text-center flex gap-5 justify-center flex-col'>
            <h1 className='font-bold text-5xl'>Elevate Your Style</h1>
            <p className='text-xl text-gray-200'>Discover the latest trends in premium fashiom</p>
            <button className='bg-white text-black w-fit px-3 py-2 rounded-lg relative left-6/12' onClick={()=>navigate('/shop')}>Shop Now</button>
        </div>
        </>
    )
}

export default HomePage
