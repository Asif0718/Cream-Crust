import React from 'react'
import { useNavigate } from 'react-router-dom'

function Banner() {
  const navigate=useNavigate();
  return (
    <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center" id="bannerSection"
        style={{
          backgroundImage:
            "url('https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/05cf3840-4756-467c-81c8-4a13f59089b9.png')",
        }}
      >
        <h1 className="text-white text-5xl font-light mb-4  hover:shadow-lg hover:scale-105 transition">
        Get Freshly Baked Treats Anytime
        </h1>
        <p className="text-gray-200 text-xl mb-6  hover:shadow-lg hover:scale-102 transition">Indulge in Cakes, Pastries & Breads Made with Love</p>
        <div>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg mr-4 cursor-pointer hover:shadow-lg hover:scale-105 transition" onClick={() => navigate("exploreMenu")}>
            View Menu
          </button>
          <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition"  onClick={() => navigate("/cart")}>
            Order Now
          </button>
        </div>
      </div>
  )
}

export default Banner
