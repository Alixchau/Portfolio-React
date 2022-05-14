import React from 'react'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#112D4E]'>
      {/* container */}
      <div className='max-w-1000px mx-auto px-10 flex flex-col justify-center h-full md:ml-[18vw]'>
        <p className='text-[#F9F7F7] py-2 '>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#DBE2EF] py-2'>Alix Chau</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#a2b4d6]'>I'm a Web Developer.</h2>
        <p className='text-[#F9F7F7] py-4 max-w-[700px]'>I'm passionate about building exceptional applications, love investigating and solving problems and excited about finding solution that fits the most. </p>
        <p className='text-[#F9F7F7]'>I'm quietly confident, naturally curious and constantly improving my skills. </p>
        <div>
          <button className='text-[#e2dfdf] border-2 rounded px-6 py-3 my-7 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>View Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Home
