const HeroSection = () => {
    return (
      <section className='py-6'>
           <div className='wrapper flex items-center rounded-xl overflow-hidden'>
              <div className=''>
                  <img src="/images/Hero-Img.svg" alt="HeroImage" className='size-[563px]'/>
              </div>
              <div className='bg-primary h-[562px] flex-1 flex flex-col items-center justify-center'>
                  <h2 className='font-semibold text-[2rem] leading-[]37.5px'>Welcome to Joe Brown Fan Page</h2>
                  <p className='text-xl leading-[32px text-center] w-[389.67px] text-center text-primary-100'>Get access to exclusive content and connect directly with me.</p>
                  <button className='bg-secondary py-3 px-10 font-semibold rounded-[9.78px] text-xl leading-[19.8px] mt-5'>Register Now!</button>
                    
              </div>
           </div>
      </section>
    )
  }
  
  export default HeroSection