import React, {useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Images/logo.jpg";
import { Link } from "react-scroll";

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={ Logo } alt="error" className="w-[150px] h-[50px] md:m-10"/>
        </div>
        {/* menu */}
        <div className="hidden md:flex">
            <ul className="flex gap-11 m-10 items-center font-serif font-bold text-xl cursor-pointer">
                <li>
                    <Link to="about" smooth={true} duration={500}>About Me</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="participation" smooth={true} duration={500}>Participations</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">
                <Link to="about" smooth={true} duration={500}>About Me</Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="participation" smooth={true} duration={500}>Participations</Link>
            </li> 
            <li className="py-6 text-4xl">
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}
