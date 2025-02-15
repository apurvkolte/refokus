import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {
    const products = [
        { title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.", live: true, case: false },
        { title: "Rainfall 2025", description: "We reimagined Rainfall’s digital presence with a sleek, interactive single-page design, reflecting their evolution into a global leader in venture capital.", live: true, case: false },
        { title: "Analog Way", description: "Analog Way's website transformed with a dynamic, story-driven homepage and streamlined design, redefining their digital presence to attract leads and engage users.", live: true, case: false },
        { title: "BCG Platinion", description: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand", live: true, case: false },
        { title: "Josys", description: "A sleek, scalable Webflow website that reflects Josys' evolution from a fast-growing Japanese startup to a global SaaS management leader, combining dynamic design with seamless functionality for an enhanced user experience.", live: true, case: false },
    ]

    const [position, setPosition] = useState(0);
    const mover = (val) => {
        setPosition(val * 23);
    }


    return (
        <div animate={{ y: position * 23 + "rem" }} className='mt-32 relative'>
            {products.map((item, index) => (
                <Product key={index} mover={mover} val={item} count={index} />
            ))}
            <div className='absolute top-0 w-full h-full pointer-events-none '>
                <motion.div
                    initial={{ y: position, x: "-50%" }}
                    animate={{ y: position + "rem" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.3 }}
                    className='window absolute w-96 h-[23rem]  left-[44%] translate-y-[23rem]  overflow-hidden'
                >
                    <motion.div animate={{ y: -position + "rem" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }} className='w-full h-full bg-sky-100 '>
                        <video autoPlay muted loop className='aspect-video object-cover w-full h-full inset-shadow-sm inset-shadow-indigo-500 shadow-lg' src='https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm' />
                    </motion.div>
                    <motion.div animate={{ y: -position + "rem" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }} className='w-full h-full bg-sky-200 '>
                        <video autoPlay muted loop className='aspect-video object-cover w-full h-full inset-shadow-sm inset-shadow-indigo-500 shadow-lg' src='https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-43.webm' />

                    </motion.div>
                    <motion.div animate={{ y: -position + "rem" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }} className='w-full h-full bg-sky-300 '>
                        <video autoPlay muted loop className='aspect-video object-cover w-full h-full inset-shadow-sm inset-shadow-indigo-500 shadow-lg' src='https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/showcase-43.webm' />
                    </motion.div>
                    <motion.div animate={{ y: -position + "rem" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }} className='w-full h-full bg-sky-500 '>
                        <video autoPlay muted loop className='aspect-video object-cover w-full h-full inset-shadow-sm inset-shadow-indigo-500 shadow-lg' src='https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/josys-43.webm' />
                    </motion.div>

                    <motion.div animate={{ y: -position + "rem" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }} className='w-full h-full bg-sky-500 '>
                        <video autoPlay muted loop className='aspect-video object-cover w-full h-full inset-shadow-sm inset-shadow-indigo-500 shadow-lg' src='https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/analogway-43.webm' />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products