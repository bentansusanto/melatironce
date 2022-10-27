import React from 'react'
import BgHero from '../assets/image/bg-hero.jpg'

const HeroSection = () => {
    const title = 'Equip your bride and groom with beautiful and attractive accessories.';
    const subtitle = 'Percayakan rangkaian bunga melati ronce kepada kami.';

  return (
    <div className='mb-44'>
        <div className='bg-[#F6F3EE] w-full lg:h-[90vh] md:h-[60vh] h-[100vh] md:flex md:flex-row-reverse block '>
            <img src={BgHero} alt="" className='lg:w-[52%] md:w-[50%] ml-auto'/>
            <div className="content lg:mx-20 md:mx-10 mx-8 lg:mt-40 md:mt-20 mt-10">
                <h1 className='font-fontHead lg:text-[2.5rem] text-[2rem] text-[#9B8464]'>{title}</h1>
                <h4 className='font-fontContent font-normal text-[#a4a4a4] lg:w-[60%] md:w-[80%] pt-3 pb-8'>{subtitle}</h4>
                <button className='bg-[#7E7971] py-2.5 px-6 font-fontContent text-[.9rem] text-white rounded-sm font-medium'>See More</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection