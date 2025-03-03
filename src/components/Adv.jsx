import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import eleven from "../assets/eleven.jpg";
import fifteen from "../assets/fifteen.jpg";
import nineteen from "../assets/nineteen.jpg";
import fourteen from "../assets/fourteen.jpg";
import sixteen from "../assets/sixteen.jpg";

const images = [eleven, fifteen, nineteen, fourteen, sixteen, fifteen, eleven, fifteen];

export default function Adv() {
  return (
    <div className="relative mt-23 pl-30 mr-20">
      {/* Section Title */}
      <h1 className="text-5xl font-bold  mb-6">Your Next Adventure</h1>

      {/* Navigation Buttons (Outside the Image Container) */}
      <button className="prev-btn pl-30 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ">
        <FaArrowLeft className="text-white" size={35} />
      </button>

      <button className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 z-10 pl-5 ml-40">
        <FaArrowRight className="text-white" size={35} />
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20} // Space between slides
        slidesPerView={5} // Show 5 images at a time
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }} // Custom buttons
        loop={true} // Infinite scrolling
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={src} alt={`img-${index}`} className="w-full h-100 rounded-lg shadow-md object-cover" />

            {/* Explore Button */}
            <button className="absolute bottom-4 left-4 bg-gray-200 text-black px-4 py-2 flex items-center space-x-2 rounded-full shadow-md hover:bg-gray-700 transition">
              <span>Explore</span>
              <FaArrowRight />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
