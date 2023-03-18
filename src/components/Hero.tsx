import React from 'react'

type Props = {}

export default function Hero({}: Props) {

  const ImageUrl = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className="max-h-[500px] relative">

        {/*Overlay*/}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center ">
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>The <span className='text-orange-500 '>Worst</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '><span className='text-orange-500 '>Meals </span>Prepared</h1>
        </div>

        <img className="" src={ImageUrl} alt="" />

      </div>
    </div>
  )
}