import React from 'react'

const Landing = () => {
    return (
        <div className="w-full relative overflow-hidden ">
            <div className="w-full h-[47rem] sm:h-[52rem] " >
                <img className="w-full h-[47rem] sm:h-[52rem] overflow-hidden " src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D" />

                <div className="w-[80%] sm:mt-[20rem] mx-auto flex absolute justify-center items-center sm:top-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent inset-0  text-white ">
                    <div className="heading flex-col justify-center px-4 sm:py-4 mt-0 sm:mt-32">
                        <div className='sm:h-20 sm:w-1/3 mx-auto '>
                            <img className='w-full sm:w-[50%] sm:h-[100%] object-cover rounded-md' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className='mt-[2rem]'>
                            <h1 className='text-6xl sm:text-8xl font-semibold '>Lorem, ipsum.</h1>
                            <h1 className='text-4xl sm:text-6xl mt-8 font-semibold'>Lorem, ipsum.</h1>
                            <h3 className='text-xs sm:text-2xl  mt-8 sm:w-2/3 font-medium '><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, vitae perspiciatis beatae sequi commodi nobis.</p></h3>
                        </div>
                    </div>
                    <div className="hidden sm:block image">
                        <img className='w-[100%] sm:h-[100%] object-cover rounded-lg sh' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
                    </div>

                </div>

                <div class="grid grid-cols-4 w-full sm:w-1/2  sm:mx-10 bottom-0 sm:bottom-5  absolute border-2 border-dashed border-white text-white ">
                    <div class="p-6 font-semibold border-r-2 border-dashed text-center">Column 1</div>
                    <div class="p-6 font-semibold border-r-2 border-dashed text-center">Column 2</div>
                    <div class="p-6 font-semibold border-r-2 border-dashed text-center">Column 3</div>
                    <div class="p-6 font-semibold text-center">Column 4</div>
                </div>

            </div>

        </div >
    )
}

export default Landing