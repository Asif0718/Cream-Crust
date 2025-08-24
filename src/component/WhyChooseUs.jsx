import React from 'react'

function WhyChooseUs() {
  return (
    <div className='mx-10'>
        <section id="wcuSection" className="bg-white py-16 px-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Why Choose Us?
        </h1>
        <p className="text-gray-600 mb-12">
          We use both original recipes and classic versions of famous food
          items.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 shadow border border-gray-300 rounded-xl bg-white hover:scale-103 hover:shadow-lg transition">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-serve.png"
              alt="Bakery Delight"
              className="w-20 mx-auto mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Bakery Delights</h2>
            <p className="text-gray-500 text-sm">
            Freshly baked happiness, straight from our oven to your table. Every treat is crafted with love and packed with care to give you nothing less than perfection.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl bg-white hover:scale-103 hover:shadow-lg transition  border border-gray-300">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/fruits-img.png"
              alt="Fresh Bakes"
              className="w-20 mx-auto mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Fresh Bakes</h2>
            <p className="text-gray-500 text-sm">
            Our bakery brings you oven-fresh breads, cakes, and pastries made with the finest ingredients. Every bite is baked with care to ensure you enjoy warmth, flavor, and freshness straight from our kitchen to your plate.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl bg-white hover:scale-103 hover:shadow-lg transition  border border-gray-300">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/offers-img.png"
              alt="Best Offers"
              className="w-20 mx-auto mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Sweet Deals</h2>
            <p className="text-gray-500 text-sm">
            Enjoy exclusive bakery offers with up to <span className="text-yellow-600 font-bold">50% OFF</span> on cakes, pastries, and breads. Treat yourself to freshly baked delights at the best prices with our special promo codes.
            </p>
          </div>
        </div>
        
      </section>
  </div>

  )
}

export default WhyChooseUs
