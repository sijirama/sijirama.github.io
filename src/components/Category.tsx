import React from 'react'
import { categories } from '../data/data'

type Props = {}

function Category({}: Props) {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Categories though</h1>

      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {
          categories.map((category) => (
            <div key={category.id} className="bg-gray-300 rounded-lg p-4 flex justify-between items-center">
              <h2 className='font-bold sm:text-xl'>{category.name}</h2>
              <img src={category.image} alt={category.name} className="w-20 " />
             </div>
          ))
        }
      </div>

    </div>
  )
}

export default Category