import React from 'react'
import { FaLaptopCode } from "react-icons/fa"; 
import {Link} from "react-router-dom"

function Navbar() {
  return (
   <header class="text-white-600 body-fonst bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-indigo-400 mb-4 md:mb-0">
          <FaLaptopCode className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span className="ml-3 text-xl">Shumaila Riaz</span>
        </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/"  class="mr-5 text-white  hover:text-green-600">Home</Link>
      <Link to="/About" class="mr-5 text-white hover:text-green-600">About</Link>
      <Link to="/Projects" class="mr-5 text-white hover:text-green-600">Projects</Link>
      <Link to="/Contact" class="mr-5 text-white hover:text-green-600">Contact</Link>
    </nav>
   <a
  href="./src/assets/Shumaila Riaz CV,pdf"
  download
  className="inline-flex items-center text-white bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-900 rounded text-base mt-4 md:mt-0"
>
  Download Resume
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</a>

  </div>
</header>
  )
}

export default Navbar
