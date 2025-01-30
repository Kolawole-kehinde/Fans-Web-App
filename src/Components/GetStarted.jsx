import React from 'react'

const GetStarted = () => {
  return (
    <section className='py-6'>
        <h4 className='text-[1.5rem] leading-[28.13px] font-semibold text-center text-white pb-4'>How to Get Started</h4>
        <div className='wrapper bg-primary rounded-lg flex items-center'>
            <div className='flex flex-col space-y-4'>
            <div className='w-full max-w-[389.67px]  py-6  ml-10'>
                <div className='flex items-center space-x-3'>
                    <h4 className='bg-black w-[28px] h-[28px] rounded-full text-secondary text-center'>1</h4>
                    <h1 className='text-[1.5rem] leading-[28.13px]'>Select a plan</h1>
                </div>
                <p className=' text-xl leading-[32px]'>Get started by selecting a membership plan that best suit you</p>
            </div>
            <div className='w-full max-w-[389.67px]  space-y-4 py-6  ml-10'>
                <div className='flex items-center space-x-3'>
                    <h4 className='bg-black w-[28px] h-[28px] rounded-full text-secondary text-center'>1</h4>
                    <h1 className='text-[1.5rem] leading-[28.13px] font-semibold'>Select a plan</h1>
                </div>
                <p className=' text-xl leading-[32px]'>Get started by selecting a membership plan that best suit you</p>
            </div>
            <div className='w-full max-w-[389.67px]  space-y-4 py-6  ml-10'>
                <div className='flex items-center space-x-3'>
                    <h4 className='bg-black w-[28px] h-[28px] rounded-full text-secondary text-center'>1</h4>
                    <h1 className='text-[1.5rem] leading-[28.13px]'>Select a plan</h1>
                </div>
                <p className=' text-xl leading-[32px]'>Get started by selecting a membership plan that best suit you</p>
            </div>
            </div>

            <div className='flex-1'>
                <img src="/images/Getstarted-Img.svg" alt="Getstarted-Img"/>
            </div>
            
        </div>
    </section>
  )
}

export default GetStarted