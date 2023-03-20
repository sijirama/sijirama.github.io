import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className="max-w-[1640px] min-h-[25rem] flex items-end justify-center relative mx-auto text-white">
      
      {/* card */}
      <div className="w-full lg:w-5/6 h-5/6 flex flex-col md:flex-row bg-gray-800 mx-auto text-white">

        {/* Left Side */}
        <div className='w-full md:w-1/2 flex flex-col gap-10 px-5 py-5 md:px-10 md:py-y justify-center align-center md:border-r-1 border-white'>
          <div className="font-Abril text-xl md:text-3xl">WorstEats</div>

          <div className=' font-Almarai grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
            <p>Careers</p>
            <p>Consumer care</p>
            <p>WorstEat News</p>
            <p>Newsletter</p>
            <p>Address</p>
            <p>Updates</p>
            <p>Alumni</p>
            <p>Our Cafe</p>
          </div>

          <div className='flex gap-5 p-2 md:w-1/2 justify-center bg-white'>
            <img src='/socials/github.png' alt='' className='' />
            <img src='/socials/whatsapp.png' alt='' />
            <img src='/socials/linkedin.png' alt='' />
            <img src='/socials/instagram.png' alt='' />
          </div>

        </div>

        {/* Right Side */}
        <div className='w-full md:w-1/2 flex flex-col gap-10 align-center px-5 py-5 md:px-10 md:py-y justify-center align-center font-Almarai'>
          <p>Get the Worst Meals Ever</p>
          <div className='flex'>
            <input className="bg-transparent outline-none px-2 border-white border-2"  type='text' placeholder='' />
            <button className='rounded-none border-1 border-white'>subscribe</button>
          </div>

          <div className='flex gap-2'>
            <input className='accent=pink-500' type="checkbox" />
            <p className='font-Almarai'>By checking the box you agree that your parents dont love you.</p>
          </div>

        </div>














      </div>
    
    
    </div>
  )
}

export default Footer