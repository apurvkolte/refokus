import React, { useEffect, useRef } from 'react'


const PlayReal = () => {
    const parent = useRef(null);
    const videodiv = useRef(null);
    const play = useRef(null);
    const reel = useRef(null);
    useEffect(() => {
        const loadGsap = async () => {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            var t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: parent.current,
                    start: "0 0", // When the top of parent hits the top of the viewport
                    pin: true,
                    scrub: 1,
                    // markers: true // Shows start and end markers
                },
            });

            t1.to(videodiv.current, {
                width: "100%",
                height: "100%",
                ease: "power4.inout"
            }, "a")
                .to(play.current, {
                    x: "-150%",
                    ease: "power4.inout"
                }, "a")
                .to(reel.current, {
                    x: "150%",
                    ease: "power4.inout"
                }, "a")

        };

        loadGsap();
    }, []);

    return (
        <div ref={parent} className='w-full h-screen overflow-hidden relative  bg-black'>
            <div ref={videodiv} className='w-40 sm:w-96 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <video autoPlay muted loop className="w-full h-full absolute scale-[2.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"></video>
            </div>

            <div className='overlay absolute  w-full h-full flex flex-col justify-between text-white py-20 sm:py-5'>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <i className="ri-gemini-fill"></i>
                    <h3 className='text-sm'>Work in motion</h3>
                </div>

                <h1 className='w-full flex justify-center gap-5 items-center'>
                    <div ref={play} className='text-4xl sm:text-[10rem] font-normal text-zinc-300'>Play</div>
                    <div ref={reel} className='text-4xl sm:text-[10rem] font-normal text-zinc-300'>Reel</div>
                </h1>

                <p className='text-xm text-center px-10'>
                    Our work is best experienced in motion. Don’t forget to put on your headphones.
                </p>

            </div>

        </div>
    )
}

export default PlayReal;