import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { motion } from "framer-motion"

export const Work = () => {

    return (
        <div className='w-full relative mx-auto'>
            <div className='max-w-screen-2xl py-20 px-5 sm:px-10 sm:ml-[14rem]'>
                <h1 className='text-[5rem] sm:text-[17rem]  tracking-tight leading-none sm:my-20 overflow-hidden'>
                    <motion.span
                        initial={{ rotate: 90, y: "40%", opacity: 0 }}
                        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                        transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8 }}
                        viewport={{ once: false }}
                        className='inline-block origin-left'>
                        Work
                    </motion.span>
                </h1>
                <div className='block sm:hidden'>
                    <div className='featured flex gap-3 mt-5'>
                        <i className="ri-gemini-fill w-4"></i>
                        <h3 className='capitalize sm:font-[400]'>featured projects</h3>
                    </div>
                    <p className='sm:leading-2 text-md sm:text-2xl sm:tracking-tight sm:text-left mt-5 font-[400]'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                </div>


                <div className='block sm:flex sm:flex-wrap sm:gap-[9rem] mt-10 '>
                    <div className='elems '>
                        <div className='ele w-full sm:w-[100%]'>
                            <div className='video w-full relative overflow-hidden h-[104vw] sm:h-[50vw] group'>
                                <img className='hidden sm:block w-full h-full object-cover' src="https://images.unsplash.com/photo-1735078254602-b7818942c324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
                                <video autoPlay muted loop className='block sm:hidden group-hover:block  w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"></video>
                            </div>
                            <div className='mt-4'>
                                <h3 className='font-semibold'>Ottografie</h3>
                                <h3 className='capitalize opacity-40'>Seamless Photographic Journey</h3>
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-1/3'>
                        <div className='hidden sm:block'>
                            <div className='featured flex gap-3'>
                                <i className="ri-gemini-fill w-4"></i>
                                <h3 className='capitalize sm:font-[400]'>featured projects</h3>
                            </div>
                            <p className='sm:leading-2 text-md sm:text-2xl sm:tracking-tight sm:text-left mt-10 font-[400]'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                        </div>
                        <div className='elems sm:flex sm:flex-wrap sm:gap-3 sm:mt-[15rem] group'>
                            <div className='ele w-full sm:w-[100%] mt-10 '>
                                <div className='video w-full relative overflow-hidden h-[104vw] sm:h-[35vw]'>
                                    <img className='hidden sm:block w-full h-full object-cover' src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)" alt="" />
                                    <video autoPlay muted loop className='block sm:hidden group-hover:block w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04" ></video>
                                </div>
                                <div className='mt-4'>
                                    <h3 className='font-semibold'>Columbia Pictures</h3>
                                    <h3 className='capitalize opacity-40'>Celebrating a Century of Cinema</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block sm:flex sm:flex-wrap sm:gap-[10rem] sm:py-[7rem]'>
                    <div className='elems sm:flex sm:flex-wrap sm:gap-3 sm:mt-[25rem]'>
                        <div className='ele w-full sm:w-[100%] mt-10 overflow-hidden'>
                            <div className='video w-full relative overflow-hidden h-[104vw] sm:h-[22vw] group'>
                                <img className='hidden sm:block w-full h-full object-cover' src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)" alt="" />
                                <video autoPlay muted loop className='block sm:hidden group-hover:block w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a" ></video>
                            </div>
                            <div className='mt-4'>
                                <h3 className='font-semibold'>Amaterasu</h3>
                                <h3 className='capitalize opacity-40'>Frontier Health Innovation</h3>
                            </div>
                        </div>
                    </div>

                    <div className='elems'>
                        <div className='ele w-full sm:w-[100%] mt-10 '>
                            <div className='video w-full relative overflow-hidden h-[104vw] sm:h-[38vw] group'>
                                <img className='hidden sm:block w-full h-full object-cover' src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)" alt="" />
                                <video autoPlay muted loop className='block sm:hidden group-hover:block w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"></video>
                            </div>
                            <div className='mt-4'>
                                <h3 className='font-semibold'>Cambium</h3>
                                <h3 className='capitalize opacity-40'>Pioneering Sustainable Solutions</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
