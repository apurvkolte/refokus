import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({ width, start, para, hover = "none" }) => {
    return (
        <motion.div whileHover={{ backgroundColor: hover === "true" && "#7443ff", padding: "25px" }} className={`${width} bg-zinc-800 p-5  rounded-xl min-h-[30rem] flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>

                    {para ? (<h3 className='uppercase' >Blog</h3>) : (<h3 className='uppercase'>Get In Touch</h3>)}
                    <MdArrowRightAlt />
                </div>

                {para ? (<h1 className='text-3xl font-medium mt-5'>Web Developement</h1>) : (
                    <>
                        <h1 className='text-3xl font-medium mt-5'>Let’s get to it.</h1>
                        <h1 className='text-3xl font-medium mt-5'>together.</h1>
                    </>
                )}
            </div>
            <div className='down w-full mt-60'>
                {start && (<><h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                    <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>Contact Us</button></>
                )}

                {para && (<p className='text-sm text-zinc-300 font-medium'>Web Design, Webflow Development, and Creative Development. </p>)}
            </div>
        </motion.div>
    )
}

export default Card