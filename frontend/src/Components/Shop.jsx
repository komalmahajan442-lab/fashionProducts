import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';

import { MyContext } from '../Context';

function Shop() {
    const navigate=useNavigate();
const {products}=useContext(MyContext);

    return (
      <>
      <div className='py-20 bg-[#e9ebef]'>
        <h1 className='font-bold text-4xl px-10 py-5'>Shop All</h1>

        <div className='grid grid-cols-2 gap-15 p-5  justify-center my-8 px-20'>
            {products.map((element,index)=>(
                <div onClick={()=>navigate(`/shop/${element._id}`)} key={index} className='bg-white rounded-2xl transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2'>
                    <div>

                <img className='border-b border-gray-500 w-full p-10 h-[25rem] ' src={element.image} />
                </div>
                <div className='p-3 flex flex-col gap-2 font-bold'>
                <p className='text-gray-400'>{element.category}</p>
                <h1 >{element.title}</h1>
                <p>${element.price}</p>
                </div>
                    </div>
            ))}
        </div>
      </div>
      </>  
    )
}

export default Shop
