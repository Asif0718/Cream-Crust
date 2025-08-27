import React from 'react'

function ThankingCustomers() {
  return (
    <div className="mx-6 md:mx-20 bg-white">
      <section
        id="thankingCustomersSection"
        className="flex flex-col md:flex-row items-center py-16"
      >
        {/* Image Section */}
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
          alt="Thank You"
          className="w-1/2 sm:w-1/3 md:w-1/7 lg:w-1/ rounded-lg md:ml-20 mb-8 md:mb-0"
        />

        {/* Text Section */}
        <div className="md:ml-30  text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-4 ">
            Thank You for Being With Us
          </h1>
          <p className="text-gray-600 mb-6 ">
            We appreciate your trust in us. Our customers are our family, and we
            always strive to provide the best service possible.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition">
            Redeem Gift
          </button>
        </div>
      </section>
    </div>
  )
}

export default ThankingCustomers
