import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Java from '../assets/java.png'
import Mysql from '../assets/mysql.png'
import C from '../assets/c.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#112D4E]'>
      {/* Container */}
      <div className='max-w-1000px mx-auto px-10 flex flex-col justify-center h-full md:ml-[18vw]'>
        <div>
          <p className='text-3xl font-bold inline border-b-4 border-r-4 rounded border-[#3F72AF] text-[#DBE2EF] px-2 py-1'>Skills</p>
          <p className='text-[#F9F7F7] pt-4 my-4'>These are the technologies that I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={CSS} alt="HTML icon" />
            <p className='mb-4'>CSS</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={JavaScript} alt="HTML icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={Node} alt="HTML icon" />
            <p className='my-4'>Node JS</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={Mongo} alt="HTML icon" />
            <p className='my-4'>Mongo DB</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={Mysql} alt="HTML icon" />
            <p className='my-4'>MySQL</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={Java} alt="HTML icon" />
            <p className='my-4'>Java</p>
          </div>

          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={C} alt="HTML icon" />
            <p className='my-4'>C#</p>
          </div>
          <div className='shadow-md bg-[#F9F7F7] shadow-[#3F72AF] hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto my-4' src={Tailwind} alt="HTML icon" />
            <p className='my-4'>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
