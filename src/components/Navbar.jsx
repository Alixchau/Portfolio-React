import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
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
      <ul className={moblieMenu ? 'absolute top-0 left-0 transition-all duration-500 ease-in w-full h-screen bg-[#3F72AF] flex flex-col justify-center items-center' : 'hidden'}>
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
      <div className='hidden md:flex fixed flex-col top-[40%] left-10'>
        <ul>
          <li className='w-[40px] h-[40px] flex items-center p-1 bg-[#F9F7F7] rounded-lg hover:scale-110 duration-500 my-4'>
            <a className='flex items-center w-full text-[#3F72AF]'
              href='https://www.linkedin.com/in/shuk-han-chau-835057132' target='_blank'>
              <FaLinkedin size={100} />
            </a>
          </li>
          <li className='w-[40px] h-[40px] flex items-center p-1 bg-[#F9F7F7] rounded-lg hover:scale-110 duration-500 my-4'>
            <a className='flex items-center w-full text-[#19202b]'
              href='https://github.com/Alixchau' target='_blank'>
              <FaGithub size={100} />
            </a>
          </li>
          <li className='w-[40px] h-[40px] flex items-center p-1 bg-[#F9F7F7] rounded-lg hover:scale-110 duration-500 my-4'>
            <a className='flex items-center w-full text-[#c0412b]'
              href='mailto:alixchau831@gmail.com' target='_blank'>
              <HiOutlineMail size={100} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
