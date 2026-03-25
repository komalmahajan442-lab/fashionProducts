import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

 
  const getCart = async () => {
    try {
      const res = await axios.get('https://fashionproducts.onrender.com/Cart', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setCart(res.data.items);

    } catch (err) {
      console.log(err);
    }
  };


  const handleRemoveFromCart = async (productId) => {
    try {
      const res = await axios.post(
        'https://fashionproducts.onrender.com/remove',
        { productId }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      toast.success(res.data.message);
      getCart(); 

    } catch (err) {
      toast.error("Error removing item");
    }
  };

  
  const updateQuantity = async (productId, type) => {
    try {
      const res = await axios.put(
        'https://fashionproducts.onrender.com/update-cart',
        { productId, type },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      setCart(res.data.cart.items); 

    } catch (err) {
      toast.error("Error updating quantity");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="p-15 bg-gray-100 min-h-screen ">

      <h1 className="text-3xl font-bold mb-8 p-10">Shopping Cart</h1>

      <div className="grid grid-cols-3 gap-10">

       
        <div className="col-span-2 flex flex-col gap-5">

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => {

              const productId = item.productId?._id || item.productId;

              return (
                <div key={item._id} className="bg-white p-5 rounded-xl flex gap-5 shadow">

                  <img
                    src={item.productId.image}
                    className="w-28 h-28 object-contain"
                  />

                  <div className="flex flex-col justify-between w-full">

                    <div>
                      <h1 className="font-bold text-lg">
                        {item.productId.title}
                      </h1>

                      <p className="text-gray-500 text-sm">Size: XS</p>

                      <p className="text-xl font-semibold mt-2">
                        ${item.productId.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-3">

                     
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => updateQuantity(productId, "dec")}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => updateQuantity(productId, "inc")}
                      >
                        +
                      </button>

                      
                      <button
                        className="ml-5 text-red-500"
                        onClick={() => handleRemoveFromCart(productId)}
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                </div>
              );
            })
          )}

        </div>

       
        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <h1 className="text-xl font-bold mb-5">Order Summary</h1>

          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>
              $
              {cart.reduce(
                (acc, item) =>
                  acc + item.productId.price * item.quantity,
                0
              ).toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p className="text-green-600">Free</p>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>
              $
              {cart.reduce(
                (acc, item) =>
                  acc + item.productId.price * item.quantity,
                0
              ).toFixed(2)}
            </p>
          </div>

          <button className="w-full bg-black text-white py-2 mt-5 rounded-xl">
            Checkout
          </button>

          <button
            className="w-full border mt-3 py-2 rounded-xl"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;