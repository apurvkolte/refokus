import React, { useRef, useEffect } from 'react'

export const Images = () => {
    const parent = useRef(null);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);

    useEffect(() => {
        const loadGsap = async () => {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            var t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: parent.current,
                    start: "0 90%",
                    scrub: 1
                }
            });

            t1.to(first.current, {
                x: "40%",
                ease: "power4.inout"
            }, "a").to(third.current, {
                x: "-40%",
                ease: "power4.inout"
            }, "a").to(second.current, {
                x: "-40%",
                ease: "power4.inout"
            }, "a").to(fourth.current, {
                x: "40%",
                ease: "power4.inout"
            }, "a")



        };

        loadGsap();
    }, []);


    return (
        <div ref={parent} className='w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden '>
            <div className='w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative'>
                <div ref={first} className='w-20 sm:w-40 h-[7rem] sm:h-[15rem] absolute -right-1/3 top-6'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
                </div>
                <div ref={second} className='w-[8rem] sm:w-[20rem] aspect-video -left-1/2 sm:-left-2/3 top-1/3 absolute'>
                    <video className='w-full h-full aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' autoPlay muted loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
                </div>
                <div ref={third} className='w-[6rem] sm:w-[17rem] aspect-video -left-[20%] sm:-left-[40%] -bottom-7 absolute'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />

                </div>
                <div ref={fourth} className='w-[9rem] sm:w-[17rem] aspect-[1.5/1] absolute -right-[70%] sm:-right-[30%] -bottom-[10%] sm:-bottom-[20%]'>
                    <video className='w-full h-full aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
                </div>

                <img className='w-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
            </div>

        </div>
    )
}
