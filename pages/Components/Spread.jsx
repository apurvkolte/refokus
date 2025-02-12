import React from 'react';
import { motion } from "framer-motion"

export const Spread = () => {
    return (
        <div className='w-full h-screen'>
            <div className='max-w-screen-2xl h-60 py-10 mx-auto px-5 sm:px-10'>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <i className="ri-gemini-fill"></i> {/* Ensure remix icon is imported */}
                    <h3 className='text-sm'>In this media</h3>
                </div>
                <div className='text mt-10 text-center'>
                    <h1 className='capitalize text-6xl sm:text-9xl tracking-tighter overflow-hidden'>
                        <motion.span
                            initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8 }}
                            viewport={{ once: false }}
                            className='inline-block origin-left'>Spread</motion.span>
                    </h1>
                    <h1 className='capitalize text-6xl sm:text-9xl tracking-tighter overflow-hidden'>
                        <motion.span
                            initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8 }}
                            viewport={{ once: false }}
                            className='inline-block origin-left'>
                            The News</motion.span></h1>

                    <p className='w-2/3 sm:w-1/3 mx-auto mt-5 sm:mt-10 text-md sm:text-xl leading-6'> {/* Adjusted line height for readability */}
                        Find out more about our work on these leading design and technology platforms.
                    </p>
                    <a className="border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block" href="#">Browse all news</a> {/* Fix pb-1c to pb-1 */}
                </div>
            </div>
        </div>
    );
};
