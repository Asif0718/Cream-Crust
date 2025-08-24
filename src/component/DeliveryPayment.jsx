import React from 'react'

function DeliveryPayment() {
  return (

    <div className='ml-40 justify-center'>
      <section id="deliveryPaymentSection" className="flex flex-col md:flex-row items-center py-16 px-6 bg-gray-50">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-4">Delivery and Payment</h1>
          <p className="text-gray-600 mb-6">
            Enjoy hassle-free payment with our multiple payment options. Fast and reliable delivery
            right to your doorstep.Plus, you get a 5% discount on every order every time you pay online.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition">
            Order Now
          </button>
        </div>
        <div className='md:w-1/2 justify-center' >
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
          alt="Delivery"
          className="w-full md:w-2/5 rounded-lg mt-8 md:mt-0 ml-5"
        />
        </div>
      </section>
    </div>
  )
}

export default DeliveryPayment
