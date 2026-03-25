import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Section() {
  const navigate=useNavigate();
    const [products,setProducts]=useState([]);
    

     useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    
  const visibleProducts=products.slice(0,4);
    return (
       
        <div className='mx-5 my-8'>

<div className='flex flex-col gap-5'>
<h1 className='font-bold text-3xl text-center'>Featured Products</h1>
        <p className='text-center text-gray-700'>Handpicked items just for you</p>
</div>
        
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 my-8'>
  {visibleProducts.map((element) => (
    <div
      key={element.id}
      className='bg-white rounded-2xl transition hover:shadow-xl hover:-translate-y-2'
    >
      <img
        className='border-b border-gray-300 w-full h-48 object-contain p-5'
        src={element.image}
      />

      <div className='p-3 flex flex-col gap-2 font-bold'>
        <p className='text-gray-400 text-sm'>{element.category}</p>
        <h1 className='text-sm'>{element.title}</h1>
        <p>${element.price}</p>
      </div>
    </div>
  ))}
</div>

        <div className='flex justify-center'>

          <button 
           onClick={()=>navigate('/shop')}
            className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition '
          >
            View All Products
          </button>
</div>

        </div>


    )
}

export default Section
