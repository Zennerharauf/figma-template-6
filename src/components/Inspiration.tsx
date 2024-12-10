import Image from "next/image";
import group1 from "@/public/group1.png"
import group2 from "@/public/group 2.png"

export default function Inspiration (){
  return (
    <div className="bg-gray-100 w-full py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-gray-600">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600">
              Explore More
            </button>
          </div>

          {/* Right Section */}
          <div className="relative">
            {/* Image 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white shadow-lg p-4 rounded-lg">
                <Image src={group1} alt="group1"width={300}height={300}></Image>
                <h3 className="text-lg font-semibold mt-4">Inner Peace</h3>
                <p className="text-sm text-gray-500">Q1 - Bed Room</p>
              </div>

              {/* Second image */}
              <div className="bg-white shadow-lg p-4 rounded-lg">
              <Image src={group2} alt="group2"width={300}height={300}></Image>
              </div>
            </div>
            {/* Slider Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
              <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
              <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};
