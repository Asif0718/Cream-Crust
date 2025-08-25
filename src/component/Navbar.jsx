import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ import the cart context

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart(); // ✅ get cart here

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-20 h-12 cursor-pointer" />
        </a>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6 font-roboto">
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

          {/* ✅ Cart Button */}
          <button
            onClick={() => navigate("/cart")}
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
