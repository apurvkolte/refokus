import React from 'react'
import { motion } from 'framer-motion';

const Marquee = ({ val }) => {
    return (
        <div>
            <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='w-full flex gap-8 whitespace-nowrap py-5 overflow-hidden'>
                {val.map(url => <img src={url} className='w-[6vw] flex-shrink-0' alt="" />)}
            </motion.div>
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='w-full flex gap-8 whitespace-nowrap py-5 overflow-hidden'>
                {val.map(url => <img src={url} className='w-[6vw] flex-shrink-0' alt="" />)}
            </motion.div>
        </div>
    );
}

export default Marquee;
