import React from 'react'

function Section1() {
    return (
        <div >
            <div className='bg-gray-200 px-10 py-5'>
<h1 className='font-bold text-2xl text-center p-5'>Shop By Category</h1>

<div className='grid grid-cols-4 gap-8 px-15'>
<div className='rounded-lg bg-white px-10 py-10 text-bold text-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2'>OuterWear</div>
<div className='rounded-lg bg-white px-15 py-10 text-bold text-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2'>Dresses</div>
<div className='rounded-lg bg-white px-15 py-10 text-bold text-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2'>Shoes</div>
<div className='rounded-lg bg-white px-10 py-10 text-bold text-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2'>Accessories</div>
</div>

            </div>

            <div className='grid grid-cols-3 m-5 p-5 px-10 ml-10'>
<div>
    <i className="fa-solid fa-check bg-gray-300 px-7 py-4 rounded-full text-xl"></i>
    <h1 className='font-bold'>Premium Quality</h1>
    <p>Carefully curated items from the best brands</p>
</div>
<div>
    <i class="fa-solid fa-box-open bg-gray-300 px-7 py-4 rounded-full text-xl"></i>
    <h1>Free Shipping</h1>
    <p>On orders over $100</p>
</div>
<div>
    <i class="fa-solid fa-rotate-right bg-gray-300 px-7 py-4 rounded-full text-xl"></i>
    <h1>Easy Returns</h1>
    <p>30-day return policy</p>
</div>

            </div>
        </div>
    )
}

export default Section1
