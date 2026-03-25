import React from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { MyContext } from '../Context';
function Navbar() {
    const navigate=useNavigate();
    const {isLoggedIn,logout}=useContext(MyContext);
    return (
        <>
        <div className='bg-white px-5 py-4 fixed w-full'>
<nav className='flex justify-between'>
    <div>
 <h1 className='font-bold text-2xl'>LUXE</h1>

    </div>

    <div className='flex gap-3'>
        <Link to='/' className='text-xl text-gray-600'>Home</Link>
        <Link to='/shop' className='text-xl text-gray-600'>Shop</Link>
    </div>
   
   

        <div className='flex gap-4'>
          {isLoggedIn ? (
            <>
              <button onClick={() => navigate('/cart')}>Cart</button>
             
              <button 
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className='bg-red-500 text-white px-3 py-1 rounded'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')}>Sign In</button>
              <button 
                className='bg-black text-white px-3 py-1 rounded'
                onClick={() => navigate('/signup')}
              >
                Register
              </button>
            </>
          )}
        </div>
</nav>
        </div>
        </>
    )
}

export default Navbar
