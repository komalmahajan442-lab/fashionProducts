import React from 'react'

function Section1() {
    return (
        <div >
            <div className='bg-gray-200 px-10 py-5'>
<h1 className='font-bold text-2xl text-center p-5'>Shop By Category</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 md:px-15'>
  <div className='bg-white p-6 text-center rounded-lg hover:shadow-xl'>OuterWear</div>
  <div className='bg-white p-6 text-center rounded-lg hover:shadow-xl'>Dresses</div>
  <div className='bg-white p-6 text-center rounded-lg hover:shadow-xl'>Shoes</div>
  <div className='bg-white p-6 text-center rounded-lg hover:shadow-xl'>Accessories</div>
</div>
            </div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-8 m-5 p-5'>
  
  <div className='text-center'>
    <i className="fa-solid fa-check bg-gray-300 px-5 py-3 rounded-full"></i>
    <h1 className='font-bold'>Premium Quality</h1>
    <p>Carefully curated items</p>
  </div>

  <div className='text-center'>
    <i className="fa-solid fa-box-open bg-gray-300 px-5 py-3 rounded-full"></i>
    <h1 className='font-bold'>Free Shipping</h1>
    <p>On orders over $100</p>
  </div>

  <div className='text-center'>
    <i className="fa-solid fa-rotate-right bg-gray-300 px-5 py-3 rounded-full"></i>
    <h1 className='font-bold'>Easy Returns</h1>
    <p>30-day return policy</p>
  </div>

</div>
        </div>
    )
}

export default Section1
