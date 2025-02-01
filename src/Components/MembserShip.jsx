import React from 'react'

const MembserShip = () => {
  return (
    <section className='wrapper py-5 font-display-primary'>
        
        <h1 className='text-[1.5rem] leading-[28.13px] font-semibold text-center text-white pb-4'>Select Membership Plan to Continue!</h1>
        <div className='w-full max-w-[175px] bg-primary rounded-lg p-[2px] mx-auto flex items-center gap-4 text-center'>
            <button className='bg-black py-1 px-4 text-center text-secondary rounded-md text-base leading-[18.75px] font-semibold'>Monthly</button>
            <p className='text-base leading-[18.75px] text-black-100'>Yearly</p>
        </div>

        <div className='my-4 flex flex-col md:flex-row items-center gap-[40px]'>
             <div className='bg-primary w-full max-w-[583px] p-8 rounded-[14.8px] space-y-5'>
                 <img src="/images/award.svg" alt="award-icon" className='w-[30.7px] h-[40px]'/>
                 <h4 className='text-[2rem] leading-[31.68px] font-semibold'>Basic Plan</h4>
                 <p className='text-secondary text-[2rem] leading-[31.68px] font-semibold'>$9.99<span className='text-black-100 text-2xl leading-[23.76px] font-semibold'>/month</span></p>

                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Limited access to contents</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Access to chat with me</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Access to your personal profile</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Basic messaging features</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Advanced search filters</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Advanced search filters</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Profile Boost: One-on-one personal advice once per month</p>


                 </div>
                 <button className='w-full rounded-[9.87px] border border-black-100 text-black-100 text-xl leading-[19.8px] font-semibold py-2 font-display-seconadry'>Continue with plan</button>
                 
                 
                 
             </div>
             <div className='bg-primary w-full max-w-[583px] p-8 rounded-[14.8px] space-y-5'>
                 <h4 className='bg-white w-[132px] rounded-[9.87px] py-2 px-4 text-center text-base leading-[15.84px]'>Recommended</h4>
                 <img src="/images/award-2.svg" alt="award-icon" className='w-[74.66px] h-[40px]'/>
                 <h4 className='text-[2rem] leading-[31.68px] font-semibold'>Premium Plan</h4>
                 <p className='text-secondary text-[2rem] leading-[31.68px] font-semibold'>$24.99<span className='text-black-100 text-2xl leading-[23.76px] font-semibold'>/month</span></p>

                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>All Basic Plan features</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Full access to contents</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Go on a vacation with me</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Priority support</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Access to exclusive events and webinars</p>
                 </div>
                 
                 <div className='flex items-center gap-[9.87px]'>
                 <h4 className='bg-black w-[24px] h-[24px] rounded-full text-primary text-center flex justify-center items-center'>
                    <img src="/images/check.svg" alt="" className='w-[15px] h-15px]' /></h4>
                 <p className=' text-xl leading-[19.8px] text-primary-100'>Profile Boost: One-on-one personal advice twice per month</p>
                 </div>
                 <button className='bg-secondary w-full rounded-[9.87px] py-2 text-black-100 text-xl leading-[19.8px] font-semibold font-display-seconadry'>Continue with plan</button> 
                 
             </div>
        </div>
    
    </section>
  )
}

export default MembserShip