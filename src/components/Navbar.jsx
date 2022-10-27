import React from 'react'

const Navbar = () => {
return (
<div className='bg-white shadow-md py-5 lg:px-20 md:px-10 px-8 sticky top-0'>
    <nav>
        <div className="logo">
            <a href="/">
                <h2 className='text-[1.5rem] font-semibold text-[#9B8464]'>
                    Melati<span className='font-thin'>Ronce</span>
                </h2>
            </a>
        </div>
    </nav>
</div>
)
}

export default Navbar