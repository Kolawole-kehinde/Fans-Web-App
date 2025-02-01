const HeroSection = () => {
    return (
      <section className='md:py-6 px-2 m:px-0 font-display-primary'>
           <div className='wrapper flex flex-col md:flex-row items-center rounded-xl md:overflow-hidden'>
              <div className=''>
                  <img src="/images/Hero-Img.svg" alt="HeroImage" className='size-[340px] md:size-[563px] object-center'/>
              </div>
              <div className='bg-primary h-[562px] flex-1 flex flex-col items-center justify-center text-center rounded-[9.87px] py-5'>
                  <h2 className='font-semibold text-[28px] md:text-[2rem] leading-[32.81px] md:leading-[37.5px]'>Welcome to Joe Brown Fan Page</h2>
                  <p className='w-full max-w-[292px] md:max-w-[389.67px] text-base md:text-xl leading-[35.6px] md:leading-[32px] text-center text-primary-100'>Get access to exclusive content and connect directly with me.</p>
                  <button className='bg-secondary py-3 px-10 font-semibold rounded-[9.78px] text-xl leading-[19.8px] mt-5'>Register Now!</button>
                    
              </div>
           </div>
      </section>
    )
  }
  
  export default HeroSection