import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [moblieMenu, setMoblieMenu] = useState(false);
  const handleClick = () => setMoblieMenu(!moblieMenu);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#112D4E] text-[#F9F7F7]'>
      <div>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/* Menu */}
      <div>
        {/* width more than medium size will be displayed flex, otherwise hidden  */}
        <ul className="hidden md:flex">
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>
            {/* scroll to name='home' div smoothly */}
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {moblieMenu ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile menu */}
      <ul className={moblieMenu ? 'absolute top-0 left-0 w-full h-screen bg-[#3F72AF] flex flex-col justify-center items-center' : 'hidden'}>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='fixed flex flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[30px] h-[30px] flex justify-between flex-col'>
            <a className='flex justify-between items-center w-full text-[#F9F7F7]' href='/'>Linkedin</a>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
