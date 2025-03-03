import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faMap, faUtensils, faPlaneDeparture,  } from '@fortawesome/free-solid-svg-icons';

const Body = () => {
  return (
    <div className="mt-12 text-center">
     <h1 className="text-6xl font-black futura-bold">Explore Your World</h1>


      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-10 pt-8 font-medium">
        <button className="flex items-center gap-2 bg-transparent">
          <FontAwesomeIcon icon={faHome} /> <u>Search All</u>
        </button>
        <button className="flex items-center gap-2 bg-transparent">
          <FontAwesomeIcon icon={faBed} /> Hotels
        </button>
        <button className="flex items-center gap-2 bg-transparent">
          <FontAwesomeIcon icon={faMap} /> Things to Do
        </button>
        <button className="flex items-center gap-2 bg-transparent">
          <FontAwesomeIcon icon={faUtensils} /> Restaurants
        </button>
        <button className="flex items-center gap-2 bg-transparent">
          <FontAwesomeIcon icon={faPlaneDeparture} /> Flights
        </button>
      </div>
      <div>
        <div className='flex justify-center'>
        <div className="relative mt-8 w-2/4">
          <input className="w-full py-3 px-5 border rounded-full text-gray-500 shadow-slate-600 shadow-md" type="text" placeholder="Places to go"/>
          <button className="absolute right-3 top-1 bg-black text-white px-4 py-2 rounded-full">Search</button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Body;
