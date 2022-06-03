import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full top-[100px] h-screen bg-[#112D4E]'>
      {/* container */}
      <div className='max-w-[1000px] pt-[80px] mx-auto px-10 flex flex-col justify-center h-full md:ml-[15vw]'>
        <p className='text-[#F9F7F7] pt-3'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#DBE2EF] py-2'>Alix Chau</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#a2b4d6]'>I'm a Web Developer.</h2>
        <p className='text-[#F9F7F7] py-4 max-w-[700px]'>I'm passionate about building exceptional applications, excited about solving problems and finding solution that fits the most. </p>
        <p className='text-[#F9F7F7]'>I'm quietly confident, naturally curious and a quick learner, a team player but also competent to work individually.</p>
        <div className='flex'>
          <div>
            <button className='text-[#e2dfdf] border-2 rounded px-4 py-3 my-7 mr-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'><Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link></button>
          </div>
          <div>
            <a href='https://drive.google.com/file/d/1YLGr2X22Ft6FT3RMhVLP4PqVtiWnGoa6/view?usp=sharing' target='_blank'>
              <button className='text-[#e2dfdf] border-2 rounded px-4 py-3 my-7 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                View Resume
              </button></a>
          </div>
        </div>
        {/* Social icons */}
        <div>
          <ul className='flex flex-row md:hidden'>
            <li className='w-[40px] h-[40px] flex items-center p-1 bg-[#F9F7F7] rounded-lg hover:scale-110 duration-500 mr-4'>
              <a className='flex items-center w-full text-[#3F72AF]'
                href='https://www.linkedin.com/in/shuk-han-chau-835057132' target='_blank'>
                <FaLinkedin size={100} />
              </a>
            </li>
            <li className='w-[40px] h-[40px] flex items-center p-1 bg-[#F9F7F7] rounded-lg hover:scale-110 duration-500 mr-4'>
              <a className='flex items-center w-full text-[#19202b]'
                href='https://github.com/Alixchau' target='_blank'>
                <FaGithub size={100} />
              </a>
            </li>
            <li className='w-[40px] h-[40px] flex items-center p-1 bg-[#F9F7F7] rounded-lg hover:scale-110 duration-500 mr-4'>
              <a className='flex items-center w-full text-[#c0412b]'
                href='mailto:alixchau831@gmail.com' target='_blank'>
                <HiOutlineMail size={100} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Home
