import aboutLight from "../assets/images/about-light.jpg"
import aboutDark from "../assets/images/about-dark.jpg"

const About = () => {
    return (
        <section className="flex flex-col lg:grid lg:grid-cols-[3fr,_4fr,_3fr]">
            <img src={aboutDark} alt="About Image (Dark)" className="lg:h-full lg:w-full" />

            <article className="px-10 py-16 flex flex-col gap-5 xl:justify-center">
                <h2 className="font-bold tracking-[5px] md:text-lg lg:text-base xl:text-lg">ABOUT OUR FURNITURE</h2>

                <p className="text-darkGray font-semibold md:text-lg lg:text-base xl:text-lg">
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </article>

            <img src={aboutLight} alt="About Image (Light)" className="lg:h-full lg:w-full" />
        </section>
    )
}

export default About