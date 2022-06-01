import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#112D4E]  pt-[15rem]  md:pt-3 '>
    {/* Container */}
      <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full md:ml-[15vw]'>
        <div>
          <p className='text-3xl font-bold inline border-b-4 border-r-4 rounded border-[#3F72AF] text-[#DBE2EF] px-2 py-1'>About Me</p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>I love building interesting and challenging applications and it makes me happy every time a bug is fixed, a section is completed and eventually the application is successfully built.
          </p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>
          I used to work in banking and insurance industry, these experiences improve my skills to communicate with customers and IT teams, analysis and solve problems, also proved I'm a fast learner and my integrity, diligent and relialbe personality.   
          </p>
          <p className='text-[#F9F7F7] pt-4 max-w-[700px] my-4'>
          In my free time, I love exploring tasty foods, travelling and ginger cats (they're super cute)! 
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
