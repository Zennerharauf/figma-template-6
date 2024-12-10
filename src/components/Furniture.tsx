import Image from "next/image";
import laptopsetup from "@/public/laptopsetup.png"
import chair from "@/public/chair.png"
import bedroom2 from "@/public/bedroom2.png"
import diningtable from "@/public/dinningtable.png"
import shelf from "@/public/shelf.png"
import camera from "@/public/camera.png"
import frame from "@/public/frame.png"
import stove from "@/public/stove.png"

export default function Furniture() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Share your setup with <span className="text-blue-500">#FuniroFurniture</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <div className="col-span-2 row-span-2">
          <Image src={laptopsetup} alt="laptop-setup" width={300} height={300}>
          </Image>
        </div>
        <Image src={chair} alt="chair" width={300} height={300}></Image>
        <Image src={bedroom2} alt="bedroom" width={300} height={300}></Image>
        <Image src={diningtable} alt="dining-table" width={300} height={300}></Image> 
        <Image src={shelf} alt="shelf" width={300} height={300}></Image>
        <Image src={camera} alt="camera" width={300} height={300}></Image>
        <Image src={frame} alt="frame" width={300} height={300}></Image>
        <Image src={stove} alt="stove " width={258} height={196}></Image>
      </div>
    </div>
  );
};

