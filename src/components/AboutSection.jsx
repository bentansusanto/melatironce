import React from 'react'
import BgAbout from '../assets/image/bg-about.jpg'
import CekList from '../assets/image/ceklist.svg'
const AboutSection = () => {
    const title = 'Tentang Kami.';
    const content = 'Mamung melati ronce menerima pesanan aneka rangkaian bunga melati fresh untuk berbagai macam adat pengantin dan dekorasi.';
    const service = [
        'Adat Jawa', 'Adat Batak', 
        'Adat Sunda', 'Adat Palembang', 
        'Dekorasi pelaminan', 'Melati duka cita',
        'Peresmian perusahaan', 'Kalung Penyambutan',
        'Adat Pengantin']

  return (
    <div className='lg:ml-44 md:mx-10 mb-72'>
        <div className="about-section md:flex just">
            <img src={BgAbout} alt="" className='lg:w-[32%] md:w-[35%] w-[70%] md:mx-0 mx-auto'/>
            <div className="content lg:ml-24 md:ml-16 mx-8 mt-10 md:mt-0">
                {/* <h4 className='font-fontScript text-[1.8rem] text-[#9B8464]'>{subtitle}</h4> */}
                <h2 className='text-[3.5rem] font-fontHead text-[#9B8464] -mt-2'>{title}</h2>
                <p className='lg:w-[58%] md:w-[95%] w-[full] pt-2'>{content}</p>
                <div className='grid grid-cols-2 gap-5 mt-10 lg:mr-44'>
                    {
                        service.map((val, idx) => (
                            <div key={idx} className='flex space-x-3 items-center'>
                                <img src={CekList} alt="" /><span>{val}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection