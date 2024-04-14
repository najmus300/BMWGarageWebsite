import React from 'react'

function Header() {
  return (
    <nav className="bg-gray-800 py-4">
    <div className="container mx-auto flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
        BMW
      </button>
      <div className="flex mr-96"></div> {/* This will push the tabs to the center */}
      <div className="flex space-x-6 ml-80">
        <button className=" text-white font-bold py-2 px-4 rounded">
          Home
        </button>
        <button className=" text-white font-bold py-2 px-4 rounded">
          About us
        </button>
        <button className=" text-white font-bold py-2 px-4 rounded">
          Designs
        </button>
      </div>
      <button className=" text-blue-800 border-solid border-2 border-zinc-400 font-bold py-2 px-4 ml-24">
        Pricing
      </button>
    </div>
  </nav>
  )
}

export default Header
