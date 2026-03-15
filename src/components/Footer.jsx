import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

<footer className="bg-black text-white">

  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

    {/* Logo Section */}
    <div>
      <h2 className="font-bold text-2xl mb-2">🌱 GreenNest</h2>
      <p>Bring nature into your home.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-bold mb-3">Quick Links</h3>

      <div className="flex flex-col gap-2">
        <Link className="hover:text-green-400">About</Link>
        <Link className="hover:text-green-400">Contact</Link>
        <Link className="hover:text-green-400">Privacy Policy</Link>
      </div>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="font-bold mb-3">Follow us</h3>

      <div className="flex flex-col gap-2 items-center md:items-start">

        <Link className="flex items-center gap-2 hover:text-green-400">
          <FaInstagram /> Instagram
        </Link>

        <Link className="flex items-center gap-2 hover:text-green-400">
          <FaFacebook /> Facebook
        </Link>

      </div>
    </div>

  </div>

  {/* Bottom copyright */}
  <div className="border-t border-gray-700 text-center py-4 text-sm">
    © 2026 GreenNest. All rights reserved.
  </div>

</footer>

  )
}

export default Footer