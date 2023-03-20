import React , {useState} from 'react'
import {AiOutlineMenu , AiOutlineSearch , AiOutlineClose , AiFillTag} from "react-icons/ai"
import { BsFillCartFill , BsFillSaveFill } from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb"
import {MdFavorite , MdHelp} from 'react-icons/md'
import {FaWallet , FaUserFriends} from 'react-icons/fa'

type Props = {}

export default function Navbar({}: Props) {

  const iconSize = 25
  const [navBarOpen , SetNavBarOpen ] = useState(false) 

  const toggleNavBar = () => {
    SetNavBarOpen(!navBarOpen)
  }

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>

        {/* left side*/}
      <div className='flex items-center '>
          <div onClick={toggleNavBar} className='cursor-pointer'>
            <AiOutlineMenu size={iconSize} />
          </div>

          <h1 className='font-Abril text-2xl sm:text-3xl lg:text-4xl px-2'>Worst <span className='font-bold'>Eats</span></h1>

          <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[0.85rem] '>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>            
            <p className='p-2'>Pickup</p>            
          </div>
      </div>    

        {/* Search Input*/}
      <div className='bg-gray-200 flex items-center rounded-full px-2  w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={iconSize - 4} />
        <input className='bg-transparent p-2 focus:outline-none text-xs md:text-[0.8rem]' type="text" placeholder='Search for a bad meal' />
      </div>

        {/* Cart button*/}
      <button className=' items-center gap-1 bg-black text-white hidden sm:flex py-2 rounded-full'>
        <BsFillCartFill /> Cart
      </button>

        {/* Mobile Menu*/}
        {/* Overlay */}

      {navBarOpen ? 
      
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      
      : null}



        {/* Side Menu*/}
        <div className=
        {navBarOpen ?
        'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
        :
        'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }>
          <AiOutlineClose onClick={toggleNavBar} size={iconSize} className = "absolute right-4 top-4 cursor-pointer " />
          <h2 className="text-2xl p-4 ">Worst <span className="font-bold">Eats</span></h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800 ">
              <li className="text-xl py-4 flex items-center gap-2"><TbTruckDelivery size={iconSize - 5} className = "" />Orders</li>
              <li className="text-xl py-4 flex items-center gap-2"><MdFavorite size={iconSize - 5} className = "" />Favourites</li>
              <li className="text-xl py-4 flex items-center gap-2"><FaWallet  size={iconSize - 5} className = "" />Wallet</li>
              <li className="text-xl py-4 flex items-center gap-2"><MdHelp size={iconSize - 5} className = "" />Help</li>
              <li className="text-xl py-4 flex items-center gap-2"><AiFillTag size={iconSize - 5} className = "" />Promotions</li>
              <li className="text-xl py-4 flex items-center gap-2"><BsFillSaveFill size={iconSize - 5} className = "" />Best One</li>
              <li className="text-xl py-4 flex items-center gap-2"><FaUserFriends size={iconSize - 5} className = "" />Invite Friends</li>
            </ul>
          </nav>

        </div>


    </div>
  )
}