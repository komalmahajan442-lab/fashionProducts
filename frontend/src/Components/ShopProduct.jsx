import React, { useContext } from 'react';
import { MyContext } from '../Context';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ShopProduct() {
  const { products } = useContext(MyContext);
  const { id } = useParams();

 
if(!id){
    console.log('Invalid id');
}
 if (products.length === 0) {
  return <h1>Loading products...</h1>;
}

const product = products.find(
  (item) => item._id?.toString() === id
);
 
  if (!product) {
    return <h1>Loading...</h1>;
  }

  console.log(product);
  const handleAddToCart = async () => {
    try {
      const res = await axios.post(
        'https://fashionproducts.onrender.com/add-to-cart',
        { productId: product._id }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
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

      console.log(err);
    }
  };

  return (
    <div className='grid grid-cols-2 p-15'>

      <div className='bg-white rounded-2xl m-15 h-fit p-5'>
        <img src={product.image} />
      </div>

      <div className='py-15 px-10 m-5 flex gap-5 flex-col'>
        <p className='text-gray-500'>{product.category}</p>
        <h1 className='font-bold text-4xl'>{product.title}</h1>
        <h1 className='font-bold text-4xl'>${product.price}</h1>
        <p className='text-gray-500'>{product.description}</p>

        <p className='text-green-700 font-bold'>In Stock</p>

        <p>Select Size</p>

        {(product.category === "women's clothing" || product.category === "men's clothing") ? (
          <div className='flex gap-5'>
            <div className='bg-white rounded-lg px-4 py-2'>S</div>
            <div className='bg-white rounded-lg px-4 py-2'>M</div>
            <div className='bg-white rounded-lg px-4 py-2'>L</div>
            <div className='bg-white rounded-lg px-4 py-2'>XL</div>
          </div>
        ) : (
          <button className='bg-white border border-gray-600 rounded-xl px-4 py-2'>
            One Size
          </button>
        )}

        <button
          className='bg-black text-white py-2 rounded-xl'
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <hr />

        <h1 className='text-lg font-bold'>Product Details</h1>

        <ul className='flex gap-3 text-gray-500 flex-col'>
          <li>Premium quality materials</li>
          <li>Expert craftsmanship</li>
          <li>Free shipping on orders over $100</li>
          <li>30-day return policy</li>
        </ul>
      </div>

    </div>
  );
}

export default ShopProduct;