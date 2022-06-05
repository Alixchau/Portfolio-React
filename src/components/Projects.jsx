import React from 'react'
import Lola from '../assets/Lola.png'
import Beans from '../assets/beans.png'
import Reciplore from '../assets/reciplore.png'
import HOMEnVentory from '../assets/HOMEnVentory.png'
import ReactImg from '../assets/react.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Java from '../assets/java.png'
import Mysql from '../assets/mysql.png'
import Redux from '../assets/redux.png'
import Node from '../assets/node.png'
import MongoDB from '../assets/mongo.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#112D4E] md:pt-[5rem] '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-10 flex flex-col h-full md:ml-[15vw]'>
        <div>
          <p className='text-3xl font-bold inline border-b-4 border-r-4 rounded border-[#3F72AF] text-[#DBE2EF] px-2 py-1'>Projects</p>
          <p className='text-[#F9F7F7] pt-4 my-4'>These are my previous projects</p>
        </div>

        {/* Grid container */}
        <div className='grid sm:grid-cols-2 gap-6 justify-center mx-0'>

          {/* Grid item */}
          <div className='rounded shadow-md shadow-[#3F72AF]'>
            <div className=' h-[200px] md:mb-4'>
              <img src={Lola} alt='project picture' className='rounded object-cover' />
            </div>
            <p className='text-center text-[#F9F7F7] font-bold pb-2 md:py-4'>Lola</p>
            <p className='w-full pb-2 px-4 text-[#F9F7F7] text-center'>Lola is a full stack and a fully responsive E-commerce site. Features include user authentication, filter and sort products, manage shopping cart and view orders etc. Payment using Stripe API. </p>

            <p className='text-center text-[#F9F7F7] font-bold py-4'>Stack</p>
            <div className='flex justify-center'>
              <img className='w-7 mx-auto my-2' src={ReactImg} alt="React icon" />
              <img className='w-7 mx-auto my-2' src={Redux} alt="Redux icon" />
              <img className='w-7 mx-auto my-2' src={Node} alt="Node icon" />
              <img className='w-7 mx-auto my-2' src={MongoDB} alt="MongoDB icon" />
            </div>
            <div className='pt-8 text-center'>
              <a href='https://e-commerce-mern-deploy.herokuapp.com/' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Website
                </button>
              </a>
              <a href='https://youtu.be/i6pFppFDyNE' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/Alixchau/E-commerce' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Grid item */}
          <div className='rounded shadow-md shadow-[#3F72AF]'>
            <div className=' h-[200px] md:mb-4'>
              <img src={Reciplore} alt='project picture' className='rounded object-cover' />
            </div>
            <p className='text-center text-[#F9F7F7] font-bold pb-2 md:py-4'>Reciplore</p>
            <p className='w-full pb-2 px-4 text-[#F9F7F7] text-center'>Reciplore is a fully responsive website for exploring recipes and wine pairing. Data gets from spoonacular API. </p>

            <p className='text-center text-[#F9F7F7] font-bold py-4'>Stack</p>
            <div className='flex justify-center'>
              <img className='w-7 mx-auto my-2' src={ReactImg} alt="React icon" />
              <img className='w-7 mx-auto my-2' src={HTML} alt="HTML icon" />
              <img className='w-7 mx-auto my-2' src={CSS} alt="CSS icon" />
              <img className='w-7 mx-auto my-2' src={JavaScript} alt="JavaScript icon" />
            </div>
            <div className='pt-8 text-center'>
              <a href='https://reciplore-alixchau.vercel.app/' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Website
                </button>
              </a>
              <a href='https://github.com/Alixchau/reciplore' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Grid item */}
          <div className='group container rounded shadow-md shadow-[#3F72AF]'>
            <div className=' h-[200px] md:mb-4'>
              <img src={Beans} alt='project picture' className='rounded object-cover' />
            </div>
            <p className='text-center text-[#F9F7F7] font-bold pb-2 md:py-4'>...Beans</p>
            <p className='w-full pb-2 px-4 text-[#F9F7F7] text-center'>...Bean is a landing page of coffee bean's companies. It's a fully responsive website for desktop, tablet and mobile.</p>
            <p className='text-center text-[#F9F7F7] font-bold py-4'>Stack</p>
            <div className='flex justify-center'>
              <img className='w-7 mx-auto my-2' src={HTML} alt="HTML icon" />
              <img className='w-7 mx-auto my-2' src={CSS} alt="CSS icon" />
              <img className='w-7 mx-auto my-2' src={JavaScript} alt="JavaScript icon" />
            </div>
            <div className='pt-8 text-center'>
              <a href='https://alixchau.github.io/...Beans/' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Website
                </button>
              </a>
              <a href='https://github.com/Alixchau/...Beans' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Grid item */}
          <div className='rounded shadow-md shadow-[#3F72AF]'>
            <div className='h-[200px] md:mb-4'>
              <img src={HOMEnVentory} alt='project picture' className='rounded object-cover overflow-hidden' />
            </div>
            <p className='text-center text-[#F9F7F7] font-bold pb-2 md:py-4'>HOMEnVentory</p>
            <p className='w-full pb-2 px-4 text-[#F9F7F7] text-center'>HOMEnVentory is a full stack web application for users to manage their inventory, admin users to manage user accounts. </p>
            <p className='text-center text-[#F9F7F7] font-bold py-4'>Stack</p>
            <div className='flex justify-center'>
              <img className='w-7 mx-auto my-2' src={Java} alt="React icon" />
              <img className='w-7 mx-auto my-2' src={HTML} alt="HTML icon" />
              <img className='w-7 mx-auto my-2' src={CSS} alt="CSS icon" />
              <img className='w-7 mx-auto my-2' src={Mysql} alt="Mysql icon" />
            </div>
            <div className='pt-8 text-center'>
              {/*                 <a href='https://reciplore-alixchau.vercel.app/' target='_blank'>
                  <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                    Demo
                  </button>
                </a> */}
              <a href='https://github.com/Alixchau/HOMEnVentory' target='_blank'>
                <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-2 mb-3 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>


  )
}

export default Projects
