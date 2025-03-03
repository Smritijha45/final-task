import React from "react";
import { FaPlane, FaStar, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import five from "../assets/five.jpg"; 
import four from "../assets/four.jpg"; 
import three from "../assets/three.webp"; 
import ten from "../assets/ten.jpg"; 
import six from "../assets/six.jpg";



const hotels = [
  {
    id: 1,
    name: "Sofiana Hotel & Spa + Flights",
    location: "Da Nang",
    rating: 3.5,
    reviews: 682,
    duration: "6 Days and 7 Nights",
    price: "$65,367",
    originalPrice: "$1,05,341",
    discount: "48% off",
    image: three,
  },
  {
    id: 2,
    name: "Blue karma Village + Flights",
    location: "Bali",
    rating: 4.2,
    reviews: 857,
    duration: "3 Days and 4 Nights",
    price: "$51,178",
    originalPrice: "$1,02,357",
    discount: "50% off",
    image: four,
  },
  {
    id: 3,
    name: "Saigon Prince Hotel",
    location: "Ho Chin Min",
    rating: 3.9,
    reviews: 534,
    duration: "6 Days and 7 Nights",
    price: "$53,184",
    originalPrice: "$1,00,341",
    discount: "47% off",
    image: five,
  },
  {
    id: 4,
    name: "Taj Hotel + Pool + Flights",
    location: "Chandigarh",
    rating: 4.3,
    reviews: 682,
    duration: "6 Days and 6 Nights",
    price: "$84,297",
    originalPrice: "$1,45,340",
    discount: "42% off",
    image: ten,
  },
  {
    id: 5,
    name: "Blue karma Village + Flights",
    location: "Bali",
    rating: 4.7,
    reviews: 610,
    duration: "6 Days and 7 Nights",
    price: "$72,800",
    originalPrice: "$1,10,000",
    discount: "34% off",
    image: four,
  },
  {
    id: 6,
    name: "Luxury Suites & Spa",
    location: "Dubai",
    rating: 4.9,
    reviews: 930,
    duration: "5 Days and 6 Nights",
    price: "$85,450",
    originalPrice: "$1,30,000",
    discount: "35% off",
    image: six,
  },
];

const HotelCard = () => {
  return (
    <div className="mt-23 pl-25">
     
      <h1 className="text-5xl font-bold mb-6">Trending Offers</h1>

      <Swiper
        slidesPerView={4} 
        spaceBetween={8} 
        navigation={true}
        modules={[Navigation]} 
        className="mySwiper"
      >
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <div className="w-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image */}
              <img src={hotel.image} alt={hotel.name} className="w-full h-[180px] object-cover" />

              {/* Content Section */}
              <div className="p-4">
                {/* Hotel Name & Icon */}
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {hotel.name} <FaPlane className="rotate-[-45]" />
                </h2>

                {/* City Name */}
                <p className="text-gray-600 text-sm mt-1">{hotel.location}</p>

                {/* Rating & Duration */}
                <div className="flex flex-col gap-1 text-xs mt-2">
                  <div className="flex items-center gap-1">
                    <FaStar /> {hotel.rating}/5 rating: Excellence ({hotel.reviews})
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt /> {hotel.duration}
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-3 text-right">
                  {/* Discount Badge */}
                  <div className="inline-flex text-xs font-bold text-white bg-green-600 px-2 py-1 rounded">
                    {hotel.discount}
                  </div>

                  {/* Prices */}
                  <div className="flex justify-end items-center">
                    <span className="text-lg font-bold">{hotel.price}</span>
                    <span className="text-gray-400 line-through text-sm ml-2">{hotel.originalPrice}</span>
                  </div>

                  {/* Per Traveller Info */}
                  <p className="text-gray-600 text-xs mt-1">per traveller.</p>

                  {/* View Button */}
                  <div className="flex justify-end mt-1">
                    <button className="text-xs bg-gray-200 px-2 py-1 rounded-md flex items-center gap-1 hover:bg-gray-300 transition">
                      View <FaArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelCard;
