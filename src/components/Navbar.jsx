import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [moblieMenu, setMoblieMenu] = useState(false);
  const handleClick = () =>setMoblieMenu(!moblieMenu);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#112D4E] text-[#F9F7F7]'>
      <div>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/* Menu */}
      <div>
      {/* width more than medium size will be displayed flex, otherwise hidden  */}
        <ul  className="hidden md:flex">
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>Home</li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>About</li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>Skills</li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>Projects</li>
          <li className='hover:bg-[#3F72AF] duration-75 rounded'>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}> 
        { moblieMenu ? <FaTimes /> :<FaBars />}
      </div>
      {/* Mobile menu */}
        <ul className={ moblieMenu ? 'absolute top-0 left-0 w-full h-screen bg-[#3F72AF] flex flex-col justify-center items-center': 'hidden'}>
          <li className='py-6 text-3xl'>Home</li>
          <li className='py-6 text-3xl'>About</li>
          <li className='py-6 text-3xl'>Skills</li>
          <li className='py-6 text-3xl'>Projects</li>
          <li className='py-6 text-3xl'>Contact</li>
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
