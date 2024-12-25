import Image from "next/image";
import image1 from "../public/product/Syltherine.png"
import image2 from "../public/product/leviosa.png"
import image3 from "../public/product/Lolito.png"
import image4 from "../public/product/Respira.jpeg"
import image5 from "../public/product/Grifo.png"
import image6 from "../public/product/Muggo.png"
import image7 from "../public/product/Pingky.jpeg"
import image8 from "../public/product/Potty.jpeg"


import { StaticImageData } from "next/image";

interface productsprops {
  id:number;
  name:string;
  description:string;
  price:string;
  discount:string;
  image:StaticImageData
}
const products:productsprops []= [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discount: "30%",
    image:image1,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount:"1%",
    price: "Rp 2.500.000",
    image: image2,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discount: "50%",
    image:image3,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discount:"2%",
    image: image4,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    discount:"1%",
    price: "Rp 1.500.000",
    image: image5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    discount:"1%",
    price: "Rp 150.000",
    image: image6,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    discount: "50%",
    image: image7,
  },
  {
    id: 8,
    name: "Potty",
    description: "Multifunctional flower pot",
    discount:"1%",
    price: "Rp 500.000",
    image: image8,
  },
];

export default function Product() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}