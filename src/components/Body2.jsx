import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Body2 = () => {
  return (
    <div className="relative mt-20 flex justify-center px-4">
      
      <div className="relative w-full max-w-[1550px]">
       
        <img src="src/assets/img1.png" className="w-full rounded-xl" alt="Travel Calendar 2025" />

        
        <div className="absolute bottom-10 left-10 md:left-20 text-white text-center md:text-left">
         
          <h1 className="text-3xl md:text-5xl font-bold">Travel Calendar 2025</h1>

          
          <p className="text-lg md:text-xl font-bold mt-4">Get Yours also planned.</p>

          
          <button className="mt-4 px-6 py-3 bg-white font-extrabold text-lg md:text-xl text-black rounded-full flex items-center gap-2 hover:bg-gray-500">
            Checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body2;
