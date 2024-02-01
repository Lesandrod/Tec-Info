import { Link } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { IoCloseSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Logo from "../assets/logo1.png"
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const href = useLocation().pathname.slice(0)
    const Linkpath = [

        {
            path: '/',
            name: "Home"
        },
        {
            path: '/buscador',
            name: "Buscador"

        }
    ]


    return (
        <>
            <nav className="bg-blue-700 p-4">
                <div className="container mx-auto flex justify-between items-center">

                    <div className="flex items-center ">
                        <Link to="/" className="text-white text-xl font-semibold flex items-center">
                            <img src={Logo} alt="Logo" className="w-8 h-8 ml-2" /> TecInfo
                        </Link>
                    </div>

                    <button
                        onClick={handleToggleMenu}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {isMenuOpen ? <IoCloseSharp /> : <LuMenu />}
                    </button>

                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } md:flex md:items-center mt-4 md:mt-0`}
                    >
                        <ul className="md:flex space-x-4">
                            {Linkpath.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:underline"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar