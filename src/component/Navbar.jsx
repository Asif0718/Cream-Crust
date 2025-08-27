import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Menu, X } from "lucide-react"; // icons for hamburger menu

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-20 h-12 cursor-pointer" />
        </a>

        {/* Desktop Menu (lg and up) */}
        <div className="hidden lg:flex space-x-6 font-roboto">
          <a
            href="#bannerSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <a
            href="#exploreMenuSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => navigate("/")}
          >
            Explore Menu
          </a>
          <a
            href="#deliveryPaymentSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => navigate("/")}
          >
            Delivery & Payment
          </a>
          <a
            href="#followUsSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => navigate("/")}
          >
            Follow Us
          </a>
          <button
            onClick={() => navigate("/cart")}
            className="text-gray-800 hover:text-yellow-600 cursor-pointer"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>

        {/* Mobile Hamburger Button (< lg) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu (Right Side, No Overlay) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 p-6 font-roboto">
          <button
            className="self-end mb-4"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <a
            href="#bannerSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => { navigate("/"); setIsOpen(false); }}
          >
            Home
          </a>
          <a
            href="#exploreMenuSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => { navigate("/"); setIsOpen(false); }}
          >
            Explore Menu
          </a>
          <a
            href="#deliveryPaymentSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => { navigate("/"); setIsOpen(false); }}
          >
            Delivery & Payment
          </a>
          <a
            href="#followUsSection"
            className="text-gray-800 hover:text-yellow-600"
            onClick={() => { navigate("/"); setIsOpen(false); }}
          >
            Follow Us
          </a>
          <button
            onClick={() => { navigate("/cart"); setIsOpen(false); }}
            className="text-gray-800 hover:text-yellow-600 cursor-pointer"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
