import React,{useState} from 'react'
import {data} from "../data/data.js"

type Props = {}

export default function MenuItems({}: Props) {

  const [foodItems, setFoodItems] = useState(data)

  const filterFoodItems = (category:string) => {
    setFoodItems(data.filter((item) => {return item.category === category}) )
  }

  const filterFoodImesbyPrice = (price:string):void => {
    setFoodItems(data.filter(item => item.price === price))
  }


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">


        <h1 className="text-orange-600 font-bold text-4xl text-center">Worst Rated Items</h1>

        {/* filter rows */}
        <div className="flex flex-col lg:flex-row justify-between">

            {/* Filter type */}
            <div>
              <p className="font-bold text-gray-700">Filter Type</p>
              <div className="flex justify-between flex-wrap">
                <button onClick={() => setFoodItems(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                <button onClick={() => filterFoodItems("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
                <button onClick={() => filterFoodItems("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                <button onClick={() => filterFoodItems("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
                <button onClick={() => filterFoodItems("chicken")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
              </div>
            </div>

            {/* Filter price */}
            <div>
              <p className="font-bold text-gray-700 ">Filter Price</p>
              <div className="flex justify-between max-w-[390px] w-full">
                <button onClick={() => filterFoodImesbyPrice("$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                <button onClick={() => filterFoodImesbyPrice("$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                <button onClick={() => filterFoodImesbyPrice("$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                <button onClick={() => filterFoodImesbyPrice("$$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
              </div>
            </div>

        </div>


      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4 ">
        {foodItems.map((item , index) => (
            <div key={item.id} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
              <div className="flex justify-between p-4 ">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white rounded-full p-2">{item.price}</span>
                </p>
              </div>
            </div>
        ))}
      </div>


    </div>
  )
}