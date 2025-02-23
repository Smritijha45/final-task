import React from 'react'

const Body = () => {
  return (
    <>
      <div className='mt-12 text-center'>
        <h1 className='text-6xl font-extrabold'>Explore Your World</h1>
        <div className='flex items-center justify-between pt-5 px-96  font-normal '>
            <a href='.' className='bg-transparent'><i class=""></i> <u>Search All</u></a>
            <a href='.' className='bg-transparent'><i class=""></i> Hotels</a>
            <a href='.' className='bg-transparent'><i class=""></i> Things to Do</a>
            <a href='.' className='bg-transparent'><i class=""></i> Restaurants</a>
            <a href='.' className='bg-transparent'><i class=""></i> Flights</a>
        </div>
        <div>
        <div className='flex justify-center'>
        <div className="relative mt-18 w-2/4">
          <input className="w-full py-3 px-5 border rounded-full text-gray-500 shadow-oklch(0.374 0.01 67.558) shadow-md" type="text" placeholder="Places to go"/>
          <button className="absolute right-3 top-1 bg-black text-white px-4 py-2 rounded-full">Search</button>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
export default Body;