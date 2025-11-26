import { useState } from 'react';
import { FaRegUser, FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";

function Navbar() {

    return (
        <nav className="bg-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="">
                        <h1 className="text-xl font-bold">My Profile</h1>
                    </div>

                    <ul className="hidden md:flex space-x-6">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
                        <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                    </ul>

                    <div className="flex items-center space-x-4">
                        <FaRegUser className="text-gray-700 hover:text-blue-500 cursor-pointer" size={20} />
                        <AiFillHeart className="text-gray-700 hover:text-blue-500 cursor-pointer" size={20} />
                        <FaSearch className="text-gray-700 hover:text-blue-500 cursor-pointer" size={20} />
                        <BiListUl className="text-gray-700 hover:text-blue-500 cursor-pointer" size={20} />
                    </div>
                </div>
            </div>


        </nav>
    );
}

export default Navbar;
