import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { MyContext } from '../Context';

function Auth() {
  const location = useLocation();
  const {login}=useContext(MyContext);
  const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate();

  const handleSignup=async()=>{
    try{
const res=await axios.post('https://fashionproducts.onrender.com/signup',{name,email,password});
login(res.data.token);

toast.success(res.data.message);
navigate('/shop');
    }catch(err){
       if (err.response) {
                  toast.error(err.response.data.message || "Something went wrong!");
                } else {
                  toast.error(err.message || "Network error!");
                }
            
      console.log(err);
    }
  }

  const handleLogin=async()=>{
    try{
const res=await axios.post('https://fashionproducts.onrender.com/login',{email,password});
login(res.data.token);
toast.success(res.data.message);
navigate('/shop');
    }catch(err){
       if (err.response) {
                  toast.error(err.response.data.message || "Something went wrong!");
                } else {
                  toast.error(err.message || "Network error!");
                }
            
      console.log(err);
    }
  }
  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsLogin(false); 
    } else {
      setIsLogin(true); 
    }
  }, [location.pathname]);

  return (
    <div className='flex justify-center p-10'>
      <div className='bg-white p-6 rounded-xl w-80'>

        {isLogin ? (
          <>
            <h1 className='text-xl font-bold'>Welcome Back</h1>
            <p>Sign in to your account</p>

            <input className='w-full border p-2 mt-3' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className='w-full border p-2 mt-3' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button className='bg-black text-white w-full mt-4 py-2' onClick={handleLogin}>
              Sign In
            </button>

            <p className='mt-3'>
              Don't have an account?{" "}
              <span 
                onClick={() => setIsLogin(false)} 
                className='text-blue-500 cursor-pointer'
              >
                Register
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className='text-xl font-bold'>Create Account</h1>
            <p>Join us today</p>

            <input className='w-full border p-2 mt-3' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className='w-full border p-2 mt-3' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className='w-full border p-2 mt-3' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button className='bg-black text-white w-full mt-4 py-2' onClick={handleSignup}>
              Create Account
            </button>

            <p className='mt-3'>
              Already have an account?{" "}
              <span 
                onClick={() => setIsLogin(true)} 
                className='text-blue-500 cursor-pointer'
              >
                Sign In
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default Auth;