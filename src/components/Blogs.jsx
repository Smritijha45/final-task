import twenty from "../assets/twenty.jpg";
import twelve from "../assets/twelve.jpg";
import three from "../assets/three.webp";
import eighteen from "../assets/eighteen.jpg";

export default function Blogs() {
  return (
    <div id="three">
      
      <div className="mt-23 pl-30">
        <h1 className="text-5xl font-bold">Our Blogs</h1>
      </div>

      <div className="mt-7 ml-27 flex flex-wrap gap-10">
        {/* First Blog */}
        <div
          className="relative w-[800px] h-[525px] bg-cover bg-center "
          style={{ backgroundImage: `url(${twenty})` }}
        >
          <div className="w-full h-full bg-white-opacity-40 flex flex-col items-start justify-end p-8">
            <h1 className="text-white text-3xl font-bold">
              Unforgettable Journeys with Friends
            </h1>
            <p className="text-white font-normal  mt-2 max-w-[550px]">
              Traveling with friends is more than just a getaway; it's an
              opportunity to create lasting memories. Whether you're exploring
              new cities or relaxing by the beach, every moment becomes
              unforgettable when shared with those you cherish.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Second Blog */}
          <div
            className="relative w-[400px] h-[250px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${twelve})` }}
          >
            <div className="w-full h-full flex flex-col items-start justify-end p-8">
              <h1 className="text-white text-2xl font-bold">
                The perfect spot
              </h1>
              <p className="text-white font-normal text-xs mt-2 max-w-[550px]">
                Searching for the perfect spot with friends, where every moment
                turns into an adventure.
              </p>
            </div>
          </div>

          {/* Third Blog */}
          <div
            className="relative w-[400px] h-[250px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${three})` }}
          >
            <div className="w-full h-full flex flex-col items-start justify-end p-8">
              <h1 className="text-white text-2xl font-bold">
                Chillin' in the water
              </h1>
              <p className="text-white font-normal text-xs mt-2 max-w-[550px]">
                ust enjoying the water and soaking up the good vibes. Perfect
                way to chill out!
              </p>
            </div>
          </div>
        </div>

        {/* four Blog */}
        <div
          className="relative w-[300px] h-[525px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${eighteen})` }}
        >
          <div className="w-full h-full bg-opacity-0 flex flex-col items-start justify-end p-8">
            <h1 className="text-white text-2xl font-bold">
              Kerala's Serene Waters
            </h1>
            <p className="text-white font-normal text-xs mt-2 max-w-[550px]">
              Exploring Kerala by kayak is the perfect way to take in its
              stunning landscapes. From peaceful backwaters to lush greenery,
              every paddle brings you closer to the beauty of this coastal
              paradise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
