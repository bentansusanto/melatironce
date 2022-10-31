import React from 'react'

const Galery = () => {
  return (
    <div>
      <ul className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-items-center lg:mx-32 md:mx-20 mx-8'>
        <li className='space-y-4'>
          <img src={require('../assets/image/1.jpg')} alt="" />
          <img src={require('../assets/image/10.jpg')} alt="" />
          <img src={require('../assets/image/3.jpg')} alt="" />
          <img src={require('../assets/image/5.jpg')} alt="" />
        </li>
        <li className='space-y-4'>
          <img src={require('../assets/image/15.jpg')} alt="" />
          <img src={require('../assets/image/6.jpg')} alt="" />
          <img src={require('../assets/image/7.jpg')} alt="" />
          <img src={require('../assets/image/4.jpg')} alt="" />
        </li>
        <li className='space-y-4'>
          <img src={require('../assets/image/9.jpg')} alt="" />
          <img src={require('../assets/image/2.jpg')} alt="" />
          <img src={require('../assets/image/11.jpg')} alt="" />
          <img src={require('../assets/image/12.jpg')} alt="" />
          <img src={require('../assets/image/16.jpg')} alt="" />
        </li>
        <li className='space-y-4'>
          <img src={require('../assets/image/13.jpg')} alt="" />
          <img src={require('../assets/image/14.jpg')} alt="" />
          <img src={require('../assets/image/8.jpg')} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Galery
