import { useState } from "react"

import MobileNav from "./MobileNav"
import hamburgerIcon from "../assets/icons/icon-hamburger.svg"
import logo from "../assets/icons/logo.svg"

const Header = () => {
    const [isNav, setIsNav] = useState(false)

    const navLinks = ['home', 'shop', 'about', 'contact']

    return (
        <header className="relative font-spartan z-10">
            <section className="absolute top-0 left-0 w-full flex justify-between items-center p-5 pt-8 md:p-10 lg:justify-start lg:p-16 lg:gap-12">
                <button onClick={() => setIsNav(true)} className="p-2 lg:hidden">
                    <img src={hamburgerIcon} alt="Menu Icon" />
                </button>

                <img src={logo} alt="Room Logo" />

                <div className="opacity-0 invisible p-2 lg:hidden"><img src={hamburgerIcon} alt="Menu Icon" /></div>

                <nav className="hidden lg:block">
                    <ul className="flex gap-10 xl:text-lg">
                        {navLinks.map(link => (
                            <li className="text-white font-bold cursor-pointer relative hover:before:scale-x-100 before:absolute before:-bottom-1 before:bg-white before:pt-1 before:w-full before:rounded before:scale-x-0 before:transition-all">{link}</li>
                        ))}
                    </ul>
                </nav>
            </section>

            {isNav && <MobileNav setIsNav={setIsNav} />}
        </header>
    )
}

export default Header