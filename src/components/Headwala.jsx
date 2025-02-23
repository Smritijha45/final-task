import React from "react";

const Headwala = () => {
  return (
    <>
      <div className=" flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold">TRAVERSE</h1>
        <nav className="space-x-8">
          <a href="." className="text-lg font-medium"> Discover</a> <a href="." className="text-lg font-medium">Trips </a> <a href="." className="text-lg font-medium"> Reviews </a> <a href="." className="text-lg font-medium">Blog </a>
        </nav>
        <button className=" text-white bg-black px-4 py-2 rounded-full">
          Sign In
        </button>
      </div>
    </>
  );
};

export default Headwala;