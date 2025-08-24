import React from 'react'

function ThankingCustomers() {
  return (
    <section id="thankingCustomersSection" className="flex flex-col md:flex-row items-center py-16 px-6 bg-white">
    <img
      src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
      alt="Thank You"
      className="w-full md:w-50 ml-40 rounded-lg mb-8 md:mb-0"
    />
    <div className="md:ml-12 text-center md:text-left pl-15">
      <h1 className="text-3xl font-semibold mb-4">Thank You for Being With Us</h1>
      <p className="text-gray-600 mb-6">
        We appreciate your trust in us. Our customers are our family, and we always strive to
        provide the best service possible.
      </p>
      <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition">
        Redeem Gift
      </button>
    </div>
  </section>
  )
}

export default ThankingCustomers
