import React, { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Work = () => {

    // const { scrollY } = useScroll()

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })

    const [images, setSetImges] = useState([
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp", top: "50%", left: "50%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-500.webp", top: "60%", left: "40%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b164d6371ae1de17e6edbd_651c796fcc43bbae9ae1c137_og-default-p-500.webp", top: "45%", left: "55%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6792867f19f728bf3062fb63_thumbnail-4_3.png", top: "55%", left: "57%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7c20e0ed64c35076ef0b_212thumbnail_B-16_9.png", top: "60%", left: "43%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d880c1fd919b3709feb1_Cula-%2016%209%20(B)-p-1080.webp", top: "65%", left: "55%", isActive: false },
    ]);
    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollYPosition = window.scrollY;

        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        let progress = (scrollYPosition / (documentHeight - windowHeight)) * 100;

        // Clamp the value between 0 and 100
        progress = Math.min(100, Math.max(0, progress));

        // setScrollY(scrollYPosition);
        setScrollProgress(progress);
        showHideImages(Math.floor(progress))

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    function showHideImages(scrollProgress) {
        function imageShow(arr) {
            setSetImges(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1 ? ({ ...item, isActive: false }) : { ...item, isActive: true }
                ))
            ))

        }

        switch (scrollProgress) {
            case 0:
                imageShow([])
                break;

            case 1:
                imageShow([0])
                break;

            case 2:
                imageShow([0, 1])
                break;

            case 3:
                imageShow([0, 1, 2])
                break;

            case 4:
                imageShow([0, 1, 2, 3])
                break;
            case 5:
                imageShow([0, 1, 2, 3, 4])
                break;
            case 6:
                imageShow([0, 1, 2, 3, 4, 5])
                break;
        }

    }






    return (
        <div className='w-full mt-10'>
            <div className='relative max-w-screen-xl mx-auto text-center'>
                <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>Work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {images.map((ele, index) => (ele.isActive &&
                        <img key={index} className='absolute w-60 h-[200px] mt-8 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={ele.url} style={{ top: ele.top, left: ele.left }} alt="" />
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Work