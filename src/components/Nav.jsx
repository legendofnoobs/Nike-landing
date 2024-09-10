import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants/index"
// import { hamburger } from "../assets/icons"

const Nav = () => {
    return (
        <header className="padding-x py-5 fixed z-50 w-full bg-white-500 backdrop-blur-md">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => {
                        return (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg text-white xl:text-coral-red">
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat text-coral-red max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Log in</a>
                </div>
                <div className=" lg:hidden bg-coral-red p-2 rounded-md">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                        className="cursor-pointer hover:text-slate-gray hover:scale-110 transition-all"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav