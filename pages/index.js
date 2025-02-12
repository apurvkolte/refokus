import React from 'react'
import Navbar from '../Components/Navbar'
import Landing from '../Components/Landing'
import Work from '../Components/Work'
import PlayReal from '../Components/PlayReal'
import Images from '../Components/Images'
import Spread from '../Components/Spread'
import Footer from '../Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const index = () => {
    if (typeof window !== "undefined") {
        const locomotiveScroll = new LocomotiveScroll();
    }
    return (
        <div className='w-full'>
            <Navbar />
            <Landing />
            <Work />
            <PlayReal />
            <Images />
            <Spread />
            <Footer />
        </div>
    )
}

export default index