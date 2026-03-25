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
        

        <div className='flex  gap-15 p-5 flex-wrap justify-center my-8'>
          {
          visibleProducts.map((element)=>(
            <div className='bg-white rounded-2xl transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2'>
              <div>

                <img className='border-b border-gray-500 w-full p-10' src={element.image} />
                </div>
                <div className='p-3 flex flex-col gap-2 font-bold'>
                <p className='text-gray-400'>{element.category}</p>
                <h1 >{element.title}</h1>
                <p>${element.price}</p>
                </div>
              
                </div>
          ))
            
          }

        </div>

        
          <button 
           onClick={()=>navigate('/shop')}
            className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition'
          >
            View All Products
          </button>

        </div>


    )
}

export default Section
