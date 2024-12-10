import Image from "next/image";
import background from "../public/background.jpeg";


export default function Hero() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <Image
        src={background}
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
      />

      {/* Text Overlay */}
      <div className="absolute bottom-10 right-10 bg-[#fff3e3] p-6 rounded-lg max-w-md shadow-lg">
        <p className="text-sm mb-2">New Arrival</p>
        <h1 className="text-2xl font-bold mb-4 text-[#b88e2f]">Discover Our New Collection</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#b88e2f] text-white px-6 py-2 rounded hover:bg-gray-100">
          Buy Now
        </button>
      </div>
    </div>
  );
}
