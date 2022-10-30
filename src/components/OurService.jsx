import React from 'react'

const OurService = () => {
    const subtitle = 'Our Service';
    const title = 'Why Choose Us?'
    const service = [
        {
            icon :'package.svg', 
            title : 'Packaging Bagus',
            content : 'Kami selalu memberikan layanan terbaik seperti packaging yang bagus.'
        },
        {
            icon :'flower.svg', 
            title : 'Bunga Selalu Fresh',
            content : 'Bunga yang kami berikan selalu fresh supaya terlihat indah saat digunakan.'
        },
        {
            icon :'affordable.svg', 
            title : 'Harga Terjangkau.',
            content : 'Kami selau menawarkan harga yang terjangkau oleh customer kami.'
        }
    ]
  return (
    <div className='mb-72'>
        <div className="service">
            <div className="head text-center mb-20 mx-8">
                <h4 className='font-fontScript text-[1.8rem] text-[#9B8464]'>{subtitle}</h4>
                <h2 className='font-fontHead text-[3.5rem] text-[#9B8464] -mt-2'>{title}</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 lg:mx-40 md:mx-32 mx-8 justify-items-center'>
                {
                    service.map((val,idx) =>(
                        <div key={idx} className='mx-16 md:mx-8 lg:mx-16  font-fontContent'>
                            <img src={require('../assets/image/' + val.icon)} alt="" className='w-[3rem]'/>
                            <h4 className='pt-4 pb-2 font-semibold'>{val.title}</h4>
                            <p className='font-normal text-[#a4a4a4] text-[.9rem]'>{val.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurService