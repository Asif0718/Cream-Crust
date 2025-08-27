import React from 'react'

function DeliveryPayment() {
  return (
    <div className="grid gap-8 md:grid-col justify-center">
      <section
        id="deliveryPaymentSection"
        className="flex flex-col md:flex-row items-center py-16 px-6 bg-white"
      >

<img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
          alt="Thank You"
          className="block md:hidden w-70 sm:w-56 rounded-lg mb-6"
        />
        {/* Left Side: Text */}
        <div className="md:mr-12 text-center md:text-left md:mx-20 bg-white">
          <h1 className="text-3xl font-semibold mb-4">Delivery and Payment</h1>
          <p className="text-gray-600 mb-6">
            Enjoy hassle-free payment with our multiple payment options. Fast and reliable delivery
            right to your doorstep. Plus, you get a 5% discount on every order every time you pay
            online.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition">
            Order Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-100 flex justify-center bg-white">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
            alt="Delivery"
            className="hidden md:block md:w-50 rounded-lg mb-8 md:mb-0 sm:w-1/2"
          />
        </div>
      </section>
    </div>
  )
}

export default DeliveryPayment
