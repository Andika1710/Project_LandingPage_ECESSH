import React from 'react'
import heroC from '../../assets/logoC.png'
import NavigationBar from '../../elements/NavigationBar'

const AboutHero = () => {
  return (
    <>
    <div className=' lg:bg-hero-pattern bg-none bg-cover bg-no-repeat bg-center'>
        <div className='container mx-auto px-[47px]'>
            <NavigationBar/>
            <p className='text-[20px] font-extrabold font-jakarta text-globalGreen flex justify-center items-centers text-center py-[36px] lg:py-[56px]  lg:text-[36px] lg:leading-[43.2px] text-blue-500 '>ABOUT</p>
            <figure className='flex justify-center items-center lg:pb-[46px]'>
                <img className=' border-r-2 pr-[5px] mr-[5px] h-[110px] lg:h-[146px] lg:ml-[142px] lg:items-center' src={heroC} alt="" />
                <figcaption className='text-start lg:text-left lg:mr-[30px] '>
                      <p className='text-[13px] lg:text-[20px] lg:leading-[23.2px] text-globalBlue font-bold'>Eastasouth Conference On</p>
                      <div className='flex gap-2'>
                      <p className='text-[15px] lg:text-[36px] lg:leading-[33.2px] text-globalBlue font-bold font-jakarta'>ECONOMICS</p>
                      <div className='lg:py-[-60px] mt-1 '>
                      <p className='text-[10px] lg:text-[15px] bg-globalBlue   font-bold font-jakarta opacity-100 rounded-[5px] px-[10px]  flex justify-center items-center  text-white'>2024</p>
                      </div>
                      </div>
                      <p className='text-[15px] lg:text-[36px] lg:leading-[33.2px] text-globalBlue font-bold font-jakarta'>SOCIAL SCIENCES</p>
                      <p className='text-[15px] lg:text-[36px] lg:leading-[33.2px] text-globalBlue font-bold font-jakarta'>AND HUMANITIES</p>
                      
                    </figcaption>
            </figure>
        </div>
      </div>
    </>
  )
}

export default AboutHero