
const Footer = ({social}) => {
    const whatsapp = {
        icon : 'https://img.icons8.com/color/60/000000/whatsapp--v1.png',
        link : 'https://wa.me/+6281617162141'
    }
  return (
    <div className='bg-[#E0E0E0] w-full h-auto pb-5 pt-12'>
        <div className="footer grid lg:grid-cols-2 grid-cols-1 gap-4 lg:px-20 px-8">
            <div className="fotos grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 lg:mr-72 mr-26/2 gap-4">
                <img src={require('../assets/image/footer1.jpg')} alt="" className='w-auto' />
                <img src={require('../assets/image/footer2.jpg')} alt="" className='w-auto' />
                <img src={require('../assets/image/footer3.jpg')} alt="" className='w-auto' />
                <img src={require('../assets/image/footer4.jpg')} alt="" className='w-auto' />
                <img src={require('../assets/image/footer5.jpg')} alt="" className='w-auto' />
                <img src={require('../assets/image/footer6.jpg')} alt="" className='w-auto' />
            </div>
            <div className='contact grid lg:grid-cols-2 gap-x-5 gap-y-10 mt-10 md:mt-0'>
                <div className="kontak space-y-2">
                    <h4 className="pb-3 text-[1.2rem] font-semibold">Kontak Kami</h4>
                    <p>Jl. Sulaiman Pasar Bunga Rawa Belong RT.10/RW.3 Sukabumi Utara Kebun Jeruk Jakarta Barat.</p>
                    <p>0816-1716-2141</p>
                </div>
                <div className="quick-link">
                    <h4 className="pb-3 text-[1.2rem] font-semibold">Media Sosial</h4>
                    <div className='flex space-x-3'>
                        {
                            social.map((val,idx) => (
                                    <a href={val.link} key={idx}>
                                        <img src={val.icon} alt="" />
                                    </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="wa-kontak ml-[19.5rem] lg:left-[60rem] relative">
            <a href={whatsapp.link} className="fixed bottom-10">
                <img src={whatsapp.icon} alt="" className='w-auto'/>
            </a>
        </div>
        <footer className='pt-10 text-center'>
            ??2022, Melati Ronce Idonesia
        </footer>
    </div>
  )
}

export default Footer