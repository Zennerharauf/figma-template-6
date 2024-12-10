import BrowseTheRange from "@/components/BrowseTheRange";
import Furniture from "@/components/Furniture";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Product from "@/components/Product";



export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <BrowseTheRange/>
     <Product/>
     <Inspiration/>
     <Furniture/>
    </div>
  )
}