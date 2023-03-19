import React from 'react'

type Props = {}

export default function HeadLineCards({}: Props) {

    const ImageUrl1 = "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const ImageUrl2 = "https://images.pexels.com/photos/6343168/pexels-photo-6343168.jpeg?auto=compress&cs=tinysrgb&w=600"
    const ImageUrl3 = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">


        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className="absolute w-full h-full bg-black/70 rounded-xl text-white ">
                <p className="font-bold text-2xl px-2 pt-4">You really wanna eat this shit</p>
                <p className='px-2'>Available every weekday</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " 
                src={ImageUrl1} 
                alt="" />
        </div>


        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className="absolute w-full h-full bg-black/70 rounded-xl text-white ">
                <p className="font-bold text-2xl px-2 pt-4">Sun is Out Nigger</p>
                <p className='px-2'>through 8/26</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " 
                src={ImageUrl2} 
                alt="" />
        </div>


        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className="absolute w-full h-full bg-black/70 rounded-xl text-white ">
                <p className="font-bold text-2xl px-2 pt-4">Sun is Out Nigger</p>
                <p className='px-2'>through 8/26</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " 
                src={ImageUrl3} 
                alt="" />
        </div>


    </div>
  )
}