import React from 'react'

const Footer = () => {
    return (
        <div className='w-full mt-10'>
            <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
                <div className='basis-1/2'>
                    <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>Weblink</h1>
                </div>
                <div className='basis-1/2 flex gap-4'>
                    <div className='basis-1/3'>
                        <h4 className='text-2xl mb-10 text-zinc-500'>Social</h4>
                        {["instagram", "twitter (x2)", "LinkeIn"].map((item, index) => (
                            <a className='block mt-3 capitalize text-zinc-600' href='#'>{item}</a>
                        ))}
                    </div>

                    <div className='basis-1/3'>
                        <h4 className='text-2xl mb-10 text-zinc-500'>Social</h4>
                        {["instagram", "twitter (x2)", "LinkeIn"].map((item, index) => (
                            <a key={index} className='block mt-3 capitalize text-zinc-600' href='#'>{item}</a>
                        ))}
                    </div>

                    <div className='basis-1/2 '>
                        <p className='text-zinc-400'>Superior website design and development are combined with innovation! Being a leading supplier of digital solutions</p>
                        <img className='w-40 mt-10 ' src="https://www.weblinkservice.in/assets/images/wlspl_logo.png" alt="" />
                    </div>

                </div>
            </div>
            <div className='mt-5 py-4 text-center bg-gray-800 '>
                <p className='text-sm font-semibold text-zinc-300'>Design & Developed by <span className='text-zinc-50'>Apurv Kolte</span> &copy; 2025</p>
            </div>
        </div>
    )
}

export default Footer