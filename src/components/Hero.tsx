import React from 'react'

type Props = {}

export default function Hero({}: Props) {

  const ImageUrl = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className="max-h-[500px] relative">

        {/*Overlay*/}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50">
            <h1>The <span>Worst</span></h1>
            <h1>Meals <span>Prepared</span></h1>
        </div>

        <img className="" src={ImageUrl} alt="" />

      </div>
    </div>
  )
}