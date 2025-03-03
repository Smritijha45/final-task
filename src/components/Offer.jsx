import React from "react";
import one from "../assets/one.jpg";

const Offer = () => {
  return (
    <div id="four"><div className="mt-20 ml-38 w-[1500px] h-[370px] flex items-center justify-between bg-gray-200 border-2 border-gray-800  rounded-lg">
      {/* Left Background Image Div */}
      <div
        className="w-1/2 h-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${one})` }}
      ></div>

      {/* Right Content Div */}
      <div className="w-1/2 mt-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-900">Get Special Offer & Newsletter</h1>
        <h1 className="text-4xl font-bold text-gray-900">from The Traverse</h1>
        <p className="text-gray-700 mt-2">
          Subscribe to see the prices drop the moment 
        </p>
        <p className="text-gray-700 mt-2">
          you sign up
        </p>
        <div className="relative mt-5 w-3/4">
          <input className="w-full py-3 px-5 border rounded-full text-gray-500  shadow-md" type="text" placeholder="Email"/>
          <button className="absolute right-3 top-1 bg-black text-white px-4 py-2 rounded-full">Subscribe</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Offer;
