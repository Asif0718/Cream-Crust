import React from 'react'
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <img
        src={logo}
        alt="Logo"
        className="w-20 mx-auto mb-4"
      />
      <p className="text-gray-400">© 2025 Cream & All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
