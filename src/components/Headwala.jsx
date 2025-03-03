import React, { useState } from "react";
import { Menu, X } from "lucide-react";


const Headwala = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="flex items-center justify-between px-10 py-10 flex-wrap">
      
      <h1 className="text-3xl font-black">TRAVERSE</h1>

      {/* Mobile  */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop  */}
      <nav className={`space-x-8 mr-20 hidden md:flex`}>
        <a href="#one" className="text-lg font-bold">
          Discover
        </a>
        <a href="#two" className="text-lg font-bold">
          Trips
        </a>
        <a href="#four" className="text-lg font-bold">
          Reviews
        </a>
        <a href="#three" className="text-lg font-bold">
          Blog
        </a>
      </nav>

      
      <a href="#hi" className="bg-black text-white px-4 py-2 rounded-full hidden md:block">
        Sign In
      </a>


      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
          <a href="#one" className="text-lg font-bold">
            Discover
          </a>
          <a href="#two" className="text-lg font-bold">
            Trips
          </a>
          <a href="#four" className="text-lg font-bold">
            Reviews
          </a>
          <a href="#three" className="text-lg font-bold">
            Blog
          </a>
          <a href="#hi" className="bg-black text-white px-4 py-2 rounded-full">
            Sign In
          </a>
        </div>
      )}
    </div>
  );
};

export default Headwala;
