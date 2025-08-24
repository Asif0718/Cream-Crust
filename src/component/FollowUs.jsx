import React from 'react'

function FollowUs() {
  return (
    <section id="followUsSection" className="bg-gray-50 py-16 px-6 text-center">
    <h1 className="text-3xl font-semibold mb-8">Follow Us</h1>
    <div className="flex justify-center space-x-6">
       <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center  text-white rounded-full hover:scale-95 transition"
  >
    <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/>
    
  </a>
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center  text-white rounded-full hover:scale-95 transition"
  >
    <img src='https://cdn-icons-png.flaticon.com/128/15707/15707749.png'/>
    
  </a>
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center  text-white rounded-full hover:scale-95 transition"
  >
    <img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png'/>
    
  </a>
    </div>
  </section>
  )
}

export default FollowUs
