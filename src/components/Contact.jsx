import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#112D4E] '>
      <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full md:ml-[18vw]'>
      <form action='https://getform.io/f/02d14b7c-a009-43b7-802d-f6f4acc61a14' method='POST' className='flex flex-col max-w-[600px] w-full '>
        <div>
          <p className='text-3xl font-bold inline border-b-4 border-r-4 rounded border-[#3F72AF] text-[#DBE2EF] px-2 py-1'>Contact</p>
          <div className='flex flex-row text-[#F9F7F7] pt-4 my-4'>
          <p>Submit the form below or shoot me a message in</p>          
          <a className='font-bold cursor-pointer ml-1' href='https://www.linkedin.com/in/shuk-han-chau-835057132' target='_blank'> Linkedin </a>
          </div>
        </div>
        <input className='my-4 p-2 bg-[#ccd6f6] text-[#112D4E] rounded' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] text-[#112D4E] rounded' type='email' placeholder='Email' name='email' />
        <textarea className='my-4 p-2 bg-[#ccd6f6] text-[#112D4E] rounded' type='text' placeholder='Message' name='message' rows='10' />

        <button className='text-[#e2dfdf] border-2 rounded px-4 py-2 mx-auto my-4 hover:bg-[#3F72AF] duration-75 hover:border-[#3F72AF]'>Let's Chat</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
