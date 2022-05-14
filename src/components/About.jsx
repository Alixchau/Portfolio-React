import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#112D4E]'>
    {/* Container */}
      <div className='max-w-1000px mx-auto px-10 flex flex-col justify-center h-full md:ml-[18vw]'>
        <div>
          <p className='text-3xl font-bold inline border-b-4 border-r-4 rounded border-[#3F72AF] text-[#DBE2EF] px-2 py-1'>About Me</p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>I love building interesting and challenging applications and it makes me happy everytime a bug is fixed, a section is completed and eventually the application is successfully built.
          </p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>
          I used to worked in banking and insurance industry, these expericences improve my skills to communicate with customers, fight for best terms from provider and also discuss company's projects with IT teams.   
          </p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>
          In my free time, I love exploring tasty foods (Japanese food is the best!) , listening to music,  travelling (Osaka, Ho Noi, Rome are my favourites) and ginger cats (they're super cute) ! 
          </p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>My motto is:</p>
          <p  className='text-2xl font-bold inline border-b-4 rounded border-[#3F72AF] text-[#DBE2EF] px-2 py-1 leading-loose '>I only know one thing, and that is I know nothing.</p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>-Socrates</p>          
        </div>
      </div>
    </div>
  )
}

export default About
