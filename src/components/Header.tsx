import Image from "next/image"
import logo from "../public/logo.png"
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

export default function Header() {
    return (
        <div >
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image 
                        src={logo} 
                        alt="websitelogo" 
                        width={100} 
                        height={100}
                        ></Image>
                        <span className="ml-3 text-xl">Furniro</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Home</a>
                        <a className="mr-5 hover:text-gray-900">Shop</a>
                        <a className="mr-5 hover:text-gray-900">Blog</a>
                        <a className="mr-5 hover:text-gray-900">Contact</a>
                    </nav>
                    <MdManageAccounts />
                    <FiSearch />
                    <FaRegHeart />
                    <IoCartOutline />
                    
                </div>
            </header>
        </div>
    )
}


