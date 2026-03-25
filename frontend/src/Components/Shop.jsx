import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';

import { MyContext } from '../Context';

function Shop() {
    const navigate=useNavigate();
const {products}=useContext(MyContext);

    return (
      <>
      <div className='pt-20 pb-10 bg-[#e9ebef] min-h-screen'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl px-4 sm-px-8 md:px-10 py-5'>Shop All</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-20'>
            {products.map((element,index)=>(
                <div onClick={()=>navigate(`/shop/${element._id}`)} key={index} className='bg-white 
              rounded-2xl 
              cursor-pointer
              transition 
              duration-300 
              ease-in-out 
              hover:shadow-xl 
              hover:-translate-y-2'>
                    <div>

                <img className=' w-full 
                h-48 sm:h-56 md:h-64 
                object-contain 
                border-b 
                p-5 ' src={element.image} />
                </div>
                <div className='p-3 flex flex-col gap-2 font-bold'>
                <p className='text-gray-400 text-sm'>{element.category}</p>
                <h1 className='font-semibold text-sm sm:text-base line-clamp-2'>{element.title}</h1>
                <p className='font-bold text-lg'>${element.price}</p>
                </div>
                    </div>
            ))}
        </div>
      </div>
      </>  
    )
}

export default Shop
