import React from 'react'

function Footer() {
    return (
        <>
        <div className='bg-gradient-to-r from-gray-900 to-gray-700 text-gray-400 py-5 px-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-5 gap-8 '>
            <div className='grid gap-2'>
                <h1 className='text-white'>LUXE</h1>
                <p>Your destination for premium fashion and lifestyle products.</p>
            </div>
            <div className='grid gap-2'>
                <h1 className='text-white'>Shop</h1>
                <p>New Arivals</p>
<p>Men</p>
<p>Women</p>
<p>Accessories</p>
            </div>
            <div className='grid gap-2'>
<h1 className='text-white'>Help</h1>
<p>Customer Service</p>
<p>Shipping Info</p>
<p>Returns</p>
<p>Size Guide</p>
            </div>
            <div className='grid gap-2'>
                <h1 className='text-white'>About</h1>
                <p>Our Story</p>
                <p>sustainbility</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>


        </div>
        <p className='text-center text-lg p-10'>© 2026 LUXE. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer
