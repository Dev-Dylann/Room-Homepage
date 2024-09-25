import { useState, useEffect } from "react"

import arrowIcon from "../assets/icons/icon-arrow.svg"
import leftAngle from "../assets/icons/icon-angle-left.svg"
import rightAngle from "../assets/icons/icon-angle-right.svg"

import data from "../data/data.json"

const Hero = () => {

    const [slide, setSlide] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(data.data[slide])
    const [fade, setFade] = useState(true)

    useEffect(() => {
        setFade(true)

        setTimeout(() => {
            setCurrentSlide(data.data[slide])
            setFade(false)
        }, 400)
    }, [slide])

    return (
        <section className="flex flex-col bg-darkerGray lg:grid lg:grid-cols-2 xl:min-h-[65vh] xl:grid-cols-[6fr,_4fr]">
            <img src={currentSlide.image.mobile} alt="Hero Image" className="transition-all duration-500 lg:hidden" style={fade ? { opacity: 0 } : { opacity: 1 }} />
            <img src={currentSlide.image.desktop} alt="Hero Image" className="transition-all duration-500 hidden lg:block w-full h-full xl:h-full" style={fade ? { opacity: 0 } : { opacity: 1 }} />

            <article className="relative flex flex-col gap-4 px-10 py-16 bg-white lg:px-16 xl:justify-center xl:px-20">

                <div className="absolute w-32 h-16 right-0 -top-16 flex lg:top-[calc(100%_-_64px)] lg:left-0 xl:w-48 xl:h-20 xl:top-[calc(100%_-_80px)]">
                    <button onClick={() => setSlide(prev => prev === 0 ? 2 : prev - 1)} className="bg-black grid place-content-center h-16 w-16 xl:w-24 xl:h-20 hover:bg-darkerGray transition-all">
                        <img src={leftAngle} alt="Previous Slide" />
                    </button>
                    <button onClick={() => setSlide(prev => prev === 2 ? 0 : prev + 1)} className="bg-black grid place-content-center h-16 w-16 xl:w-24 xl:h-20 hover:bg-darkerGray transition-all">
                        <img src={rightAngle} alt="Next Slide" />
                    </button>
                </div>

                <h1 className="font-bold text-4xl transition-all duration-500 md:text-5xl lg:text-4xl xl:text-5xl" style={fade ? { opacity: 0 } : { opacity: 1 }}>{currentSlide.title}</h1>

                <p className="text-darkGray font-semibold transition-all duration-500 md:text-lg lg:text-base xl:text-lg" style={fade ? { opacity: 0 } : { opacity: 1 }}>{currentSlide.description}</p>

                <button className="flex gap-5 tracking-[10px] font-semibold items-center my-5 py-2 md:text-lg lg:text-base lg:mt-0 hover:text-darkGray transition-all">
                    SHOP NOW
                    <img src={arrowIcon} alt="Shop Now" className="-mt-1.5 group-hover:fill-darkGray" />
                </button>
            </article>
        </section>
    )
}

export default Hero