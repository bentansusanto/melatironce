import React from 'react'
import Galery from './Galery';


const OurGalery = () => {
const subtitle = 'Portofolio';
const title = 'Our Galery';
return (
    <div className='mb-72'>
      <div className="galery">
        <div className="head text-center mb-20">
          <h4 className='font-fontScript text-[1.8rem] text-[#9B8464]'>{subtitle}</h4>
          <h2 className='font-fontHead text-[3.5rem] text-[#9B8464] -mt-2'>{title}</h2>
        </div>
          <Galery/>
      </div>
    </div>
  )
}

export default OurGalery