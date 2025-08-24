import React from 'react'
import plate from '../images/plate.png';

function HealthyFood() {
  return (
    <div className='grid gap-8 md:grid-col mx-20 justify-center'>    
    <section id="healthyFoodSection" className="flex flex-col md:flex-row items-center py-16 px-6 bg-white">
    <img
      src={plate}
      alt="Healthy Food"
      className="w-full md:w-1/4 rounded-lg mb-8 md:mb-0"
    />
    <div className="md:ml-12 text-center md:text-left">
      <h1 className="text-3xl font-semibold mb-4">Where Every Bite Feels Like a Celebration</h1>
      <p className="text-gray-600 mb-6">
      From creamy pastries to decadent brownies, our bakery is your sweet escape. Each creation is designed to make your moments special and leave you craving for more.
      </p>
      <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition">
        Watch Video
      </button>
    </div>
  </section>
  </div>
  )
}

export default HealthyFood
