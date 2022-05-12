import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
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
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}> 
        { moblieMenu ? <FaTimes /> :<FaBars />}
      </div>
      {/* Mobile menu */}
        <ul className={ moblieMenu ? 'absolute top-0 left-0 w-full h-screen bg-[#112D4E] flex flex-col justify-center items-center': 'hidden'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>

      {/* Social icons */}
    </div>
  )
}

export default Navbar
