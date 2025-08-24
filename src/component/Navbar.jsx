import React from 'react'
import logo from "../images/logo.png";
import { Navigate, useNavigate } from 'react-router-dom';

function navbar() {
  const navigate=useNavigate();
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a onClick={() => navigate("/")} >
            <img
              src={logo}
              alt="logo"
              className="w-20 h-12 cursor-pointer" 
            />
          </a>
          <div className="hidden md:flex space-x-6 font-roboto">
            <a href="" className="text-gray-800 hover:text-yellow-600">
              My Orders
            </a>
            <a href="#exploreMenuSection" onClick={()=>navigate('exploreMenu')} className="text-gray-800 hover:text-yellow-600 ">
              Explore Menu
            </a>
            <a href="#deliveryPaymentSection"  onClick={()=>navigate('/')} className="text-gray-800 hover:text-yellow-600">
              Delivery & Payment
            </a>
            <a href="#followUsSection"  onClick={()=>navigate('/')} className="text-gray-800 hover:text-yellow-600">
              Follow Us
            </a>
          </div>
        </div>
      </nav>
  )
}

export default navbar
