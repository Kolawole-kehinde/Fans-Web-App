import React from 'react'

const Footer = () => {
  return (
    <footer className='wrapper flex flex-col md:flex-row items-center justify-between text-primary-500 py-5 font-display-primary'>
        <p className='text-base leading-[30px]'>© 2024 Joe Brown. Copyright and rights reserved</p>

        <div className='flex items-center justify-between md:justify-center gap-4 text-base leading-[30px] '>
            <p>Terms and Conditions</p>
            <li>Privacy Policy</li>
        </div>

    </footer>
  )
}

export default Footer