import { useEffect, useRef } from "react"
import closeIcon from "../assets/icons/icon-close.svg"

const MobileNav = ({ setIsNav }) => {
    const asideRef = useRef()

    const fadeOut = () => {
        if (asideRef.current) {
            asideRef.current.classList.add('animate-fadeOut')

            setTimeout(() => {
                setIsNav(false)
            }, 500)
        }
    }

    useEffect(() => {
        if (asideRef.current) {
            setTimeout(() => {
                asideRef.current.classList.replace('opacity-0', 'opacity-1')
                asideRef.current.classList.remove('animate-fadeIn')
            }, 500)
        }
    }, [])

    return (
        <aside ref={asideRef} className="fixed w-full h-screen bg-darkerGray/70 z-[20] opacity-0 transition-all duration-500 animate-fadeIn lg:hidden">
            <nav className="flex items-center px-5 py-8 bg-white md:p-10">
                <button onClick={fadeOut} className="p-2">
                    <img src={closeIcon} alt="Close Menu" />
                </button>

                <ul className="grow flex justify-end gap-4 md:text-lg md:gap-6">
                    <li className="font-bold px-2">home</li>
                    <li className="font-bold px-2">shop</li>
                    <li className="font-bold px-2">about</li>
                    <li className="font-bold px-2">contact</li>
                </ul>
            </nav>
        </aside>
    )
}

export default MobileNav