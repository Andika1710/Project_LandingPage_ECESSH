import React from 'react'
import hero1 from '../../assets/bgEcessh.png'
import heroMobile from '../../assets/logoC.png'
import NavigationBar from '../../elements/NavigationBar'

const Hero = () => {
  return (
    <>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className='container mx-auto lg:px-[96px] px-[80px]'>
                <NavigationBar/>
                <figure className='py-[124px] flex-row lg:flex block justify-center items-center'>
                <div className='flex justify-center items-center lg:flex-none'>
                    <img className='lg:border-r-[3px] px-[30px] lg:mr-[30px] lg:border-globalBlue  ' src={heroMobile} alt="" />
                  </div>
                   
                    
                    <figcaption className='text-center lg:text-left md:text-center lg:mr-[30px] flex flex-col justify-center'>
                      <p className='lg:text-[36px] lg:leading-[43.2px] text-globalBlue font-bold'>Eastasouth Conference On</p>
                      <div className='lg:flex block gap-2'>
                      <p className='text-[25px] lg:text-[56px]  leading-[25px] lg:leading-[63.2px] text-globalBlue font-bold font-jakarta'>ECONOMICS</p>
                      <p className='lg:text-[36px] lg:leading-[43.2px] font-bold font-jakarta opacity-100 bg-globalBlue rounded-[10px] hidden px-[16px] lg:flex justify-center items-center text-white '>2024</p>
                      </div>
                    
                      <p className='text-[25px] lg:text-[56px] leading-[25px] lg:leading-[63.2px] text-globalBlue font-bold font-jakarta'>SOCIAL SCIENCES</p>
                      <div className='flex justify-center'>
                      <p className='w-[250px] lg:w-[600px] text-[25px] lg:text-[56px] leading-[25px] lg:leading-[63.2px] text-globalBlue font-bold font-jakarta'>AND HUMANITIES</p>
                      </div>
                      <div className='flex justify-center text-center'>
                      <p className='  w-[65px] font-bold font-jakarta opacity-100 bg-globalBlue rounded-[10px] lg:hidden flex justify-center items-center text-white'>2025</p>
                      </div>
                      
                        
                        
                     
                      <p className='mt-[10px] text-[10px] lg:text-[18px] lg:w-[550px] lg:leading-[24.2px] text-globalBlue font-bold font-jakarta'>Global Challenges. Local Solutions For Shaping The Future Through Economics, Humanities, And Social Sciences</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </>
  )
}

export default Hero