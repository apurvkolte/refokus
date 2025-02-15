import React from 'react'
import Landing from '../Components/Landing'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work'
import Stripes from '../Components/Stripes'
import Products from '../Components/Products'
import Marquees from '../Components/Marquees'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
// import LocomotiveScroll from 'locomotive-scroll'



const index = () => {
    // if (typeof window !== 'undefined') {
    //     const locomotiveScroll = new LocomotiveScroll();
    // }

    return (
        <div className='w-full scroll-smooth select-none  bg-zinc-900 text-white'>
            {/* <Landing /> */}
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    )
}

export default index