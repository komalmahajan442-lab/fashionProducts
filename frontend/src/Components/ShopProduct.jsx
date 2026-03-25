import React, { useContext } from 'react';
import { MyContext } from '../Context';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ShopProduct() {
  const { products } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    console.log('Invalid id');
  }

  if (products.length === 0) {
    return <h1 className="p-10 text-center">Loading products...</h1>;
  }

  const product = products.find(
    (item) => item._id?.toString() === id
  );

  if (!product) {
    return <h1 className="p-10 text-center">Loading...</h1>;
  }

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        'https://fashionproducts.onrender.com/add-to-cart',
        { productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success(res.data.message);

    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Something went wrong!");
      } else {
        toast.error(err.message || "Network error!");
      }
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen py-10 px-4 sm:px-8 md:px-16'>

      <div className='
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-10 
        bg-white 
        p-5 
        md:p-10 
        rounded-2xl
        m-15
      '>

        
        <div className='flex justify-center items-center'>
          <img
            src={product.image}
            alt={product.title}
            className='w-full max-w-md h-72 sm:h-80 object-contain'
          />
        </div>

      
        <div className='flex flex-col gap-4'>

          <p className='text-gray-500 text-sm'>
            {product.category}
          </p>

          <h1 className='font-bold text-2xl sm:text-3xl'>
            {product.title}
          </h1>

          <h1 className='font-bold text-2xl text-green-700'>
            ${product.price}
          </h1>

          <p className='text-gray-600 text-sm sm:text-base'>
            {product.description}
          </p>

          <p className='text-green-700 font-bold'>
            In Stock
          </p>

          
          <div>
            <p className='mb-2 font-medium'>Select Size</p>

            {(product.category === "women's clothing" || product.category === "men's clothing") ? (
              <div className='flex gap-3 flex-wrap'>
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className='border px-4 py-1 rounded hover:bg-black hover:text-white transition'
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <button className='border px-4 py-2 rounded'>
                One Size
              </button>
            )}
          </div>

         
          <button
            className='bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition mt-3'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <hr className='my-4' />

         
          <h1 className='text-lg font-bold'>
            Product Details
          </h1>

          <ul className='flex flex-col gap-2 text-gray-500 text-sm'>
            <li>Premium quality materials</li>
            <li>Expert craftsmanship</li>
            <li>Free shipping on orders over $100</li>
            <li>30-day return policy</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default ShopProduct;