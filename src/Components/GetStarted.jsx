import React from 'react'

const GetStarted = () => {
  return (
    <section className='py-6 font-display-primary'>
        <h4 className='text-base md:text-[1.5rem] leading-[18.75px] md:leading-[28.13px] font-semibold text-center text-white pb-4'>How to Get Started</h4>
        <div className='wrapper bg-primary rounded-lg flex flex-col md:flex-row items-center p-6'>
            <div className='flex flex-col space-y-2 md:space-y-4'>
            <div className='w-full max-w-[389.67px]  py-6 '>
                <div className='flex items-center space-x-3 space-y-2'>
                    <h4 className='bg-black w-[28px] h-[28px] rounded-full text-secondary text-center'>1</h4>
                    <h1 className='text-base text-[1.5rem] leading-[18.75px] md:leading-[28.13px] md:font-semibold text-black-100'>Select a plan</h1>
                </div>
                <p className=' text-xl leading-[32px] text-primary-100'>Get started by selecting a membership plan that best suit you</p>
            </div>
            <div className='w-full max-w-[389.67px]  space-y-4 py-6  '>
                <div className='flex items-center space-x-3'>
                    <h4 className='bg-black w-[28px] h-[28px] rounded-full text-secondary text-center'>2</h4>
                    <h1 className='text-[1.5rem] leading-[28.13px] font-semibold text-black-100'>Register</h1>
                </div>
                <p className=' text-xl leading-[32px] text-primary-100'>Provide your details, get verified and make payment for the selected plan</p>
            </div>
            <div className='w-full max-w-[389.67px]  space-y-4 py-6 '>
                <div className='flex items-center space-x-3'>
                    <h4 className='bg-black w-[28px] h-[28px] rounded-full text-secondary text-center'>3</h4>
                    <h1 className='text-[1.5rem] leading-[28.13px] text-black-100 font-semibold'>Access to membership</h1>
                </div>
                <p className=' text-xl leading-[32px] text-primary-100'>Get access to exclusive content and connect directly with me.</p>
            </div>
            </div>

            <div className='flex-1'>
                <img src="/images/Getstarted-Img.svg" alt="Getstarted-Img" className='object-cover w-full h-auto'/>
            </div>
            
        </div>
    </section>
  )
}

export default GetStarted